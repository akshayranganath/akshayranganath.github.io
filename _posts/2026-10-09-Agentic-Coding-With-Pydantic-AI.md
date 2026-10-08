---
layout: post
title: Building AI Agents with Pydantic AI: A Hands-On Tutorial
comment: true
description: From one local model call to a tool-using, observable, API-served, routed agent with Pydantic AI.
image: /images/blog/capability_staircase.png
tags: ai-ml, ai-agents, pydantic-ai, python, mcp
---

# Building AI Agents with Pydantic AI: A Hands-On Tutorial

> **From one local model call to a tool-using, observable, API-served, routed agent**

## Why agents—and why agentic development is different

Traditional programs follow control flow that developers specify in advance: inputs are parsed, functions are called, and outputs are validated. An agent adds a model-driven decision step: at runtime, it can choose a tool, inspect the result, revise its approach, and continue until it can produce an answer. That makes development less about encoding every branch and more about designing typed tools, context, limits, validation, and observability around a bounded loop whose behavior is partly nondeterministic.

This tutorial walks through the numbered examples in [Akshay Ranganath’s Pydantic AI tutorial repository](https://github.com/akshayranganath/my-ai-projects/tree/main/pydantic/pydantic-ai-tutorial), focusing on files `001` through `011`. The examples build one idea at a time: start with a model and instructions, add conversation memory, introduce asynchronous execution, connect tools and MCP, add telemetry and filesystem access, expose the agent through FastAPI, and finally route prompts to specialized agents.

The final section uses the repository’s [`agent_loop`](https://github.com/akshayranganath/my-ai-projects/tree/main/pydantic/pydantic-ai-tutorial/agent_loop) project as the touchstone. It shows how the same primitives compose into a small agent runtime with three nested loops:

![Overview of the agent, chat, goal, and tool loops](/images/blog/ai_agent_workflow.png)


## What you will learn

By the end, you will understand how to:

- Configure Pydantic AI against a local OpenAI-compatible model.
- Run an agent synchronously, asynchronously, and as a conversation.
- Preserve message history between turns.
- Add built-in capabilities such as web search.
- Register typed Python tools with `@agent.tool` and `@agent.tool_plain`.
- Trace model and tool calls with Logfire.
- Connect external tools through the Model Context Protocol (MCP).
- Give an agent bounded filesystem and shell access.
- Serve an agent through a FastAPI endpoint.
- Route a prompt through a classifier to a specialized agent.
- Separate a chat loop, a goal loop, and the tool loop managed by Pydantic AI.

![explanation of code files](/images/blog/capability_staircase.png)

## Prerequisites and setup

The repository currently targets Python 3.14+, uses `uv`, and declares Pydantic AI, Logfire, FastAPI, MCP-related packages, and the Jev SDK in [`pyproject.toml`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/pyproject.toml). The project README documents LM Studio as the default local OpenAI-compatible server for lessons 1–7 and 11.

### 1. Install dependencies

```bash
cd pydantic/pydantic-ai-tutorial
uv sync
```

### 2. Start a local model

Start an OpenAI-compatible server such as LM Studio at:

```text
http://localhost:1234/v1
```

The examples use:

```text
model_name = nvidia/nemotron-3-nano-4b
api_key   = lm-studio
```

The API key is a placeholder accepted by the local server. If you use another model or endpoint, update the `OpenAIChatModel` and `OpenAIProvider` values.

### 3. Configure lessons 8–10

Create a `.env` file for the examples that use environment-based configuration:

```dotenv
MODEL_NAME=nvidia/nemotron-3-nano-4b
BASE_URL=http://localhost:1234/v1
API_KEY=lm-studio
SAFE_FILE_SYSTEM_FOLDER=./tool_access
```

Treat `SAFE_FILE_SYSTEM_FOLDER` as a real security boundary. Use a dedicated folder, not your home directory or the whole repository.

### 4. Run a lesson

Each numbered file is a complete script:

```bash
uv run python 001_hello_world.py
```

Most examples are interactive. Type `exit` or press `Ctrl+C` to stop.

## The core mental model: an agent is a typed loop

A basic LLM call looks like this:

```text
prompt → model → text
```

An agent adds the control flow around the model:

```text
prompt
  → model decides whether it needs a tool
  → tool runs
  → tool result returns to the model
  → model continues or produces a final answer
```

Pydantic AI gives that loop a Python interface. You declare the model, instructions, capabilities, tool functions, dependencies, and—when needed—a structured output type. The important distinction is that your Python code remains in charge of the tools and boundaries; the model chooses when to use the capabilities you expose.

## Lesson 1 — The smallest useful agent

File: [`001_hello_world.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/001_hello_world.py)

The first example has three parts:

```python
from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIChatModel
from pydantic_ai.providers.openai import OpenAIProvider

model = OpenAIChatModel(
    model_name="nvidia/nemotron-3-nano-4b",
    provider=OpenAIProvider(
        base_url="http://localhost:1234/v1",
        api_key="lm-studio",
    ),
)

agent = Agent(
    model,
    instructions="""
    You are a friendly pirate.
    Keep your responses friendly but in pirate language.
    """,
)

result = agent.run_sync("Say hello and explain you are running locally")
print(result.output)
```

### What matters here

- `OpenAIChatModel` describes which model to call.
- `OpenAIProvider` points the client at an OpenAI-compatible endpoint.
- `instructions` establishes the agent’s behavior.
- `run_sync` blocks until the model finishes.
- `result.output` contains the final answer.

This is a useful baseline because it isolates the agent abstraction from tools, servers, and application code.

## Lesson 2 — Turn one call into a conversation

File: [`002_simple_agent_chat.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/002_simple_agent_chat.py)

The second example wraps the agent in a REPL. The key addition is message history:

```python
message_history = []

while True:
    user_input = input("\nYou: ").strip()

    if user_input.lower() == "exit":
        break
    if not user_input:
        continue

    result = agent.run_sync(
        user_input,
        message_history=message_history,
    )
    print(f"Assistant: {result.output}")

    message_history = result.all_messages()
```

`message_history` is explicit. The agent does not magically remember earlier turns; your application decides which messages to send back on the next run.

This pattern gives you a clear control point for:

- Trimming old history.
- Persisting conversations in a database.
- Starting a new session.
- Redacting sensitive messages.
- Passing the same conversation to a different agent.

The example also demonstrates a practical development habit: catch exceptions at the REPL boundary so a single failed request does not terminate the entire process.

## Lesson 3 — Move to asynchronous execution

File: [`003_simple_agent_async_chat.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/003_simple_agent_async_chat.py)

The conversational structure stays almost the same, but the model call becomes asynchronous:

```python
async def main() -> None:
    message_history = []

    while True:
        user_input = await asyncio.to_thread(
            input,
            "You: ",
        )
        user_input = user_input.strip()

        if user_input.lower() == "exit":
            break
        if not user_input:
            continue

        result = await agent.run(
            user_input,
            message_history=message_history,
        )
        print(f"Assistant: {result.output}")
        message_history = result.all_messages()

asyncio.run(main())
```

`agent.run()` is the async counterpart to `run_sync()`. The example uses `asyncio.to_thread(input, ...)` because Python’s built-in `input()` is blocking. Moving it to a worker thread keeps the event loop available while waiting for user input.

The rule of thumb is simple:

- Use `run_sync()` for small scripts and synchronous environments.
- Use `run()` inside async applications, services, and concurrent workflows.

## Lesson 4 — Give the agent a built-in capability

File: [`004_simple_agent_async_with_tools.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/004_simple_agent_async_with_tools.py)

The fourth example adds local DuckDuckGo search:

```python
from pydantic_ai.capabilities import WebSearch

agent = Agent(
    model,
    instructions="""
    You are a helpful assistant.
    Use web search when the user asks about current information
    or explicitly asks you to search.
    When using search, always include the source URLs in the answer.
    """,
    capabilities=[
        WebSearch(local="duckduckgo"),
    ],
)
```

The model can now decide that a question needs current information and call the search capability. The Python application still owns the capability: the model cannot call arbitrary network code unless you attach it.

This lesson also prints `result.new_messages()`. That is valuable when learning because the final answer hides the intermediate tool activity. Inspecting messages lets you see the request, the tool call, the tool result, and the final response.

### Design lesson: instructions are part of the tool contract

The instructions tell the model:

- When search is appropriate.
- How often it may search.
- What to do after useful results arrive.
- Whether source URLs must appear in the answer.

Tool definitions make an action available; instructions explain when and why the model should use it.

## Lesson 5 — Add observability with Logfire

File: [`005_simple_agent_async_with_tools_and_telemetry.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/005_simple_agent_async_with_tools_and_telemetry.py)

The search agent gains two lines of instrumentation:

```python
import logfire

logfire.configure()
logfire.instrument_pydantic_ai()
```

This is the first point where the tutorial treats an agent as a system that needs debugging, not just a function that returns text. Agent behavior can involve multiple model turns and tool calls, so the final answer alone is not enough to diagnose a problem.

Use traces to answer questions such as:

- Did the model call the search capability?
- How many model requests did one user turn produce?
- Did the tool fail, or did the model misunderstand the result?
- Which instruction or tool call led to the final answer?

The example also tightens the search policy: search at most twice for one request, then answer from the useful results already available.

## Lesson 6 — Add a typed Python tool

File: [`006_agent_async_with_multiple_tools_and_telemetry.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/006_agent_async_with_multiple_tools_and_telemetry.py)

The agent now combines web search with a custom Fahrenheit-to-Celsius converter:

```python
from pydantic_ai import Agent, RunContext

@agent.tool
async def get_temperature_in_celcius(
    ctx: RunContext[None],
    temperature: float,
) -> float:
    """Convert Fahrenheit to Celsius."""
    return f"{(temperature - 32) * (5 / 9):.2f}"
```

The function signature and docstring are important:

- The type annotation tells the framework that `temperature` is a number.
- The docstring helps describe the tool to the model.
- `RunContext` is the hook for accessing dependencies and run-scoped context.
- The function is ordinary Python. You can test its calculation without involving a model.

The instructions explicitly tell the model to use the tool for Celsius conversion. That creates a simple but complete tool-call loop:

![Sequence of a temperature conversion tool call](sandbox:/home/user/output/pydantic_ai_tool_call_sequence.png)

### `@agent.tool` versus `@agent.tool_plain`

Use `@agent.tool` when the function needs `RunContext`, dependencies, or run-level state. Use `@agent.tool_plain` for a plain function that needs no context. The `agent_loop` project uses the latter for its workspace shell command and the former for its Python runner.

![sequence diagram for temperature tool](/images/blog/temperature_tool_sequence.png)

## Lesson 7 — Connect an MCP toolset

File: [`007_agent_with_multiple_tools_and_telemetry_mcp.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/007_agent_with_multiple_tools_and_telemetry_mcp.py)

The seventh example adds Playwright through MCP:

```python
from pydantic_ai.mcp import MCPToolset
from fastmcp.client.transports import StdioTransport

playwright_mcp = MCPToolset(
    StdioTransport(
        command="npx",
        args=[
            "-y",
            "@playwright/mcp@latest",
            "--headless",
        ],
    )
)

agent = Agent(
    model,
    capabilities=[WebSearch(local="duckduckgo")],
    toolsets=[playwright_mcp],
)
```

MCP separates the tool implementation from the agent process. The agent connects to a server over a standard protocol and discovers the tools it exposes. Here, the Playwright MCP server gives the agent browser interaction capabilities.

The tutorial’s instructions create an intentional policy boundary: use Playwright when the user asks the agent to browse or interact with a web page. Without that instruction, the model may not reliably choose the new tool when it is appropriate.

## Lesson 8 — Scope filesystem access

File: [`008_agent_with_file_edit_access.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/008_agent_with_file_edit_access.py)

This lesson loads configuration from `.env` and starts the MCP filesystem server with one allowed workspace:

```python
workspace = os.environ.get("SAFE_FILE_SYSTEM_FOLDER")

file_system_mcp = MCPToolset(
    StdioTransport(
        command="npx",
        args=[
            "-y",
            "@modelcontextprotocol/server-filesystem",
            workspace,
        ],
    )
).prefixed("fs")
```

The `fs` prefix makes the tool names easy to distinguish from browser or other tools. The agent instructions also make the user expectation explicit: if the requested file ends in `.md`, format it as Markdown.

The important security idea is not “the agent can edit files.” It is “the agent can edit files inside one deliberately chosen root.” A production implementation should add authentication, authorization, audit logging, and additional validation around that boundary.

## Lesson 9 — Add a restricted shell tool

File: [`009_agent_with_file_edit_bash_access.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/009_agent_with_file_edit_bash_access.py)

This lesson does not attach the filesystem MCP server. Instead, it adds a small, explicit command tool:

```python
ALLOWED_COMMANDS = {
    "pwd",
    "ls",
    "cat",
    "find",
    "grep",
    "head",
    "tail",
    "git",
}

@agent.tool_plain
async def run_workspace_command(command: str) -> str:
    """Run a limited read-oriented command in the agent workspace."""
    parts = shlex.split(command)
    if not parts:
        return "No command provided"

    program = parts[0]
    if program not in ALLOWED_COMMANDS:
        raise ValueError(f"Command not allowed: {program}")
```

The example adds several useful guardrails:

- Only an allowlist of programs is accepted.
- Absolute paths and `..` traversal are rejected.
- The subprocess runs with a minimal `PATH`.
- The working directory is the configured workspace.
- The process has a timeout.

This is much safer than giving a model a generic shell. It is still not a complete sandbox: the subprocess inherits the parent environment, so secrets and process-level permissions must be considered separately.

## Lesson 10 — Serve the agent as an API

File: [`010_agent_as_an_api.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/010_agent_as_an_api.py)

The tenth example replaces the REPL with FastAPI. The request and response models make the boundary explicit:

```python
class ChatRequest(BaseModel):
    prompt: str = Field(min_length=1)
    session_id: str | None = None

class ChatResponse(BaseModel):
    output: str
    session_id: str
```

The endpoint reuses message history by session:

```python
sessions: dict[str, list[ModelMessage]] = {}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    session_id = request.session_id or str(uuid.uuid4())
    message_history = sessions.get(session_id, [])

    result = await agent.run(
        request.prompt,
        message_history=message_history,
    )

    sessions[session_id] = result.all_messages()
    return ChatResponse(
        output=str(result.output),
        session_id=session_id,
    )
```

The API exposes three useful operational ideas:

- `/health` gives a simple liveness check.
- `session_id` lets the client continue a conversation.
- FastAPI’s lifespan keeps the Playwright and filesystem MCP subprocesses alive for the server lifetime.

The session store is intentionally simple and in memory. Restarting the server clears chat history. A production service would use a durable store, enforce session ownership, apply request limits, and avoid returning raw exception messages to clients.

Run it directly because the filename starts with a digit:

```bash
uv run python 010_agent_as_an_api.py
```

Then open `http://127.0.0.1:8000/docs` for the generated OpenAPI UI.

## Lesson 11 — Route prompts to specialized agents

File: [`011_agent_with_jev.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/011_agent_with_jev.py)

Instead of making one general-purpose agent handle every audience, the example defines three agents:

- `deep_research_agent` for detailed, technical answers.
- `elementary_answer_agent` for short, jargon-free answers.
- `general_answer_agent` as the default.

A Jev classifier chooses among those labels:

```python
from typesafe_sdk import Choice, TypeSafeClient

jev_client = TypeSafeClient()

def identify_agent_type(prompt: str) -> str:
    response = jev_client.system_one(
        state=prompt,
        questions={
            "query_type": Choice(
                instructions="What kind of a prompt/question is this?",
                criteria={
                    "elementary": "Simple question suitable for elementary children",
                    "research": "A deep research problem suitable for advanced students",
                    "general": "Suitable for any audience",
                },
            )
        },
    )
    return response.answers["query_type"].choice
```

The routing map is deliberately boring—and that is a strength:

```python
agent_type_mapping = {
    "elementary": elementary_answer_agent,
    "research": deep_research_agent,
    "general": general_answer_agent,
}

agent_type = identify_agent_type(user_input)
selected_agent = agent_type_mapping.get(
    agent_type,
    general_answer_agent,
)

result = await selected_agent.run(
    user_input,
    message_history=message_history,
)
```

All three agents share the same local model and web-search capability. Their behavior changes through instructions, not through a completely different runtime.

The example also keeps one shared `message_history`, so a follow-up can be routed to a different specialist while preserving the conversation context. If classification fails, the code falls back to the general agent.

## Touchstone project — understanding `agent_loop`

Directory: [`agent_loop`](https://github.com/akshayranganath/my-ai-projects/tree/main/pydantic/pydantic-ai-tutorial/agent_loop)

The numbered lessons teach individual capabilities. `agent_loop` combines them into a modular runtime. Its README identifies these responsibilities:


| Module                                                                                                                                  | Responsibility                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`config.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/config.py)           | Load `.env`, build the model, resolve the workspace, and configure Logfire.   |
| [`deps.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/deps.py)               | Define `AgentDeps`, a dataclass containing the workspace path.                |
| [`search.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/search.py)           | Expose local DuckDuckGo search and search instructions.                       |
| [`file_access.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/file_access.py) | Start the MCP filesystem server, filter its tools, and prefix them with `fs`. |
| [`code_runner.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/code_runner.py) | Expose `run_python` through a `FunctionToolset`.                              |
| [`agent.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/agent.py)             | Construct the agent and implement the goal loop.                              |
| [`main.py`](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/agent_loop/main.py)               | Run the REPL, choose chat versus goal mode, and preserve chat history.        |


The modules do not import one another’s tool implementations. `agent.py` is the composition root: it wires the model, capabilities, toolsets, instructions, and dependency type together.

![Overview of the agent, chat, goal, and tool loops](/images/blog/agent_run_workflow.png)


### The three loops

The most important design idea is that there are three different loops, each with a different owner:


![agentic loop](/images/blog/agent_loop_flowchart.png)

#### 1. The chat loop

`main.py` owns input, exit handling, printing, and conversational history:

```python
async with agent:
    while True:
        user_input = (
            await asyncio.to_thread(input, "You: ")
        ).strip()

        if user_input.lower() == "exit":
            break
        if not user_input:
            continue

        if user_input.startswith("goal:"):
            await run_goal(
                user_input.removeprefix("goal:").strip(),
                deps,
            )
            continue

        result = await agent.run(
            user_input,
            message_history=message_history,
            deps=deps,
            usage_limits=UsageLimits(request_limit=15),
        )
        print(f"Agent: {result.output}")
        message_history = result.all_messages()
```

The `async with agent` context is important because MCP subprocesses need to remain available for the session. A plain prompt updates chat history; a `goal:` prompt enters the goal loop and does not write its internal history back into the chat conversation.

#### 2. The goal loop

`run_goal` turns one user objective into up to five agent steps:

```python
class StepReport(BaseModel):
    done: bool = Field(
        description="True only when the whole goal is complete and verified."
    )
    summary: str = Field(description="What you did in this step.")
    next_step: str | None = Field(
        default=None,
        description="What to do next if not done.",
    )

MAX_STEPS = 5

async def run_goal(goal: str, deps: AgentDeps) -> None:
    history = []
    prompt = goal

    for step in range(1, MAX_STEPS + 1):
        result = await agent.run(
            prompt,
            message_history=history,
            deps=deps,
            output_type=PromptedOutput(StepReport),
            usage_limits=UsageLimits(request_limit=15),
        )

        report = result.output
        history = result.all_messages()
        print(f"[step {step}] {report.summary}")

        if report.done:
            print("Goal complete.")
            return

        prompt = (
            "Continue toward the goal.\n"
            f"Your planned next step: {report.next_step}"
        )

    print(f"Stopped after {MAX_STEPS} steps without finishing.")
```

The goal loop has its own history because it is an internal workflow. It asks the model to return a `StepReport`, not ordinary chat text. That typed report gives the host program a reliable control signal: continue, or stop because the goal is complete.

#### 3. The Pydantic AI tool loop

Inside each `agent.run`, Pydantic AI manages the model/tool conversation:

```text
agent.run
  → model receives the user prompt and available tools
  → model requests zero or more tools
  → Python/MCP tool executes
  → result is sent back to the model
  → model either calls another tool or returns output
```

This is why a single chat turn can involve several model requests even though the application calls `agent.run()` once.

### Dependency injection with `AgentDeps`

The dependency object is intentionally small:

```python
@dataclass
class AgentDeps:
    workspace: Path
```

The agent declares it with `deps_type=AgentDeps`. A dynamic instruction then makes the workspace visible to the model:

```python
@agent.instructions
def workspace_hint(ctx: RunContext[AgentDeps]) -> str:
    return (
        f"The workspace folder is {ctx.deps.workspace}. "
        "Always pass absolute paths inside this folder to the fs_ tools. "
        f"Code run with run_python executes in "
        f"{ctx.deps.workspace / 'scratch'}."
    )
```

This is preferable to putting mutable runtime state in global prompt strings. The host application constructs `AgentDeps` for the run, and the tool layer receives the same context through `RunContext`.

### Configuration and the local model profile

`config.py` loads the model settings from `.env` and turns off JSON-object mode:

```python
model = OpenAIChatModel(
    model_name=os.environ["MODEL_NAME"],
    provider=OpenAIProvider(
        base_url=os.environ["BASE_URL"],
        api_key=os.environ["API_KEY"],
    ),
    profile=OpenAIModelProfile(
        supports_json_object_output=False,
    ),
)
```

The profile choice is a compatibility workaround for the local model used by the project. The README explains that `PromptedOutput(StepReport)` needs to validate structured data while allowing the model to return JSON in normal message text. If JSON-object mode is enabled, the local server rejects the `response_format` body.

This is a useful general lesson: “OpenAI-compatible” describes an interface, not necessarily identical behavior across every model server. Model profiles let the application describe those differences explicitly.

### Filesystem tools: filter before exposing

`file_access.py` starts the MCP filesystem server with the workspace path, then exposes only the selected operations:

```python
FS_TOOLS = [
    "read_text_file",
    "write_file",
    "edit_file",
    "list_directory",
    "search_files",
    "get_file_info",
]

file_tools = (
    MCPToolset(
        StdioTransport(
            command="npx",
            args=[
                "-y",
                "@modelcontextprotocol/server-filesystem",
                str(WORKSPACE),
            ],
        )
    )
    .filtered(lambda ctx, tool_def: tool_def.name in FS_TOOLS)
    .prefixed("fs")
)
```

The server root and the tool filter solve different problems:

- The root limits where the server can operate.
- The filter limits which operations the model can request.
- The prefix makes the tools discoverable without name collisions.

### Running Python safely enough for a tutorial

`code_runner.py` adds `run_python` through a `FunctionToolset`. It writes model-provided code to `workspace/scratch/snippet.py`, runs it with the current Python interpreter, enforces a 15-second timeout, and truncates long output to the last 2,000 characters.

Those controls reduce risk and make failures easier for the model to repair, but they do not make arbitrary code execution safe. The subprocess inherits the parent environment. For production use, run untrusted code in a real sandbox with restricted permissions, resource limits, network policy, and secret isolation.

### Search policy as reusable instructions

`search.py` keeps the search capability and its behavioral rules together:

```python
web_search = WebSearch(local="duckduckgo")

SEARCH_INSTRUCTIONS = """
Use web search only when the user asks about current information
or explicitly asks you to search the web.
Search no more than twice per user request.
After useful results arrive, answer instead of searching again.
Always include the source URLs in your answer.
"""
```

This is a small but scalable pattern: package a capability with the instructions needed to use it well, then compose those instructions in the main agent.

## What the repository teaches as a whole

The progression can be summarized as a capability staircase:

![Capability staircase from the numbered lessons to agent_loop](sandbox:/home/user/output/pydantic_ai_capability_staircase.png)

Each step adds one new responsibility while preserving the basic agent call. That makes the examples useful as a debugging strategy: when a sophisticated agent misbehaves, reduce it to the smallest lesson that reproduces the problem, then add capabilities back one at a time.

## Practical guardrails before production

The tutorial is intentionally hands-on, but several examples expose powerful capabilities. Before deploying a similar system:

- Set explicit request, tool-call, token, and time limits.
- Treat tool docstrings and type hints as part of the model-facing API.
- Keep filesystem access inside a dedicated, authorized workspace.
- Filter MCP tools rather than exposing every server operation.
- Never treat an allowlist as a complete shell sandbox.
- Run model-written code in an isolated execution environment.
- Store chat history durably only with session ownership and retention controls.
- Avoid returning raw exception messages from an HTTP API.
- Instrument model calls, tool calls, retries, and latency.
- Test the tool functions independently of the model.
- Add approval gates before destructive file, browser, or external-system actions.

## Closing perspective

The most valuable idea in this repository is not a particular prompt or provider. It is the separation of concerns:

- Pydantic AI owns the model/tool interaction loop.
- Your Python functions own deterministic actions.
- MCP connects external tool servers through a standard interface.
- Dependencies carry runtime state without global variables.
- Logfire makes the execution trace visible.
- FastAPI turns the agent into an application boundary.
- Routing lets specialized agents serve different audiences.
- `agent_loop` composes those pieces into a runtime with explicit chat and goal control flow.

Start with `001_hello_world.py`, change one thing, and run it. Then work forward until you can explain not only what the agent answered, but which loop made the decision, which tool executed, what context it received, and where the safety boundary lives.

## Sources and further reading

- [Pydantic AI tutorial repository](https://github.com/akshayranganath/my-ai-projects/tree/main/pydantic/pydantic-ai-tutorial)
- [Tutorial README](https://github.com/akshayranganath/my-ai-projects/blob/main/pydantic/pydantic-ai-tutorial/README.md)
- [Pydantic AI documentation](https://ai.pydantic.dev/)
- [Pydantic AI agent documentation](https://ai.pydantic.dev/agent/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [Logfire documentation](https://logfire.pydantic.dev/)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Filesystem MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

