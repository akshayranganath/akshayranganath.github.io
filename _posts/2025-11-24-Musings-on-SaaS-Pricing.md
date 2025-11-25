---
layout: post
title: The Dichotomy of Cost -  Balancing Fixed SaaS Revenue with Unpredictable AI Expense
comment: true
description: As AI agents make costs unpredictable, SaaS companies must evolve from simple subscriptions to intelligent model routing.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_350/blog/blog-llm-arbitrage.png
tags: ai-ml, gen-ai
---

I wanted to write a follow-up to my article about LLMs and how they would soon be commoditized. That article was written in June 2024. Now, in November 2025, we are seeing many analysts agreeing with this position.

![llm arbitrage](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650/blog/blog-llm-arbitrage.png)

In his highly referenced [presentation](https://www.ben-evans.com/presentations), Benedict Evans mentioned that Foundation Model companies are chasing AGI. However, the products they are currently offering generally have no moat. From my experience in my organization and anecdotal conversations with friends, I've heard that there is no loyalty to specific models. The moat is based on the cloud provider. If you are an Amazon AWS shop, it is simpler to work with Bedrock and the models supplied by that service.

![lack of moats](https://akshayranganath-res.cloudinary.com/image/upload/v1764049976/blog/blog-lack-of-moats.png)

The purpose of this post is to look at another aspect: pricing. Specifically, how will the use of LLMs and agents impact SaaS pricing?

When SaaS companies build applications, they need a pricing model that is simple and easy to break down by monthly units. Perhaps it is the total number of users (seats), total number of videos generated, number of impressions, and so on. However, the world of LLMs is disrupting this clean pricing model. Here are some challenges:

  * **LLMs are priced based on tokens.**
      * Input and output tokens have different prices.
      * Maximum supported tokens vary by model, though limits have increased significantly.
      * "Thinking" models require more tokens for the reasoning process.
  * **Tool calling makes token calculation more complex.**
      * A model may or may not invoke a tool depending on the prompt.
      * Token usage changes based on tool use and caching mechanisms.
  * **Agents add an additional level of unpredictability.**
      * The probabilistic nature of agentic flows means they consume an unpredictable number of tokens.
      * Moreover, the final token count often cannot be computed until after the flow has executed.

**Bottom line:** We won't know how many tokens are required until a task or workflow has been executed. This makes pricing extremely difficult. So, how do we solve it? Let's look at how some other existing technologies have handled this problem.

## Database Queries & Query Execution Plans

When you need to execute a query, it is hard to predict how much data needs to be scanned. For example, let's say I want to search an employee table by the person's first name, last name, and city. In the worst case, we will need to scan the entire table. In the best case, the result could be in the first row. We won't know this until we've actually executed the query.

However, that doesn't prevent databases from estimating execution costs. To do this, the query is broken down into components; the database identifies the indices to use and the table scan mechanism to come up with an execution plan. By combining the plan with other statistics tables, databases can estimate the cost of executing a query.

![database execution plan](https://vinish.dev/wp-content/uploads/2025/06/sql-explain-plan.png.webp)
Source: [Oracle SQL Query to Use EXPLAIN PLAN for Join Analysis](https://vinish.dev/oracle-sql-explain-plan)


## Bandwidth Calculations in CDNs

When CDNs need to price their offerings, bandwidth is one of the core usage metrics. Bandwidth varies by customer type, day, month, campaigns, promotions, virality, and so on. Despite this, CDNs are able to offer enterprise packages where they factor in peak traffic and lulls in usage, while also absorbing occasional spikes. All of this requires deep analysis of traffic patterns and usage data.

## The Challenge with Token-Based Pricing

The primary challenge of LLM usage in SaaS is the dichotomy in cost structure:

  * SaaS companies charge customers based on a usage metric that is decoupled from tokens.
  * LLMs charge SaaS companies for tokens.

To make this concrete, let's look at a SaaS provider offering software for creative users. Let's assume two use cases that require LLMs:

1.  Editing copy and tweaking it for final review.
2.  Generating hero/banner images associated with the copy.

To support such an offering, the SaaS provider may be doing the following:

  * Charging per user/seat for their product.
  * Paying per million tokens to the LLM provider.

Here is where the pricing dilemma arises:
The copy editor could upload a simple Word document and ask the LLM to review it. This may consume a few hundred tokens. In another case, the editor may upload a large PDF, ask the LLM to identify the core message, and then generate an image. This could consume a few thousand tokens. When this occurs, the SaaS company can't go back and ask the user for more money. They need to either:

  * Eat the additional cost.
  * Charge a premium to cover such usage spikes.

They may also consider a third option:

  * Downgrade the user to a lower-performing model (i.e., **model arbitrage**).
  * Use an open-source model to reduce tokens by summarizing or rephrasing before passing the request to the foundational LLM (i.e., **token arbitrage**).

When this happens, the billing model starts to look like an ISP. You get a quota per month; if you exceed it, your speed is throttled, but the service continues. The alternative option is to continue with the same service level but pay an overage fee.

## My Prediction

My take is that SaaS companies, and even enterprises that internally use such GenAI features, will start to leverage tools like [OpenRouter](https://openrouter.ai/). These companies will act like an Application Load Balancer (ALB) for GenAI workloads. Such a system can:

  * Provide pre-processing so that LLM token use is minimized.
  * Offer solutions like LLM input (and potentially output) caching to reduce calls to the LLM.
  * Manage routing tables for LLMs so that the specific LLM agent is selected based on the customer tier (free, paid, enterprise) and the kind of query sent by the user.
  * Track usage and provide statistics to help with cost optimization. This will be akin to the `Explain plan` workflow in databases.

The elephant in the room is the **Inference Arbitrage**! Should a company use NVIDIA GPUs or some other alternative like Google TPUs will start to boil over. I've not looked into this much. Perhaps that will be in another post in a few months.