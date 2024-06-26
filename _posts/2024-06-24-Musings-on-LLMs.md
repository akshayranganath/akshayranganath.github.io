---
layout: post
title: How will work change with LLMs?
comment: true
description: LLMs have been around for over a year now. Media is frothy about the latest and most performant model. However, that is just half the story. My take on how they will LLMs actually used.
image: https://akshayranganath-res.cloudinary.com/image/upload/w_1080,h_480,f_auto,q_auto,dpr_1.5,c_pad,b_auto/blog/llm-use-cases.png
tags: ai-ml, gen-ai
---

## tl;dr

AI Foundational models are getting to be a commodity. More than the models, enterprises will adopt models supported by their Cloud Provider. When working in AWS ecosystem, it is easier to use models supported by Bedrock like LLama, Claude or Mistral. Changing models is switching a single configuration parameter. SaaS companies may switch models based on customer tier, model availability and costs rather than the best available foundational model.

## Background

I've been using LLMs for various use cases and noticed an evolution in the way the usage has changed ever since the magic of ChatGPT 3.5 started to wear off. I wanted to write about it as a recollection of this process for myself and perhaps show others on how this relatively new technology may be accepted and used in large organizations.

## Personal Use

Here are the ways I have started to use LLMs for my personal use.

### Novelty

The first use case of LLMs were the novelty of them all. They seemed so, magical! I could not get enough of chatting with ChatGPT, Mistral, Claude, Gemini, Llama and LLava. I had to try out Dall-E, Midjourney, Runway, StableDiffusion, Adobe Firefly and more.

### Productivity Hacks

The next step was targeted improvement in productivity. This included trying the following:

