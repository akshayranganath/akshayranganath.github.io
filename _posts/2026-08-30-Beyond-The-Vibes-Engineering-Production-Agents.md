---
layout: post
title: Beyond the Vibes - A More Disciplined Approach to Building AI Agents
comment: true
description: Building an AI agent is easy. Building one you can trust with revenue, security, or production operations requires a very different approach.
image: /images/blog/chinese-ai-mode-hero-image.png
tags: ai-ml, llm, gen-ai, open-weight, china
---

![Image: Hero image for project management](/images/blog/project-manage-agent.jpg)

I see the world split into two camps - _agents are just vibe coding_ vs _agents require deep systems expertise_. This is my journey through the argument and why I think both perspectives have a place of their own.


>Disclaimer: I work for Glean as a Solution Architect. Opinions here are mine.

## Background

I was at [Glean Go](https://www.glean.com/events/glean-go-2026), Glean's customer conference that was held in San Francisco in August, 2026. During the conference, I spoke with a lot of our customers. During these discussions and based my interactions with a lot of friends, I have come to realize a few interesting ideas on Agentic AI and the software engineering practices associated with developing agents. I want to put this out and see if it resonates with a larger audience.

## Two Camps - One Choice

Depending on who you ask, agentic development evokes 2 radically different answers:

* Camp 1: Agent development is just vibe coding. Maybe there is some low-code aspects to it but, this is minimal. OR
* Camp 2: Agent development is about LLM, agent harness, loop engineering, skill development, token optimization - the whole software engineering lifecycle.

Which camp is true? Both camps are true, _from their perspective_! Let us explore this in a bit and peel off the layers of agent development. _Camp 1_ approach is suitable for personal productivity and for experimentation / feasibility analysis. _Camp 2_ approach is needed for business-critical systems.

![humans and agent wrestling](/images/blog/human_vs_robot_armwrestling.png)

## Weather Agent

If you look for tutorials on agentic development, the most common "hello world" like app is the development of an agent for accessing the latest weather. As a first agent, this covers the basics and provides a good foundation to get an idea about agentic workflow.

The challenge lies in the belief that every agent development is equally simple. The expectation from _Camp 1_ team is that any agent can be vibe coded. There is a belief that the underlying platform will magically "just get it!" and somehow produce a flawless production grade agent that can be used for business critical applications. 

Let's look at the other extreme end of the argument.

## Boil the ocean

Diametrically opposite to "pure vibes", we have _Camp 2_ where the belief is that you are allowed to build agents only if you understand the entire LLM infrastructure. Although this is not stated, the documentation and tutorials will throw jargon after jargon with the expectation that the developer gets it! To really write an agent, the developer should understand the LLM infrastructure, the agentic loops, the frameworks, the caching mechanism and so on. 

![boiling the ocean](/images/blog/boiling-the-ocean.png)
Where does the truth lie? As always, somewhere in the middle.

## Agentic Lifecycle == Software Development Lifecycle (SDLC)

In my opinion, agentic development for business critical applications will need to follow a process that is very similar to software development lifecycle. Of course, if you are building personal productivity agents, they can still be built with vibes. Initial analysis, feasibility checks and quick use and throw prototypes can also be vibe-coded. However, if you have agents that are supposed to do tasks like production triaging, overage warning or revenue target alerts, we will require much more robust, secure, scalable, explainable, repeatable, predictable and observable agents. Such systems are no different than any business critical application. And any business critical system follows a well-defined development process.

Let's break this down.

### Requirements

As with software, we need well-designed requirements. If you can't articulate what your agent is expected to do, it is doomed to fail. You will need to have clear guidelines on:

* Why is the agent required and for whom?
* How will the agent get data? How will it process and how will it display?
* What are the steps the agent will take to produce the final output?

Essentially, if nobody can even articulate the need, processing and output for an agent, we have no requirements. It is possible to still develop something but, it will take a long time to arrive at a useful outcome.

### Design

The next step involves creating a high level design. This step will explain the different systems that the agent is supposed to access, a high level data flow the agent may access, the tools required by the agent, the security guardrails, and constraints on output.

In a more mature organization, this step may include further analysis where the team would do the following:

* Design the set of skills that should be made available to agent.
* Identify possibility for sub-agents and whether tasks can be parallelized.
* Incorporate observability hooks so that the system can be monitored.
* Run security audit for data residency and other regulatory requirements.

In the same phase, teams will need to create test data, scenario for testing and criteria to mark the tests as a pass or fail. In other words, building evals!

#### Don't forget Non-Functional Requirements!

In the world of software, we have "non-functional requirements" - things like reliability, scalability, security, observability and so on. Based on the criticality of the agent, teams need to clearly define the "working condition" for the agent. This will include dependencies like the LLM models, the token budgets, latency budgets, tech stack constraints, devops and devsecops dependencies.

### Development

This is phase where the agents are actually built. Unlike personal productivity agents, a production grade agent should be built by a specialized team. This is akin to developers. Such a team will have access to underlying logs, metrics and LLM performance information like token costs and latency. This is the team that will implement the agent spec based on the design and non-functional requirements.

![blueprint](/images/blog/pexels-tima-miroshnichenko-6615086.jpg)

### Verification & Validation

Once the agent is ready, it will need to be tested. Teams will need to have datasets ready to ensure the agent execution can actually be tested. Running evals and validating against the NFRs will be executed at this step.

Bugs may be found and the phases of development and verification will keep looping until no critical defects remain.

Security teams will need to certify that the agentic execution is safe for deployment

### Release

This is last phase where agents are final deployed and rolled out. For production grade agents, this will include ensuring the data residency requirements are met, the agent can scale and the agent is secure.

### Monitoring

After the agent is deployed, we definitely need to monitor for performance, accuracy and drift. If the agents were built with certain assumptions and the underlying assumptions change, the model output could be less relevant. Having a mechanism to detect and alert on failures is critical to agent deployment.


## SDLC & Agentic Development - The Parallels

As I stated earlier, agentic development mirrors SDLC. AI tools are definitely accelerators in this process. However, the process requires a very systemic thinking. It is not based on "vibes". Relying purely on the agentic platform to surface, solve and handle all the unstated requirements is both wrong and wishful thinking.

# Bottom Line

I'd like to conclude by saying that creating and using agents for personal productivity is definitely a wonderful achievement. Prototyping and experimenting with prompts is natural mechanism to begin your analysis. However, if you are trying to create an agent that has a direct line impact on revenue, security or core business, then such an agent should be designed, developed and maintained using a more systematic approach. You need robust controls and well-focused engineering discipline for design, development, release and monitoring of the agents.

# Appendix

## From AI-Assisted to AI-Native: Building a Frontier Development Team

Just as I was about to publish the blog, I came across this excellent talk from an AWS Engineer. I'll highly recommend you to watch this video:

YouTube video: [From AI-Assisted to AI-Native: Building a Frontier Development Team — Clare Liguori, AWS](https://www.youtube.com/watch?v=pqlWNihgdjI)

_Pro Tip_: If you have a manager who makes the statement - "You have access to all the AI tools. Why are you taking so much time?": Have them watch the video starting at 17 mins!


## End of Software Engineering

I also came across this interesting paper [The End of Software Engineering: How AI Agents Are Fundamentally Restructuring the Software Paradigm](https://arxiv.org/html/2606.05608v1). They make a very interesting argument that in the agentic development, code is a throw-away artifact. Agents evolve the logic to achieve outcomes. The role of humans is to clearly articulate the intent and clarify outcomes. It is a different way of looking at the same issue. That said, they still argue for a structured approach to agentic development.