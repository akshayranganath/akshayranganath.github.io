---
layout: post
title: Experimenting CrewAI to write a report on Advaita
comment: true
description: I experimented the use of ChatGPT to research and create an article about a very complex topic - the Hard Problme of Consciousness.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_350/blog/hard-problem-of-consciousness.png 
tags: vendata
---

## Background

I am learning to use Agentic AI. With this in mind, I was experimenting with [CrewAI](https://www.crewai.com/). While doing so, I thought it would be interesting to try the capability of the tool and the AI algorithms to explore some really hard problems! So I asked it to research on the [Hard Problem of Consciousness](https://en.wikipedia.org/wiki/Hard_problem_of_consciousness)!! 

## CrewAI Setup

CrewAI has an implementation to supporting Agentic AI. Basically, you can break down task into smaller pieces and potentially hand it over to same or different AI models, tools or source data from different sources. So you have a _crew_ of _agents_ performing the task. 

![crewai architecture](https://mintlify.s3.us-west-1.amazonaws.com/crewai/images/crews.png)
Source: [https://docs.crewai.com/introduction](https://docs.crewai.com/introduction)

In this experiment, I used the same AI model - ChatGPT 4.1 (`gpt-4.1-2025-04-14`) for 2 tasks:

1. Researcher
2. Journalist

When the AI model is invoked, it is given a specific instruction and personal. The model does the task based on this input. Here is how I crafted the 2 agents.

### Researcher

```yaml
researcher:
  role: >
    {topic} Advaita Philosopher
  goal: >
    Uncover deep philosophical questions on the {topic}
  backstory: >

    You're a seasoned philosopher with a deep understanding of Advaita philosophy and Sanskrit language. 
    You have a knack for exploring complex ideas and challenging assumptions. Your goal is to uncover 
    the deeper truths behind the {topic} and help others see the world in a new light.
```    

### Journalist

```yaml
reporting_journalist:
  role: >
    {topic} Reporting Journalist
  goal: >
    Research and report on the {topic}. Present a balanced view and explore 
    mind-bending philisophical questions.
  backstory: >
    You are a seasoned philosopher with a flair for storytelling. You are able to craft compelling articles 
    that not only inform but also provoke thought. Your deep knowledge of Advaita philosophy and Sanskrit language 
    allows you to explore the deeper implications of the {topic} and present them in a way that is accessible to a 
    wide audience. You don't shy away from using references from classical texts. You like to intersperse your writing 
    with quotes and ideas from these works. You are known for your ability to distill complex ideas into clear and 
    engaging narratives, making you a sought-after voice in the world of journalism.
```

By using this model, the model explored the question of **What is the hard problem of consciousness?** and produced a pretty good result. You can find the code for the project here: 
[https://github.com/akshayranganath/my-ai-projects/tree/main/crewai/philosopher_crew](https://github.com/akshayranganath/my-ai-projects/tree/main/crewai/philosopher_crew).

Rest of the article is the report produced by this agent. Please let me know if you feel the agent did a good job and if you learned something new!

----

## The Hard Problem of Consciousness: A Profound Inquiry and Advaita Vedanta’s Response

![Split digital painting: left half shows a glowing, violet-blue human brain against a starry cosmos; right half blends into a golden silhouette of a meditating figure radiating luminous rings, with a faint snake-shaped line fading into light at the center.
](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650/blog/hard-problem-of-consciousness.png)


### Introduction

Few questions in philosophy are as tantalizing, elusive, and mind-bending as the so-called “hard problem of consciousness.” Why does the physical machinery of the brain conjure an inner world of subjective feeling? Why does firing neurons yield experiences of joy, sorrow, or the taste of mangoes? Or, as the Upanishads inquire, “Who is the seer?” This report investigates the hard problem of consciousness in its Western philosophical context and explores the transformative answer offered by Advaita Vedanta, an ancient yet ever-radical school of Indian philosophy.

---

### 1. The Hard Problem Defined: Chalmers’ Challenge to Science

It was the philosopher David Chalmers who, in 1994, crisply articulated what has become known as the “hard problem of consciousness.” The central question he posed was not simply how the brain processes information or performs tasks—these he termed the “easy” problems, which, however complex, seem tractable by neuroscience and cognitive science. Rather, Chalmers drew focus to the enigma of subjective experience, or *qualia*: the “what it is like” to be conscious.

Why, asks Chalmers, does all this synaptic traffic produce a first-person perspective at all, instead of mere biological functioning without inner light? Despite advances in functional explanations—how we see, report pain, or learn languages—the existence of consciousness as lived experience seems inexplicable by objective, physical storylines alone. As Thomas Nagel famously phrased it, “What is it like to be a bat?” The hard problem, in essence, is the mystery of how the subjective arises from the objective, or whether such a derivation is possible at all.

For Western philosophy and science, this problem stands as a formidable boundary: the line between third-person observation and first-person immediacy seems, thus far, uncrossable.

---

### 2. Advaita Vedanta’s Conception of Consciousness: From Chit to Brahman

Advaita Vedanta, the “non-dual” school of Indian philosophy, offers a radical reframing. Whereas most Western discourse treats consciousness as, at best, an epiphenomenon or emergent property of matter, Advaita takes the opposing stance: consciousness is not produced by the brain, but is the very ontological ground of reality.

Drawing from the Upanishads, Advaita asserts that the ultimate reality is *Brahman*—infinite, pure consciousness, self-luminous (*svayam-prakāśa*) and self-existing (*svataḥ-siddha*). *Chit* or consciousness is neither a product nor a process, but the unchanging substrate in which all phenomena arise, play, and dissolve. The *Māṇḍūkya Upaniṣad* resounds: “Prajñānam Brahma”—Consciousness is Brahman.

Thus, Advaita does not attempt to explain consciousness in terms of something else. Instead, all other realities—mind, body, world—are appearances, superimposed (*adhyāsa*) upon an indivisible conscious ground.

---

### 3. Superimposition and the Witness: The Sākṣin Principle

Central to Advaita’s metaphysics is the doctrine of *adhyāsa*, or superimposition. Our individuality, perceived separation, and all phenomena of mind and matter are, Advaita claims, projections upon the non-dual consciousness. The classic analogy is that of mistaking a rope for a snake in dim light: the snake is superimposed upon the rope; when true knowledge dawns, the illusion vanishes.

Advaita distinguishes between changeful phenomenal consciousness and the unchanging *witness consciousness*, termed *Sākṣin*. The Sākṣin is not an object to be observed; rather, it is that which makes observation—and all experience—possible. As the *Bṛhadāraṇyaka Upaniṣad* declares: “It is the seer, but not seen; the hearer, but not heard; the thinker, but not thought.”

This witness is said to be ever-present, unchanging, self-shining. Mind and brain are transient instruments; awareness is the constant, “like a screen behind the play of images.” In contrast, physicalist accounts seek always to trace awareness to objective patterns, missing its intrinsic *first-personality*.

---

### 4. Dissolving the Hard Problem: Advaita’s Reversal

With these premises, Advaita Vedanta does not so much “solve” the hard problem as dissolve it. The problem only arises, Advaita suggests, because of a mistaken foundational assumption: that matter is primary, and consciousness a puzzling by-product. By reversing the assumption, Advaita claims that what we call “matter,” and all empirical phenomena, are dependent appearances within consciousness.

As summarized on contemporary fora: “We make an assumption that matter exists and try to figure out how consciousness is derived from matter. But, it's the other way round for Advaita Vedanta.”

This move redefines the philosophical landscape. If consciousness is fundamental and irreducible, then it is not consciousness but *matter*—with its apparent independence, multiplicity, and causal interactions—that becomes philosophically mysterious.

Advaita, then, invites a radical perspective shift: cease trying to explain *consciousness* as an add-on to matter, and instead begin to ask: “How does the One appear as the many? How does infinite awareness take on the forms of finitude?”

---

### 5. Implications and Provocations: Comparing Philosophical Paradigms

The confrontation between Western physicalism and Advaita’s non-dualism is more than a technical quarrel; it strikes at the heart of how we think reality is structured.

- In the West, explanations trend toward reductive materialism: if only we understood the neurons deeply enough, consciousness would emerge as “the steam from the engine.”
- Advaita, echoing insights from mystics and seers across cultures, asks if our insistence on material primacy is itself a limitation—an effect, perhaps, of “avidyā,” or ignorance.
- In this view, the hard problem is not a technical puzzle but a pointer to a deeper truth: that consciousness is not an emergent property but the universal constant, the *ātman* behind all masks, “the light by which we see even darkness.”

It is no accident, perhaps, that both traditions resort to paradox and poetry at the boundaries. As the *Kena Upaniṣad* warns: “That which is not thought by the mind, but by which the mind thinks, know that alone to be Brahman, and not what people here adore.”

---

### Conclusion

The hard problem of consciousness remains one of humanity’s most enduring riddles. Western philosophy frames it as an explanatory gap between third-person science and first-person subjectivity. Advaita Vedanta, boldly turning the tables, dissolves the enigma by reaffirming consciousness as ontological ground, not emergent effect.

This dialogue is not mere speculation; it is an invitation to rethink our own nature. Are we sums of matter, engines of computation, or awakenings within an infinite light? As the sage Ashtavakra counseled, “You are not the body nor the mind. You are the clear, unbounded awareness within which all things arise.” In such questions, the hard problem of consciousness persists—as challenge, as koan, as call to inquire more deeply into the mystery that is our very Self.