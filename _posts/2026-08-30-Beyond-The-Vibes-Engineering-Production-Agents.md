---
layout: post
title: Beyond the FUD -  A More Balanced View of Chinese AI Models
comment: true
description: A balanced look at the leading Chinese open-weight AI models, why they generate so much fear and hype, and how they compare with Western open-weight alternatives on capability, cost, and trust.
image: /images/blog/chinese-ai-mode-hero-image.png
tags: ai-ml, llm, gen-ai, open-weight, china
---

![Image: Hero image for project management](/images/blog/project-manage-agent.jpg)

I was Glean GO, Glean's customer conference that was held in San Francinso over Wednesday and Thursday. During the conference, I met and spoke with a lot of our customers. During these discussions and based my interactions with a lot of friends, I have come to realize a few interesting ideas on Agentic AI and the software engineering practices associated with developing agents. I want to put this out and see if it resonates with a larger audience.

Dr Jekyll & Mr Hyde

Depending on who you ask, agentic development evokes 2 radically different answers:

* Camp 1: Agent development is just vibe coding. Maybe there is some low-code aspects to it but, this is minimal. OR
* Camp 2: Agent development is about LLM, agent harness, loop engineering, skill development, token optimization - the whole software engineering lifecycle.

Which camp is true? Both camps are true, _from their perspective_! Let us explore this in a bit and peel off the layers of agent development.

## Weather Agent

If you look for tutorials on agentic development, the most common "hello world" like app is the development of an agent for accessing the latest weather. As a first agent, this covers the basics and provides a good foundation to get an idea about agentic workflow.

The challenge lies in the belief that every agent development is equally simple. The expectation from _Camp 1_ team is that any agent can be vibe coded. The underlying platform will magically "just get it!" and somehow produce a flawless production grade agent that can be used for business critical applications. Let's look at the other extreme end.

## Only Mehchanics can own a car

Diametrically opposite to "pure vibes", we have "Camp 2" where the belief is that you are allowed to build agents only if you understand the entire LLM infrastructure. Although this is not stated, the documentation and tutorials will throw jargon after jargon with the expecation that the developer gets it and can tweak and build the perfect agent that can solve world hunger. This is akin to belief long time ago that only a mechanic could own a car since it kept breaking down so often!

Where does the truth lie? As always, somewhere in the middle.

## Agentic Lifecycle == Software Development Lifecycle (SDLC)

In my opinion, agentic development for business critical applications will need to follow a process that is very similar to software development lifecycle. Of course, if you are building personal productivity agents, they can still be built with vibes. However, if you have an agents that are supposed to do tasks like production triaging, overage warning or revenue target alerts, we will require a much more robust, explainable, repeatable, predictable and observable agent. Such a system is no different than any business critical application.

Let's break this down.

### Requirements

As with software, we need well-designed requirements. If you can't articulate what your agent is expected to do, it is doomed to fail. You will need to have clear guidlines on:

* Why is the agent required and for whom?
* How will the agent get data? How will it process and how will it display?
* What are the steps the agent will take to produce the final output?

Essentially, if nobody can even articulate the need, processing and output for an agent, we have no requirements. It is possible to still develop something but, it will take a long time to arrive at a useful outcome.

### Design

The next step involves creating a high level design. This step will explain the different systems that the agent is supposed to access, a high level flow of the kind of information the agent may access, the tools required by the agent.

In a more mature organization, this step may include further analysis where the team would do the following:

* Design the set of skills that should be made available to agent.
* Identify possibility for sub-agents and whether tasks can be parallelized.
* Incorporate observability hooks so that the system can be monitored.

In the same phase, teams will need to create test data, scenario for testing and criteria to mark the tests as a pass or fail. In other words, build evals!


#### Don't forget Non-Functional Requirements!

In the world of software, we have "non-functional requirements" - things like reliability, scalability, security, observability and so on. Based on the criticality of the agent, teams need to clearly define the "working condition" for the agent. This will include dependencies like the LLM models, the token budgets, latency budgets, tech stack constraints, devsecops dependencies and so on. 

### Development

This is phase where the agents are actually built. Unlike personal productivity agents, a production grade agent should be built by a specialized team. This is akin to developers. Such a team will have access to underlying logs, metrics and LLM performance information like token costs and latency. This is the team that will implement the agent spec based on the design and non-functional requirements.

### Verification & Validation

Once the agent is ready, it will need to be tested. Teams will need to have datasets ready to ensure the agent execution can actually be tested. Running evals and validating against the NFRs will be executed at this step.

Bugs may be found and the phases of development and verification will keep looping until no critical defects remain.

Security teams will need to certify that the agentic execution is safe for deployment

### Release

This is last phase where agents are final deployed and rolled out. For production grade agents, this will include ensuring the data residency requirements are met, the agent can scale and the agent is secure.

## Parallels

As I stated earlier, agentic development mirros SDLC. AI tools are definitely accelerators in this process. However, the process requires a very systemic thinking. It is not based on "vibes". Relying purely on the agentic platform to surface, solve and handle all the unstated requirements is both wrong and wishful thinking.

# Bottom Line

I'd like to conclude by saying that creating and using agents for personal productivity is definitely a wonderful achievement. Building agents that may not be critical can and should be done by anyone who wishes to do so. However, if you are trying to create an agent that has a direct line impact on revenue, security or core business, then such an agent should be designed, developed and maintained using a more systematic approach.