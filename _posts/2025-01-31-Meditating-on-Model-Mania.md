---
layout: post
title: Meditating on Model Mania
comment: true
description: Notes from preparing for the AWS Certified Machine Learning Engineer Associate Exam
image: https://akshayranganath-res.cloudinary.com/image/upload/w_650,f_auto,q_auto/blog/meditating-on-model-mania_wmqj2t
tags: ai-ml, gen-ai
---

Over the past two weeks, the world has been set ablaze by two words - [DeepSeek](https://www.deepseek.com/) and R1. I won't go into the details and comparison of the models. You can find the details [here](https://www.techtarget.com/whatis/feature/DeepSeek-explained-Everything-you-need-to-know) and [here](https://www.geekwire.com/2025/deepseeks-new-model-shows-that-ai-expertise-might-matter-more-than-compute-in-2025/). Instead of rushing breathlessly into the geopolitics or dissecting the Nvidia stock price, I wanted to take a step back and analyze the impact as a user of LLMs. Specifically, I wanted to address the following:

![DeepSeek logo](https://akshayranganath-res.cloudinary.com/image/upload/w_650,f_auto,q_auto/blog/deepseek-logo.png)
Source: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/2560px-DeepSeek_logo.svg.png

* Why should organizations and teams pay attention to such developments?
* What factors will impact an organization selecting a model?
* How will this model and others to follow impact the planning of an LLM-based solution?
* How should organizations keep up with each new release of such models, and should they?

Take a deep breath, count from 10 to 1, and close your eyes. Meditate. Let the noise of models drop away and see yourself focusing on your task at hand. With this awareness, you can now start to think deeply about all the questions that matter to you - not to Nvidia, not to OpenAI or Microsoft.

![Person meditating](https://akshayranganath-res.cloudinary.com/image/upload/w_650,f_auto,q_auto/blog/meditating-on-model-mania_wmqj2t)

## Let's Start with Why

Simon Sinek famously said you should always [start with "Why"](https://www.youtube.com/watch?v=u4ZoJKF_VuA). 

![golden circle - start with why](https://akshayranganath-res.cloudinary.com/image/upload/e_trim/e_sharpen,w_650,f_auto,q_auto/blog/start-with-why.png)

So let's analyze the current landscape by answering this question.

* Why do we need an LLM? 
* Do we even _need_ an LLM?

Depending on your use case, you may not even require the help of an LLM. For example, I had to solve a classification problem for a customer. I needed to identify if an image was a studio shot or an image taken to represent the use of a product. In ecommerce, this is the "studio" or "lifestyle" image. I could have used a vision-based model ranging from ChatGPT to [Llava](https://github.com/haotian-liu/LLaVA). Instead, I used a much simpler ML-based solution called `shop-classifier` available as a [Cloudinary AI Analysis plugin](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon).

    Disclaimer: I work for Cloudinary.

Let us assume you have a valid use case for _why_ you want to use an LLM. Perhaps you need to summarize complex documents, understand a difficult conversation, or build an agentic workflow using LLM as the orchestrator. The important factor here is that you do your homework to decide that a solution can't be solved without the use of an LLM.

We then move to "how" - the process.

## How to Choose and Use an LLM?

In my previous post, [Musings on LLM](https://akshayranganath.github.io/Musings-on-LLMs/), I wrote about many factors that go into deciding the right LLM. To summarize, if you work in a large enterprise - the choice of LLM is based on the cloud provider you use, security approvals that you can obtain, and the deadlines that you must meet.

I have experience with AWS. So let me illustrate. Let's say your organization uses AWS. This constrains you to the LLM models offered within [AWS Bedrock](https://aws.amazon.com/bedrock/). Moreover, your code is developed against the _Bedrock API_ and not against the actual API of the LLM. This is the core point:

> If your cloud provider does not offer an LLM model, you can't use it. You can gush about the latest model and go wild for personal use. However, turning around your enterprise codebase is like turning a container ship. It is slow and risky. And if your cloud provider does not have it, it is a pain to self-host and manage. 

![container ship](https://akshayranganath-res.cloudinary.com/image/upload/w_650,f_auto,q_auto/blog/container-ship)

If you have decided to use one specific LLM, be sure to convince yourself and your organizational stakeholders of the following:

* Is it cost-effective? You are giving up a currently working solution with one LLM. Is the new LLM going to be cheaper?
* Have you factored in the redesign and refactoring cost? Let's assume your cloud provider has added support for your new and favorite LLM. You need to factor in the cost for making the code change, testing, and evaluating the results before rolling it out.
* Is your data secure and private? This applies to LLMs where you make API calls to hosted environments. For example, if you directly invoke OpenAI or DeepSeek's APIs against their hosted platform, they _may_ record your data, prompt, and response. Based on your contract, they _may not_. Do your due diligence. When in doubt, be safe. Stick to a solution that has proven to be secure.

I know that my suggestion here sounds a bit boring. But [boring technology](https://boringtechnology.club/) generally wins! Do you remember the breathless days when every moment a new JavaScript framework was born? Despite this, people still continued to use jQuery because it simply worked. In the same way, if your LLM deployment of Llama 3.1 on Bedrock is working fine, let it run and spend time on more interesting problems than introducing new models.

## What Did You Achieve?

If you do decide to take the plunge, then make sure you have a clear idea of the outcome. What exactly did you achieve by using _a specific LLM_ as compared to others? Personally, I am biased toward using the Bedrock API. In this case, switching to a model would mean I need to factor in the following:

* What is the timeline to make the LLM change? 
* What resources are required for implementing this change?
* What is the magnitude of the effort and the timeline for making the change?
* What business metrics should I track to measure success? Is it better conversion, improved productivity, or something else?
* What cost benefits do I gain by using the new LLM? Sure, open-source models like DeepSeek can be cheaper. However, when hosted on AWS, does it cost much less than Llama? Will the savings pay back the switching costs? 

As you can see, there is a lot more to consider when implementing an LLM switch within an organizational context. Testing and playing with a new LLM each day for personal use may be cool and invigorating. But switching LLMs based on news cycles will surely lead to disastrous outcomes. But then who knows... I may be wrong.

![cartoon](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,e_sharpen,w_650,c_limit/blog/technology-change.jpg)