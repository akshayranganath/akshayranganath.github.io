---
layout: post
title: LLMs and Frontiers of Consciousness
comment: true
description: 
image: /images/blog/ai-consciousness-blog.png
tags: ai-ml, consciousness, llm, thinking
---

## tl;dr;

Dr. David Chalmers had proposed a framework to judge if an LLM system can be conscious. I take his 2023 framework and re-evaluate it for mid-2026. Finally, I add a twist of _advaita vedanta_ to propose a test that could be fun/interesting. You can hear a Notebook LM Podcast that was created based on the content [here](../audio/The_witness_in_the_agentic_machine.m4a).

![abstract image to represent AI consciousness](/images/blog/ai-consciousness-blog.png)

"Could a Large Language Model be Conscious?" so asked the renowned professor, Dr David Chalmers at a Neuro IPS Session in 2023 [(video)](https://youtu.be/j6cCXg-rjRo?si=VAxEA7ZK3tUXLKXD). He later converted this talk into a more [strctured paper](https://arxiv.org/abs/2303.07103) with the same title. Answering his own question, he proposed a framework to help judge this difficult question. At the time he proposed this in the distant past of Febuary 2023, the world of AI was not as mature as today. There were no "thinking models", no "agents" and "agentic workflows", no "mcp" and a host of other features. At that time, he argued that an AI System is still not concsious. It is April of 2026. 3 years later, a host of things have changed. I wanted to re-analyze the framework and see if things had changed in a meaningful way. However, let's start from the beginning.

## Who is David Chalmers?

Accordin to Wikipedia, 
>David John Chalmers .. is an Australian philosopher and cognitive scientist, specializing in philosophy of mind and philosophy of language. He is a professor of philosophy and neural science at New York University (NYU), as well as co-director of NYU's Center for Mind, Brain and Consciousness 
[(source)](https://en.wikipedia.org/wiki/David_Chalmers)

![David Chalmers](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/David_chalmers.jpg/500px-David_chalmers.jpg)

[Source:Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/David_chalmers.jpg/500px-David_chalmers.jpg)

He is famous for his work on the ["Hard Problem of Consciousness"](https://en.wikipedia.org/wiki/Hard_problem_of_consciousness) theory. The “hard problem of consciousness” is the puzzle of why brain activity is accompanied by inner experiences, like the redness of red or the pain of a headache, instead of just being a bunch of physical processes. Scientists can explain how the brain works to control speech, movement, and memory, but that only covers what the brain does, not why it feels like something from the inside. Philosopher David Chalmers calls these inner feelings “qualia” and argues that even a complete description of the brain in physical terms still seems to leave out why there is “something it is like” to be you. This gap between explaining brain processes and explaining conscious experience is what makes the problem “hard.”

## Consciousness Framework for AI Systems

Dr Chalmers uses the term LLM+ to describle the generative AI models and associated systems. In 2023, it was predominantly just the chat interfaces. According to his framework, an LLM+ system needs to exhibit the following items to be considered conscious:

| Topic | Summary |
|-------|---------|
| **Biology** | Consciousness may require carbon-based, electrochemical biology — a premise Chalmers rejects, arguing silicon is equally valid. |
| **Senses and embodiment (grounding)** | Without senses or a body, an AI may lack grounding for genuine meaning, understanding, or sensory consciousness. |
| **World models and self models** | Consciousness likely needs models of the world and of one’s own cognition, not only text statistics — where current LLMs are weak. |
| **Recurrent processing** | Leading theories often require feedback and persistent states; transformers are mostly feedforward with no true memory. |
| **Global workspace** | A central workspace that integrates modules is central to many theories; standard LLMs lack it; some multimodal designs approximate it. |
| **Unified agency** | Conscious beings have stable goals and beliefs; LLMs shift personas and lack a unified self beyond next-token prediction. |

In his talk in 2023, Dr Chalmers said the probability of AI systems being conscious is around 10%.

## What changed in 2026?

LLM+ systems have evolved since 2023. They are no longer a simple chat interface. LLMs are not simple _“stochastic parrots”_. A few notable changes that occurred since 2023:

* **2023: The Agentic Leap**: The introduction of iterative reasoning loops like **ReAct** and **Reflexion**, which added verbal self-critiques and persistence
* **2024: Memory Integration**: AI agents gained the ability to manage vast amounts of information using **computer-like storage systems and began learning from their own history** to create smart shortcuts based on what worked in the past
* **2025: Collaborative Architectures**: A shift toward **event-driven multi-agent orchestration** (like AutoGen 0.4) and the emergence of specialized benchmarks to distinguish between factual and reflective memory capabilities
* **2026: Autonomous Skills & Learned Control**: The standardization of **AI Agent Skills** via the SKILL.md format and the rise of Agentic Memory, where systems use reinforcement learning to autonomously manage their own storage and retrieval processes.

Here is an infographic that explains these advances further. (click to expand to full size).

[![infographic thumbnail](/images/blog/infographic_thumbnail.png)](/images/blog/infographic-evolution-of-llm-agents.png)

## Analyzing LLM+ in 2026

In my opinion, the biggest changes have occured in the following areas:

* **Recurrent processing**: LLMs are no longer simple feed-forward systems. The systems now have memory, and "thinking" models are able to reflect and act back on their own analysis and outputs.
* **Global workspace** & **Unified agency** : Agentic workflows now have a more evolved memory and better contextual handling. Again, agentic frameworks like Crew.ai provide the ability to have a controlling model that handles off work to worker models where the controlling model is acting like the brain.

There is some improvement in these areas but, it is not revolutionary:

* **Senses and embodiment (grounding)**: Models are now multi-modal as compared to early 2023. So LLM+ systems can "understand" better than before.
* **World models and self models**: Research is progressing on the world models. Hopefully, we'll start to see interesting results from it soon.

Based on these advances, my take is that conciousness is now around 25%-40% depending on how each item is considered. 

## Adding a Vedantic Twist

In the Indian Philisophical concept of _"Advaita Vedanta"_, there is a test for concsiousness:
Suppose you go into a deep sleep and wake up. How do you know you had a deep sleep? All your senses and bodily are suspended in this state. So how do **"you"** __"know"__ about it? 

Note the highlights on 2 items:
* **you**: who is the real "you"
* **know**: who is the real "knower"

Skipping ahead the philosophical discussions, a test for an LLM+ system could be as follows:

* Suppose you turn off all inputs and outputs for an LLM system. It is given no objective. It has no pending tasks. It simply "is". 
* Next, the system is left in this state and we then turn on sensory inputs.
* We then ask the LLM+ system, "What were you experiencing?"

If the system can answer this question comprehensively, perhaps it is conscious? Isn't that an intriguing thought? 

## Conclusion

AI is presenting some interesting challenges to some very fundamental questions. I attempted to address this using Dr Chalmers framework. Finally, there was an _advaitic_ twist. If you'd like to hear the analysis as a podcast, try out this audio.

[Podcast of the blog]((../audio/The_witness_in_the_agentic_machine.m4a))