* Installing [Amazon Code Whisperer](https://aws.amazon.com/blogs/aws/amazon-codewhisperer-free-for-individual-use-is-now-generally-available/) as an alternative to GitHub Co-Pilot. The auto-generated code was quite nifty and helped improve some basic code generation.
* Seeking code help from ChatGPT: I used code whisperer as a very tactical tool to generate small chunks of code. When I had a use case that required coding solution, I almost always turned to ChatGPT. In here, I would describe the problem and then guide the system to generate a workable code for me. For example, I had a CDN data with traffic information across browsers. I needed to sum it by browser type for each day and then use Plot.ly to generate the charts. ChatGPT helped me in building this code.
* Proof-reading and grammar correction: When I had a high-stakes email or slack message to share, I turned to Claude. Claude would correct my grammatical errors and re-write my content in a way that I thought was most impactful. The original content was mine - the LLM simply polished the presentation. I used it to proof-read a few of my blog posts as well.
* Microsoft Co-Pilot for Image Generation: When I needed to create custom icons or abstract image for blog or presentation, I initially tried Adobe Firefly. The combination of Firefly and Adobe Express was quite powerful, despite Firefly generating very boring looking images.

Microsoft soon launched Designer. The combination of generating images on Co-Pilot and editing the result on Designer has been a fun experience. It anticipates the change, provides a ton of recommendation and sparks ideas on presenting an asset.

Bottom line, LLMs are now useful for me for:

* code generation / code design
* artwork creation and editing
* proof-reading and grammarian


## Professional Use/Research

Apart from my personal use, I have been using LLMs in my work. I have also been researching how LLMs are being adopted and used in enterprise settings. Here are 2 things that stood out for me.

## RAG, Embedding & Function Calling

LLMs are great at crunching and extracting meaning from text. When combined with tools like embedding and vector databases, the offering becomes way more powerful. The technique [Retrieval Augmented Generation (RAG)](https://github.blog/2024-04-04-what-is-retrieval-augmented-generation-and-what-does-it-do-for-generative-ai/) is the method to use [embedding and vector database](https://realpython.com/chromadb-vector-database/) for storing context. LLMs are then used to extract meaning or summarize the relevant text. More enhanced options like [function calling](https://www.promptingguide.ai/applications/function_calling) allow you to bring your own tools in the LLM pipeline to implement custom functions.

## Agentic Workflows

Agentic Workflows is the direction that the toolchain is evolving. Intuitively, when you are doing some work, you start the task, try something, check output and go back and try an alternative and then progress along the way. Agentic workflow is a similar approach. [This article](https://blog.openapihub.com/en-us/introduction-to-agentic-ai/) has a great explanation about Agentic AI.

Agentic AI includes the use of all the above methods and adds concepts like "reflection" to the LLM. [As Andrew Ng says](https://www.youtube.com/watch?v=sal78ACtGTc), asking an LLM to generate output is like telling a student to type a college essay without ever hitting the back button. When using an agentic workflow, you have a system that includes one or more LLMs that work in cooperation. A task is broken down into sub-tasks. Each sub-task is executed by an LLM or by leveraging an available function. The final output is an iteratively generated or processed data. This is much like how a human would work.

In this concept of workflow, the LLM model used in a specific sub-task could be specialized for the task. So there may be a coding LLM, an LLM for math, an LLM for grammar and so on.

### In Agentic flow, does the LLM matter?

In the narrative of the media, LLMs are in a cut-throat competition to get better. It feels like it is a zero-sum game and only one LLM will rule them all. Perhaps this may be true of AGI. However, when it comes to LLM, I feel that the **availability** and **use-case** matters more than the actual model. Let me elaborate.

### LLM Availability

Let's say you work at a company that uses AWS for all the enterprise infrastructure. Security team mandates the use of AWS identity and access rules. All resources must be locked down and should get a role0based permissions.

In this situation, getting the permission to use OpenAI could be a hard battle. Instead opting for a model available within AWS Bedrock would be an easier proposition. As an enterprise, this would obviate the need to sign new contracts and avoid a sales cycle. Using an LLM would add to Opex and it may be easier to get this budget than bringing in a brand new vendor.

This may sound like vendor lock-in. It probably may be true. However, if the workflow is agentic and the specialized LLMs are deployed, the large foundational models like ChatGPT or Claude will perform the role of an orchestrator. Any "good" model would satisfy the requirement.

### Use-Case

Not all tasks require the power of a large foundation LLM. For example, if the task requires summarizing emails to provide a quick overview of pending tasks, a simpler LLM may suit the job.

In the same ecosystem, if the requirement is for a model to perform simple [visual query answering (VQA)](https://huggingface.co/tasks/visual-question-answering), it may be cheaper to fire up an open source model.  Coupling the VQA with a foundational LLM, the output can be massaged for the final need - e.g. converting the text to a JSON. 

A single model may simply not be necessary for each and every task. Cloud providers will also start to offer more models within their infrastructure. In this situation, the need to always use a large (and potentially costly) LLM may no longer be necessary.

### Operational Costs

LLM access requires money. If a SaaS company were to use an LLM in the offering, this cost needs to be bundled and passed on. In a world of tiered access, there is a world where the SaaS products may choose an Open Source LLM instead of an expensive LLM based on the customer tier. So we may have something like this (I am assuming AWS offerings here):

* Free users: no LLM
* Entry-level users: Open Source LLMs like Llama/Mistral
* Mid-tier users: Claude Haiku / Sonnet
* Top-tier users: Claude Opus

Just like auto-scaling, SaaS companies may even switch providers based on budget. If a customer has signed up with a fixed commit and their use is hitting limits, the product may switch them to a lower tier model to keep costs in control.

## Conclusion

Based on the progress over the past few months, I feel that:

* LLM choice will be influenced more by the use-case and availability within a cloud provider's platform.
* Agentic workflow will become more relevant - especially in enterprise settings. Business rules are complex and embedding them into a single prompt would be extremely hard!
* Model selection will be based on a combination of use-case, availability within cloud provider, and cost consideration.

Are you seeing similar trends? As a developer, do you feel that you would be comfortable switching into the role of an architect who orchestrates various LLMs to perform a workflow instead of a developer who codes the entire system? Think about it!