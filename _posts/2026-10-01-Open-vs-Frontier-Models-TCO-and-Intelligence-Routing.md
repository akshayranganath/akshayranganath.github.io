---
layout: post
title: Cheap Tokens, Expensive Answers - Why Open vs Frontier Is the Wrong Question
comment: true
description: Price cuts from frontier labs have changed the total cost of ownership math. Sometimes frontier models are cheaper than Open Models. The real answer is intelligence routing.
image: /images/blog/intelligence-routing-hero.jpeg
tags: ai-ml, llm, gen-ai, open-weight, routing, tco
---

![Image: Hero image for intelligence routing](/images/blog/intelligence-routing-hero.jpeg)

For a long time, the mental model for picking an LLM was simple. Frontier models from OpenAI, Anthropic and Google were the expensive, premium choice. Open-source and open-weight models were the cheap, "good enough" choice.

That mental model is now broken.

In this post, I want to walk through why the cost question has flipped in some cases, what the data from Artificial Analysis actually shows, and why I think the real answer is not _open vs frontier_ but _intelligence routing_.

>Disclaimer: I work for Glean as a Solution Architect. Opinions here are mine.

For simplicity, I'll refer to open-source and open-weight models as **Open Models** throughout this post.

## A quick recap

A few months back, I wrote [Beyond the FUD - A More Balanced View of Chinese AI Models](https://akshayranganath.github.io/Beyond-FUD-A-Balanced-View-of-Chinese-AI-Models/). The post was about DeepSeek, Qwen, GLM and Kimi, but if I had to compress it into one line, it would be this: the conversation was never really about benchmarks. It was about **total cost of ownership (TCO)**.

Open Models changed the economics of AI. But as I noted in that post, _"these models come with a significant cost of ownership."_ Self-hosting, governance, safety and operations are not free. I also pointed out that cheaper intelligence does not reduce demand. It expands it. Jevons paradox all over again!

I want to build on that thread. Because in the last few weeks, the TCO math has shifted again, and this time, the shift came from the frontier labs.

## Price per token is not the cost of a task

Before getting to the data, it is worth clarifying what "cost" really means.

Most comparisons look at the price per million tokens. That is the number on the pricing page and it is easy to compare. But it is not what you actually pay to get a job done. What you pay is roughly:

* **Token price** - input, output, cache hits and cache writes, each priced differently.
* **Tokens used** - how many tokens the model burns to complete the task, _including_ the reasoning tokens you never see.
* **Caching behavior** - in agentic workflows, the same system prompt, tools and transcript are resent on every turn. Cache pricing matters a lot.
* **Hosting and operations** - if you self-host an Open Model, you pay for GPUs, scaling, patching, monitoring and the people who keep it running.

A model with a cheap token price that "thinks" for 3x longer is not a cheap model. This is where the Artificial Analysis reports become very useful.

## What the data says

[Artificial Analysis](https://artificialanalysis.ai/models?cost=intelligence-vs-cost-per-task&capability-index=engineering#intelligence-comparisons) independently benchmarks hundreds of models. Two of their reports are particularly relevant for this discussion: **Intelligence Index Comparisons** and **Token Use**.

The first one plots their Intelligence Index against the cost to run each task. Here is how they define that cost:

> "Weighted average cost per Intelligence Index task. Each evaluation's cost is calculated from input, cache hit, cache write, reasoning, and answer token prices, divided by task count, and weighted by its Intelligence Index weight."
> -- [Artificial Analysis](https://artificialanalysis.ai/models?cost=intelligence-vs-cost-per-task&capability-index=engineering#intelligence-comparisons)

In other words, it is much closer to TCO than a price sheet.

![Image: Artificial Analysis Intelligence Index vs Cost per Task](/images/blog/aa-intelligence-vs-cost-per-task.png)

*Intelligence Index vs. Cost per Intelligence Index Task. The top-left is the most attractive quadrant: high intelligence, low cost. Source: [Artificial Analysis](https://artificialanalysis.ai/models?cost=intelligence-vs-cost-per-task&capability-index=engineering#intelligence-comparisons).*

The second report shows how many output tokens each model consumes per task, split between reasoning and answer tokens.

![Image: Artificial Analysis Output Tokens per Task](/images/blog/aa-output-tokens-per-task.png)

*Output Tokens per Intelligence Index Task, split into reasoning and answer tokens. Source: [Artificial Analysis](https://artificialanalysis.ai/models?cost=intelligence-vs-cost-per-task&capability-index=engineering#intelligence-comparisons).*

When you put the two together, the picture gets interesting. Here is a small slice of the data:

| Model | Type | Intelligence Index | Input / Output price (per 1M tokens) | Output tokens per task | Cost per task |
| --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 (max) | Frontier | 58 | $4.00 / $20.00 | 119k | $5.98 |
| GPT-6 Sol (max) | Frontier | 48 | $2.00 / $10.00 | 31k | $1.06 |
| MiMo-V2.6-Pro | Open Model | 46 | $0.435 / $0.87 | 64k | $0.13 |
| GLM-5.3 (max) | Open Model | 45 | $1.40 / $4.40 | 71k | $2.01 |
| Kimi K3 (max) | Open Model | 44 | $3.00 / $15.00 | 48k | $2.00 |

_Data from Artificial Analysis model comparison pages, Intelligence Index v4.3.2._

Look at GPT-6 Sol vs GLM-5.3. On a price-per-token basis, GLM-5.3's output tokens are less than half the price of Sol's. Yet Sol finishes a task for **about half the cost** and scores **higher** on the Intelligence Index. Why? Because Sol uses 31k output tokens per task while GLM-5.3 uses 71k.

It gets even more striking when you look at the lower reasoning settings. According to Artificial Analysis, GPT-6 Sol at _xhigh_ effort scores 44 (the same as Kimi K3 max) at $0.53 per task. That is roughly a 1/4th of Kimi's cost per task.

That said, Open Models are far from out of the game. MiMo-V2.6-Pro is the top Open Model on the index and it costs just $0.13 per task. At the low end of the cost curve, Open Models are still hard to beat.

And at the very top? Claude Opus 5.5 is the most intelligent model on the index, but it also uses the most tokens and costs nearly 6x what GPT-6 Sol does per task. Intelligence at the frontier still commands a premium.

## The price cuts

Part of the reason for this shift is a fresh round of price cuts. On September 22, 2026, Anthropic and OpenAI cut prices within hours of each other.

| Model | New price (input / output per 1M tokens) | Previous | Change |
| --- | --- | --- | --- |
| GPT-6 Sol (OpenAI) | $2 / $10 | $4 / $20 (GPT-5.6 Sol) | 50% lower |
| GPT-6 Luna (OpenAI) | $0.10 / $0.50 | $0.20 / $1.20 (GPT-5.6 Luna) | 50-58% lower |
| Claude Opus 5.5 (Anthropic) | $4 / $20 | $5 / $25 (Claude Opus 5) | 20% lower |
| GPT-6 Astra (OpenAI flagship) | $10 / $50 | Unchanged | No cut |

_Source: [readus247](https://readus247.com/ai-api-price-cuts/), [TechWire Asia](https://techwireasia.com/2026/09/openai-gpt-6-sol-luna-prices/)._

A few details matter here:

* OpenAI says these are not promotional.([readus247](https://readus247.com/ai-api-price-cuts/))
* Anthropic cut cache reads for Opus 5.5 by 60%, from $0.50 to $0.20 per million tokens, and says the model costs about 40% less to run than Opus 5 on typical workloads because it is cheaper _and_ uses fewer tokens. OpenAI raised its cache-read discount to 90%.
* The flagships were not cut. Claude Fable 5.1 and GPT-6 Astra still list at $10 / $50. As [Era Haus](https://era.haus/lab/analysis/2026-W39) put it, it is a price war, _"just below each lab's flagship."_

The cache detail is the one I'd pay the most attention to if you are building agents. As [Marc Pope](https://www.marcpope.com/blog/openai-and-anthropic-cut-api-prices-on-the-same-morning-and-cache-reads-fell-the-most) explains:

> "A coding agent that makes 40 tool calls in a session sends the system prompt, the tool definitions, the transcript so far, and the newest tool result on every call. Nearly all of that is cached input."

Why does this matter? Anthropic's headline cut on input and output tokens is 20%, but cache reads dropped 60%. In an agentic session, most of what you pay for is cache reads. For example, take a session with 3 million cached tokens, 50k new input tokens and 10k output tokens. On Opus 5 it costs about $2.00. On Opus 5.5, it costs about $1.00. A 20% headline cut ends up as a 50% saving, simply because of where agents spend their tokens.

## So, what changed?

Let me spell out the takeaways.

1. **The early expectation:** Frontier models would be very expensive and Open Models would be the cheap alternative. For a while, that was largely true.
2. **The reality after the price cuts:** TCO has altered the game. Once you factor in token efficiency, caching and hosting, a frontier model can sometimes be _cheaper_ to use than an Open Model. GPT-6 Sol vs GLM-5.3 and Kimi K3 is a perfect example.
3. **One model for everything is a trap.** If you pick a cheap model for everything, you get poor results on the tasks it is not capable of handling. If you pick the most capable model for everything, you pay frontier prices for mundane tasks like classification, extraction and summarization. Either way, you lose.

I think the third point is the one that matters most. The question is no longer _"which model should we standardize on?"_ It is _"which model should handle this particular request?"_

## Enter intelligence routing

That question has a name: **intelligence routing** (or model routing). Instead of sending every request to one model, a router looks at the request and decides which model should handle it.

![Image: Intelligence routing flow](/images/blog/intelligence-routing.svg)

*A router sits in front of a pool of models. Simple requests go to a small, cheap model; moderately complex ones go to a mid-tier model; only the hard ones reach the frontier.*

In practice, routing decisions consider things like:

* How complex is the request? Does it need deep reasoning or is it a simple lookup?
* What type of task is it? Coding, classification, summarization, creative writing?
* What is the cost and latency budget?
* Is there already a warm prompt cache on a particular model?

Done well, routing gives you frontier quality where it matters and cheap-model economics everywhere else.

## Routers on the market

There is no shortage of options. A few popular ones are [OpenRouter's Auto Router](https://openrouter.ai/), [Not Diamond](https://www.notdiamond.ai/), [Microsoft Foundry Model Router](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router), Amazon Bedrock Intelligent Prompt Routing and the open-source [RouteLLM](https://github.com/lm-sys/RouteLLM).

For enterprises, [Glean AI Gateway](https://www.glean.com/platform/ai-gateway) gives one control plane across AI front doors, with access to 40+ frontier and Open Models. On top of it, [Glean's auto routing](https://www.glean.com/platform/auto-routing) picks the right model for each request based on the task and its complexity, using evaluations on enterprise work like writing and analysis. Admins can choose to optimize for cost efficiency or a balance of price and performance, with a frontier mode coming soon. Glean reports _81% lower token costs_ compared to Claude Cowork. Both features are currently in beta.

Whichever router you pick, evaluate it on your own workload. [RouterArena](https://github.com/RouteWorks/RouterArena) is a good independent starting point.

## The exciting part: System 1 models

Here is where things get really interesting for me.

Most routers today are either rules or a classifier bolted on top of an LLM. But what if the router itself was a fundamentally different kind of model? One that doesn't _generate_ anything, but simply _decides_?

That is the idea behind TypeSafe's [System One models](https://typesafe.ai/blog/introducing-system-one-models-and-jev), and their first model, **Jev**. The name "System One" is borrowed from Daniel Kahneman's _Thinking, Fast and Slow_: fast, intuitive System 1 thinking vs slow, deliberate System 2 reasoning. Jev is not the only option either. There are open source alternatives like [Laya](https://huggingface.co/convaiinnovations/laya), an Apache 2.0 model that even exposes a Jev-compatible API.

> "Jev achieves similar levels of intelligence on System One tasks compared to existing LLMs, while being two orders of magnitude faster and more efficient. While Jev gives up string generation, it's optimized for structured outputs and can't hallucinate."
> -- [TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

Instead of prose, Jev returns a typed decision - a choice, a score or a yes/no - along with a probability for each option. That is exactly what a router needs. A router does not need to write a sonnet. It needs to say _"send this to the small model, and I'm 97% confident."_

![Image: System 1 vs System 2 routing](/images/blog/system1-vs-system2-routing.svg)

*A fast System 1 model makes the routing decision. Slow, expensive System 2 models only get called when they are actually needed.*

Why does this make me excited?

* **Predictability.** Because the output is a typed decision with a confidence score, your code can apply a simple threshold. High confidence? Proceed. Low confidence? Escalate to a bigger model or a human. No more parsing free text and hoping the model followed the instructions.
* **Cost.** On a ticket triage benchmark, [OpenRouter measured](https://openrouter.ai/blog/tutorials/jev-vs-llm-when-to-use-each/) Jev at $0.0248 per 1,000 tickets, compared with $2.88 for Claude Opus. Median latency was 194 ms vs nearly 2 seconds.

### Keeping it balanced

I don't want to oversell this. An [independent benchmark from ayautomate](https://www.ayautomate.com/blog/jev-vs-llm-benchmark) compared Jev with GPT-5.4 nano, Gemini 3.5 Flash-Lite, Claude Haiku 4.5 and GPT-5.6 Terra. Their conclusion was blunt: _"In plain terms, Jev behaved like a good small model, not like a frontier model."_ OpenRouter also notes that Jev is text-only, reads criteria literally and is unreliable at arithmetic, counting and date comparison.

But I think that misses the point a little. A System 1 model isn't supposed to be the smartest model in the room. It is supposed to be the fastest, cheapest and most _predictable_ decision maker in the room - and then hand off to the smart model when it is unsure. That is exactly the job of a router.

>Note: Both Jev and Laya are bleeding edge. They need some more time to stabilize before I'd put them on a critical path. Watch this space - every lab will want to get here soon e.g. [Perplexity announced their offering](https://docs.perplexity.ai/docs/decisions/quickstart) while I was drafting this post!

## Final thoughts

When Open Models first arrived on the scene, the story was simple: frontier is expensive, open is cheap. The price cuts of September 2026 and the token-efficiency data from Artificial Analysis show that the story is no longer that simple. Sometimes the frontier model is cheaper. Sometimes the Open Model is. And the answer changes every few weeks.

So I think _"Open Models vs frontier models"_ is the wrong question.

The right question is: _what is the right model for this task, at this moment, at this cost?_ Answering that at scale requires intelligence routing. And with System 1 models like Jev and Laya, routing is starting to look less like a guess and more like an engineering decision you can measure, tune and trust.

My advice: stop comparing price sheets. Measure cost per task on your own workload, and let a router do the rest.

---

## Sources

* [Artificial Analysis - Comparison of Models: Intelligence, Performance & Price](https://artificialanalysis.ai/models?cost=intelligence-vs-cost-per-task&capability-index=engineering#intelligence-comparisons)
* [Artificial Analysis - GPT-6 Sol (max) vs Claude Opus 5.5](https://artificialanalysis.ai/models/comparisons/gpt-6-sol-vs-claude-opus-5-5)
* [Artificial Analysis - GPT-6 Sol Models](https://artificialanalysis.ai/models/releases/gpt-6-sol)
* [Artificial Analysis - GLM-5.3 (max) vs Kimi K3 (max)](https://artificialanalysis.ai/models/comparisons/glm-5-3-vs-kimi-k3)
* [Artificial Analysis - MiMo-V2.6-Pro vs GLM-5.3 (max)](https://artificialanalysis.ai/models/comparisons/mimo-v2-6-pro-vs-glm-5-3)
* [AI API Price Cuts: 50% at OpenAI, 20% at Anthropic - readus247](https://readus247.com/ai-api-price-cuts/)
* [OpenAI and Anthropic cut API prices on the same morning, and cache reads fell the most - Marc Pope](https://www.marcpope.com/blog/openai-and-anthropic-cut-api-prices-on-the-same-morning-and-cache-reads-fell-the-most)
* [OpenAI cuts GPT-6 Sol, Luna prices as Anthropic lowers Opus 5.5 costs - TechWire Asia](https://techwireasia.com/2026/09/openai-gpt-6-sol-luna-prices/)
* [OpenAI and Anthropic Cut Prices Below Their $10 Flagships - Era Haus](https://era.haus/lab/analysis/2026-W39)
* [Glean AI Gateway](https://www.glean.com/platform/ai-gateway)
* [Glean Auto Routing](https://www.glean.com/platform/auto-routing)
* [RouterArena - RouteWorks](https://github.com/RouteWorks/RouterArena)
* [Introducing System One Models and Jev - TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
* [Jev vs LLM: What Jev Is and When to Use It - OpenRouter Blog](https://openrouter.ai/blog/tutorials/jev-vs-llm-when-to-use-each/)
* [Is Jev as Accurate as Frontier Models at Classification? - OpenRouter Blog](https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/)
* [TypeSafe Jev Router - AI on Mac](https://ai-on-mac.com/articles/jev-router-typesafe-openrouter-en/)
* [Jev vs GPT and Claude: Independent Benchmark (2026) - ayautomate](https://www.ayautomate.com/blog/jev-vs-llm-benchmark)
* [Laya - Convai Innovations on Hugging Face](https://huggingface.co/convaiinnovations/laya)
* [Decisions API Quickstart - Perplexity Docs](https://docs.perplexity.ai/docs/decisions/quickstart)
