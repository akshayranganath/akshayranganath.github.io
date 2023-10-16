---
layout: post
title: Putting Generative AI to Work - Conference
comment: true
description: Notes from the virtual conference Putting Generative AI to Work held by the Pack publications.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/gen-ai-hero-image-2.jpg
tags: ai-ml, gen-ai
---

Pack Publications ran a 3 day virtual conference on the topic [Put Generative AI to Work](https://www.packtpub.com/conference/put-gen-ai-to-work) from October 11-13. I was fortunate enough to attend the conference. Here are the main learnings / take-aways.

![hero image](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/gen-ai-hero-image-2.jpg)
[Source: Bing Generate]

Although we can't seem to escape the buzz around Gen AI, Gartner is predicting that we've hit the _peak of inflated expectations_ in the hype cycle. From here on, we are going to see a steep fall followed by a realization that Gen AI is really good at certain tasks and not the best tool for others.

![Gartner Hype Cycle](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/gartner-ai-hype-cycle.png)
[Source: [Gartner Hype Cycle](https://emtemp.gcom.cloud/ngw/globalassets/en/articles/images/hype-cycle-for-artificial-intelligence-2023.png)]

## My Learnings

With this background, let's take a whirlwind tour of different things that I picked up at the conference.

### Panel Discussion

In a panel discussion, the industry stalwarts had some sanguine observations.

* Unlike the technological progress in the past, the AI adoption will actually replace higher value jobs.
* However, new jobs that we've not heard about will start to appear. [Maria](https://www.linkedin.com/in/mariaparysz/) quipped that a 8 month experienced _prompt engineer_ is considered a _tenured_ employee in this new field!
* [Dennis Rotham](https://www.linkedin.com/in/denis-rothman-0b034043/) observed that the job of programmers will remain. His quip - can you imagine someone sending a rocket to the moon with Gen AI created code?
* They also highlighted the fact that AI (not necessarily _Gen AI_) has been around for quite some time. It is present in all things like aircraft management, automobiles, manufacturing and so many industries. These deployments simply did not get so much attention. 

![sorceror gazing into future](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/predicting-future.jpg)

Their suggestion were to:

* start small - start learning about the world of AI and Gen AI.
* Domain Experience is irreplaceable but AI skills can be automated away. Your tenure in industry still holds value.
* Folks who can translate the business requirement to Data Scientists and translate back the technical clarifications from Data Scientists to Business are in absolutely necessary. AI Managers are critical.
* When trying to implement a project, start small. 
    * Start with something that you know and can understand.
    * These suggestions were almost the same ideas as the basics of agile programming!

### Evolution of e-Commerce

The next session that I loved was by [Somil Gupta](https://www.linkedin.com/in/somilguptaai/) on the possibilities of eCommerce evolution due to Generative AI. Unlike the gloom-and-doom scenario, this was refreshingly optimistic and covered a lot of ground.

![evolution of ecommerce](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/digitally-assisted-shopper.jpg)

* **Understanding Intent**: Current mechanism of search is not optimal. Due to the way the search is designed, there is a wide chasm between our intent and query. For example, we may search _spiderman dress for 5 year old boy_ when our intent is to _plan a birthday party in the theme of Spider Man for a 5 year old boy and 15 of his friends, including party supplies, T-Shirt and return gifts_.
* **AI Assisted Commerce**: Gen AI technologies can understand our intent better. They can _think through_ the request and suggest steps and thus make the shopping experience less stressful. For example, a user could search for something like this:

    > I am attending an office party. I'd like to order a stylish red dress suitable for the occasion that makes a statement. My budget is 150-200 dollars.

    With AI assisted search, this query can be broken down identify the features. Perhaps, the algorithm could ask clarifying questions like material desired, shipping preferences and then provide links to the dress.

* **Product Personalization**: Gen AI technologies when combined with other products like _plugins_ can take personalization to a new level. For example, when a user tries to enroll for a course on AI, the system could extract the user's LinkedIn and detect that they have not refreshed Math skills in 15 years. The system could come up with a hyper-personalized course with a 2-day introduction to Math skills followed by AI lessons tailored to the user's domain.
* Other ideas were around systems where there is one _orchestrator_ model that talks to other AI models for specific inputs, combines the results and presents in a comprehensible manner. For example, a financial advisor model that talks to a Bonds model, a Stocks model and so on.

I felt this was one of the best session that was looking into the future on what AI technologies can transform. Personally, I would have liked to see this as a Keynote session.

### Prompt Engineering

Unlike the typical prompt engineering sessions where someone opens a ChatGPT interface and starts typing, the session by [Valentina Alto](https://www.linkedin.com/in/valentina-alto-6a0590148/) took us under the hood on how GPT interprets the prompt. She then walked us through some advanced techniques to help design optimal user prompts. Here are some items that I noted down:

* Clear instructions are a must.
* If you have a complex query, break it down into sub-tasks.
* Force the system to slow down by asking it to explain it's thinking, and seek justifications.
* Be descriptive on how you'd like the system to answer.
* Order within the prompt matters. Last few sentences have the most weight. 
* Repeat important or critical items.
* Give the model a way to escape without hallucinating. 

![human architecting prompt](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/human-architecting-prompt.jpg)

She then walked us through some advanced prompting concepts:
* Few show approach: Provide a few examples. This can help the model make it more purpose driven
* Use cues
* Use selection marks: Separation of example from prompt.
* Break down tasks: Especially useful for mathematical prompts. 
* Chain of thoughts: Prompt the model to reason step-by-step. Take the o/p of previous step and use it as I/p for next step.
* ReACT: (Reason then ACT) Useful for working with agents. Kind of similar to Chain of thoughts.

For those of you who'd like to do deep, here are 2 papers that were suggested:

* [ReACT](https://arxiv.org/abs/2210.03629?_x_zm_rtaid=sQFaRMZZRVKvXhf2hzTXug.1697125475126.1644179f012e680718223d4fe40f70e4&_x_zm_rhtaid=601)
* [Chain of thought](https://arxiv.org/pdf/2201.11903.pdf?_x_zm_rtaid=sQFaRMZZRVKvXhf2hzTXug.1697125475126.1644179f012e680718223d4fe40f70e4&_x_zm_rhtaid=601)

## LLM Training Hands-On Sessions

I also attended 2 sessions by [Dennis Rotham](https://www.linkedin.com/in/denis-rothman-0b034043/). I am not sure on the restrictions for sharing the code - so I'll refrain from it. However, the primary take-away were:

* If you want to be in this field, focus on understanding the concept of __Transformers__. This is critical. 
* The math may _look_ daunting but it is not. 
* Once the concept is clear, Dennis felt that the _wow!_ factor of Gen AI would give away to _of course!_.  And to the realization that there is really not _Gen_ in _Gen AI_! 

We also had sessions by [Clint](https://www.linkedin.com/in/clintb/) on security risks and mitigation steps when working with Gen AI. He introduced the [OWASP Top 10 for ML](https://owasp.org/www-project-machine-learning-security-top-10/) and the mitigation strategies. A lot of these sounded like the standard but robust software engineering practices. One call-out for me was about the use of trained model. If a malicious actor were to feed bad data to a popular model, it can ingest this and produce wrong or harmful output. 

If companies start to rely more on Open Source trained models, such kind of issues may rise in criticality.

## Closing Thoughts

As a technology professional, my main thoughts at the end of the conference were the following:

* If we want to stay relevant, we need to understand some core concepts like _Transformers_.
* Instead of trying to learn the cheat codes of _effective prompts_, we should invest time to learn how the AI systems break down the queries. This can help us build more _optimal prompts_. Such a design may require us to build our out API+front-end instead of relying publicly available interfaces.
* Architects, Developers and Project Managers are very much a necessity. Domain Knowledge still has relevance.
* Enterprises may start to adopt more of the Open Source Models and deploy them within their own cloud environments. This can help prevent data loss or leaking secure information.
* Using technologies like [LangChain](https://github.com/langchain-ai/langchain) will be akin to a sequential programming language. Each AI model may be like a function call and orchestrating them will deliver some business outcome.
* Gen AI is not equal to ChatGPT. There is a lot more to to it!
* Learn more about Hugging Face and the models being published on this platform.
