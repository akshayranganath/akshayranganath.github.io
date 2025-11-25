---
layout: post
title: How will work change with LLMs?
comment: true
description: LLMs have been around for over a year now. Media is frothy about the latest and most performant model. However, that is just half the story. My take on how they will LLMs actually used.
image: https://akshayranganath-res.cloudinary.com/image/upload/w_1080,h_480,f_auto,q_auto,dpr_1.5,c_pad,b_auto/blog/llm-use-cases.png
tags: ai-ml, gen-ai
---

I wanted to write a follow up to my article about LLMs and how they would soon be commoditized. This article was written on June, 2024. In Nov, 2025, we are seeing a lot of analysts agreeing with this position. In his highly referenced [presentation](https://www.ben-evans.com/presentations), Benedict Evans mentioned that Foundation Model companies are chasing AGI. However, the product that they are currently offering mostly has no moat. From my experience in my organization and anectodatal conversation with friends, I've heard that there is no loyalty to models. The moat is based on the cloud provider. If you are an Amazon AWS shop, it is simpler to work with Bedrock and models supplied by this service and so on.

<< insert image>>


The purpose of this blog was to look another aspect - pricing. Specifically, how will the use of LLMs and agents impact SaaS pricing.

When SaaS companies build applications, they need to have a pricing model that is simple and easier to break down by monthly units. Perhaps it is total number of users (or seats), total number of videos generated, number of impressions and so on. However, the world of LLMs are disrupting this clean pricing model. Here some challenges.

* LLMs are priced based on the tokens. 
    * Input & output tokens have a different price.
    * Maximum tokens supported varies by model but, it has been increasing significantly.
    * Thinking models will require more tokens for the "thinking" process.
* When tool calling was introduced, it made the token calculation a bit more complex. 
    * A model may or may not invoke the tool.
    * Based on the tool use and caching, the token use changes.
* Agents add an additional level of unpredictability. 
    * Due to probabilistic nature of the agentic flow will consume unpredictable number of tokens.
    * Moreover, the token use can't be computed until after the execution of the flow

Bottom line: We won't know how many tokens are required until a task or workflow has been executed. This makes pricing extremely difficult. So how do we solve it? Let's look at how some of the other existing technologies have solved this problem.

## Database Queries & Query Execution Plan

When you need to execute a query, it is hard to predict how much data needs to be scanned. For example, let's say I want to search an employee table by the person's first name, last name and their city. At the worse case, we will need to scan the entire table. In the best case, it could be the first row. We won't know this until we've actually executed the query. However, that doesn't prevent databases from estimating execution costs. For this, the query is broken down into components, it identifies the indices to use and the table scan mechanism and comes up with an execution plan. Based on the plan and combining it with other stats table, databases can estimate the cost to execution a query. 

![database execution plan](https://vinish.dev/wp-content/uploads/2025/06/sql-explain-plan.png.webp)
Source: [Oracle SQL Query to Use EXPLAIN PLAN for Join Analysis](https://vinish.dev/oracle-sql-explain-plan)

## Bandwidth Calculations in CDN

When CDNs need to price their offering, bandwidth is one of the core usage metric. Bandwidth varies by customer type, day, month, campaigns, promotions, virality and so on. Despite this, CDNs are able to offer enterprise packages where they factor in the peak traffic, the lulls in usage and also absorb the occasional spikes. All this requires deep analysis of the traffic patterns and usage data. 

## Challenge with token based pricing

The primary challenge of LLM use by SaaS is the dichotomy in cost structure.

* SaaS companies charge customers based on a usage metric that is de-coupled from tokens.
* LLMs charge SaaS companies for tokens.

To make this concrete, let's take the example of a SaaS provider that is providing software for creative users. Let's assume 2 use-cases that require LLMs:
* Edit a copy and tweak it for final review. 
* Generate hero / banner images associated with the copy.

To support such an offering the SaaS provider may be doing the following:
* Charge per user / seat for their product.
* Pay per million tokens to the LLM provider.

Here is where the pricing dilemma arises:
The copy editor could upload a simple word doc and ask the LLM to review. This may consume a few hundred tokens. In another case, the editor may upload a large PDF, ask the LLM to identify the core message and then generate an image. This could consume a few thousand tokens. When this occurs, the SaaS company can't go back and ask for more money. They need to either:

* eat the additional cost
* charge a premium so that it can cover such usage spikes

They may also use a 3rd option - 

* downgrade the user to a lower performing model (i.e. **model arbitrage**)
* use an open-source model to reduce tokens by summarizing, re-phrasing, etc. and then passing the request to the foundational LLM (i.e. **token arbitrage**)

When this happens, the billing model starts to look like an ISP. You get a quota per month. If you exceed, your speed is throttled but, service continues. The alternate option is to continue with same service level and pay an overage.

## My prediction

![crystal ball](https://i2.pickpik.com/photos/83/975/667/glass-ball-winter-snow-mirroring-preview.jpg)

My take is that the SaaS companies and even Enterprises that internally use such Gen AI featurs will start to leverage tools like [OpenRouter](https://openrouter.ai/). These companies will act like an Application Load Balancer (ALB) for Gen AI workloads. Such a system can:

* provide pre-processing so that LLM token use is minimized.
* offer solutions like LLM input (and potentially output) caching to reduce calls to LLM.
* routing table for LLMs so that the LLM agent is decided based on customer tier (free, paid, enterprise) and the kind of query sent by user.
* LLMs will start to track usage and provide the stats to help in cost optimization. This will be akin to the `Explain plan` workflow in databases.