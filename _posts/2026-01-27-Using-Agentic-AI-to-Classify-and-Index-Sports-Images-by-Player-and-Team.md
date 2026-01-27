---
layout: post
title: Using Agentic AI to Classify and Index Sports Images by Player and Team
comment: true
description: 
image: 
tags: ai-ml, agentic-ai, strands, aws-bedrock
---

## Why do we need this?

If you are responsible to maintain the media for your website, one of the challenges is to make the assets searchable. One approach is to _tag_ the assets or _enrich_ the asset with metadata. In this article, I want to explore a common pattern that is seen by most organized sport websites - "Tag images by team and player based on their dress". This task is not easy:

* It requires a computer vision capability to identify people.
* For each person, the system must recognize the dress colors.
* It should be able to read the number on the T-Shirt.

Using these basic capabilities, we need to identify:

* Is the person a player or a non-player?
* For each player, identify the team
* Using the combination of the team and jersey number, identify the person

The last part is critical since the face is obscured by helmet and other safety equipment.

In other words, this is a task that is quite perfect for AI!

## Solution Approach

In my approach to this problem, I felt that we can handle it using Agentic AI. We need 2 primary agents:

* **Agent 1**: Identify individuals and their teams and jersey numbers.
* **Agent 2**: For each player, perform a web search and identify the player.

>[!TIP]
>In a realistic use-case, _Agent 2_ may not be required. If you are NBA/NFL or the team, you already have the database of player number to player name. We only need this if no such database is available.

In this article, I will be using the pure LLM-based solution.

### Workflow

The code for player identification works as follows:

1. User submits an image URL for player identification.
    1. Request hits a backend running [AWS Strands](https://strandsagents.com/latest/documentation/docs/) agentic framework.
    2. The framework offers a tool `image_reader`. Using this tool, we download the image and convert it to bytes.
    3. Framework then submits the request to an LLM.

2. In our use-case, we are using LLM models on Bedrock. For simplicity, we use the default model which happens to be Claude 4.5 Sonnet.

    1. LLM Model idenfies if there are players in the image.
    2. For each player, it identifies the team and player number.
    3. In our prompt, we ask the model to extract other information like the primary colors on the player's uniform, confidence level for team and player number.

3. LLM returns the result. Strands then loops through each player and passes this information to the next agent.For each player, LLM receives the team, player number and a tool for web-search.
4. LLM then runs a search and parses the result to identify the player.
5. LLM returns the player name and confidence metric. Strands then stitches the JSON received from Agent 1 (step 2) and JSON from for player name into one final result.
6. Final response is then sent back to the user.

Here is a high level block diagram of the workflow.

![workflow for player identification](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650,e_improve/blog/player-identification.drawio.png)

## Code Walk Through

The code is available on Github.
* https://github.com/akshay-ranganath/player-identification

> [!NOTE]
> You will see extra files in the project. They were created while I was trying to learn Strands. This project also underwent changes. It started as a single prompt system to 3 agent system to the final incarnation of a 2 agent system!

In this project, I used `uv`. All the secrets should be placed in a file named `.env` at the project root. Here are the core variables expected:

```
AWS_PROFILE=
AWS_DEFAULT_PROFILE=
SERP_API_KEY=
```

`AWS_PROFILE` and `AWS_DEFAULT_PROFILE` are needed for the access to AWS service. I assume you have the ability to create AWS login parameters. In my case, I am using a profile name for accessing the services.

`SERP_API_KEY` is needed for the web search. You can obtain a free API key from https://serpapi.com/.

You can install dependencies and run the code with these 2 commands:

```
uv sync
uv run streamlit run app.py
```

### Guardrails

To prevent the solution from hallucinating and from providing response that is not structured, we rely on 2 items:

* Detailed prompt with definition of the format with a one-shot example JSON.
* In `utils.py` we run checks for valid JSON. In a production system, this would have used a more robust `pydantic` model for type checking.

## Execution Flow

For this use-case, I am using the [Canadian Football League](https://www.cfl.ca/). One of the reasons is that I can easily verify the output by checking against the database of [all players](https://www.cfl.ca/players/) that is available in the public.

Let's see an execution in action!

Test URL: https://static.cfl.ca/wp-content/uploads/Destin_Talbert_2025_002-800x451.jpg

![Canadian football league player](https://static.cfl.ca/wp-content/uploads/Destin_Talbert_2025_002-800x451.jpg)
[Source](https://static.cfl.ca/wp-content/uploads/Destin_Talbert_2025_002-800x451.jpg)

When submitted, the system generates an output like below:

![sample program output](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650,e_sharpen/blog/cfl-sample-output.png)

Along with the outputs, it will also clearly show the token use. This can be helpful in estimating the costs for running the system in a long term project.

## Learnings

Working on this project helped me learn quite a few things about working with agents. 

* When building code with tools like Cursor, make the agent think like a human. Start by adding a lot of debug messages. Remove them when logic seems to be solid.
* Start with good specification. If the initial spec is inaccurate or unclear, the code generated will not work.
* Don't try to do everything with a single prompt. It is a setup for failure.
* Break the job logically. If you as a human programmer would have kept 2 things separate, it probably maps to 2 agents.
* Start small and then keep incrementing. Don't try to build the entire system at once.


Here are some thing I could have done differently:

* Start by having the system build a bunch of tests. This could have saved lot of time for me in testing with UI.
* Use pydantic for type checking.
* Enhance this solution to run a [perceptual hashing (pHash)](https://en.wikipedia.org/wiki/Perceptual_hashing) prior to sending to LLM. Using this concept, I can cache the result. This will avoid costly requests to LLM and faster response to users.