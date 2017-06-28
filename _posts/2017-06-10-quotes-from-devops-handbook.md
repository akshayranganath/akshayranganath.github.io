---
layout: post
title: Quotes from DevOps Handbook
comment: true
description: The DevOps Handbook is codification of DevOps mindset, practices and processes. Written as a follow-up to the other book, The Phoenix Project, it reinforces core concepts. Here are my favorite quotes from the book.
---

__[The DevOps Handbook]((https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002)): How to create world-class agility, reliability and security in technology organizations__ is the follow-on book to __[The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262509/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=6Q7CNB17CF6AAX0DWSKT): A Novel about IT, DevOps, and Helping Your Business Win__. I had collected my favorite [quotes from the Phoenix project](https://akshayranganath.github.io/quotes-from-book-the-phoenix-project/) earlier. I finally managed to get the DevOps handbook and here's my collection of favorite thoughts from the book. 

![DevOps Handbook cover photo](/images/DevOpsHandbook.png)

## DevOps Myths

- DevOps is only for startups
- DevOps replaces Agile
- DevOps is incompatible with ITIL
- DevOps is incompatible with Information Security and Compliance
- DevOps means eliminating IT Operations, or _"NoOps"_
- DevOps is just _"Infrastructure as Code"_
- DevOps is only for open source software

### DevOps Aha!

>..DevOps is a manifestation of creating dynamic, learning organizations that continually reinforce high-trust cultural norms.

DevOps is the outcome of applying the most trusted principles from the domains of physical manufacturing and leadership to the IT value stream.

### Technical Debt
..describes how decisions we make lead to problems that get increasingly more difficult to fix over time, continually reducing our available options in the future.

### Problem with traditional Dev &amp; Ops Structures
Talking about the discussion in the book, [The Goal](https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884270610) about conflict between traditional organizational goals and metrics, 

>the core, chronic effect - when organization measurements and incentives across different silos prevent the achievement of global organizational goals.

#### Downward spiral
.. the systems most prone to failure are our most important and at the epicenter of our most urgent changes.

_Why is this important?_
>..every IT organization has two opposing goals, and second, every company is a technology company, whether they know or not.

_There is a discussion of *dark releases* and *feature flags*. Here's a very well written description by [Martin Fowler](https://twitter.com/martinfowler):_ [Feature toggles](https://martinfowler.com/articles/feature-toggles.html)

![feature toggles overview](https://martinfowler.com/articles/feature-toggles/overview-diagram.png)

### Where is DevOps impact seen?
This list is based on work done for [Puppet Labs - State of DevOps report](https://puppet.com/resources/whitepaper/2016-state-of-devops-report).

- Throughput metrics
- Code change and code deployments (thirty times more frequent)
- Code and change deployment lead time (two hundred times faster)
- Reliability metrics
- Production deployments (sixty times higher change success rate)
- Mean time to restore services (168 times faster)
- Organizational performance metrics
- Productivity, market share and profitability goals (two times more likely to exceed)
- Market capitalization growth (50% higher over three years)

## Technology Value Stream

>.. is defined as the process required to convert a business hypothesis into a technology enabled service that delivers value to the customer.

```
My paraphrasing: 
Value stream starts when the any engineer checks 
in a change (could be design, user story) and ends with this change 
is successfully running in production and providing value 
to customer and generating feedback and telemetry.
```

### Why is the focus on automation?

*Design and development* is akin to __Lean Product Development__ and is highly variable and highly uncertain, often requiring high degrees of creativity and work that may never be performed again, resulting in high variability of process time. In contrast, the second phase of work which includes *Testing and Operations* is akin to __Lean Manufacturing__. It requires creativity and expertise, and strives to be predictable and mechanistic, with the goal of achieving work outputs with minimized variability.

```
End goal:
Have testing and operations simultaneously with design and development to enable fast flow of work.
```

#### Concept of Lead Time

```
	|<--------------- Lead Time ---------------->|
	|=======================|====================|
Ticket 					  Work		   		   Work 
Created					Started		 		Completed
							|<-- Process Time -->|
```


>When we have long deployment lead times, heroics are required at almost every stage of the value stream.


## The Three Ways
Taken from the blog by [Gene Kim](https://twitter.com/RealGeneKim) titled [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/the-three-ways-principles-underpinning-devops/)

### First Way - Fast Flow

- *First Way*: The First Way requires the fast and smooth flow of work from Development to Operations, to deliver value to customers quickly. We optimize for this global goal instead of local goals, such as Development feature completion rates, test find/fix rations, or Ops availably measures.
<img alt="First way - principles of flow" src="https://itrevolution.com/wp-content/uploads/2012/08/first-way2-400x191.png" width="50%">

>Stop starting. Start finishing. - David J. Anderson.

__Issue with hand-offs__
With enough handoffs, the work can completely loose the context of the problem being solved or the organizational goal being supported.

__ 5 Focusing steps - Dr Goldratt __

<a href="https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951"><img alt="The Goal book" src="https://images-na.ssl-images-amazon.com/images/I/519C2Gz-v2L._SX334_BO1,204,203,200_.jpg" width="20%"></a>

- identify the system's constraint
- decide how to explot the system's contraint
- subordinate everything else to the above decisions
- elevate the sytem's constraint
- if in previous steps a constraint has been broken, go back to step one, but do not allow inertia to cause a system constraint.

__ DevOps Transformation - Focus Areas __

- Environment creation
- Code deployment
- Test setup and run
- Overly tight architecture

__I am praphrasing here__
The goal of fast flow is to make any kind of waste and hardships - anything that requires heroics is made visible and to systematically alleviate or eliminate the burden. Types of waste that lead to heroics are:

- partially done work (sitting in QA, waiting for deployment - stuck WIP)
- extra processes (eg Documenting steps to document - I guess this is where CMM models failed)
- extra features (adding more things than a minimum viable product {MVP})
- task switching
- waiting
- motion (lack of co-located colleagues, hand-offs, KTs)
- defects
- nonstandard or manual work

### Second way - Principles of Feedback

<img alt="Second way - principles of feedback" src="https://itrevolution.com/wp-content/uploads/2012/08/second-way1-400x211.png" width="50%">

.. Second way describes the principles that enable the fast and constant feedback from right to left at all stages of value stream.

According to Dr Spear, the goal of *swarming* is to contain problems before they have a chance to spread, and to diagnose and treat the problem so that it cannot recur.

```
When automated build is used and a test fails, the entire pipeline fails - and that is acceptable. Here's the reason.
```
Preventing the introduction of new work enables continuous integration and deployment, which is a single piece of flow in the technology value stream. All changes that pass our continuous build and integration tests are automatically deployed into production, and any changes that cause any tests to fail trigger our Andon cord and are swarmed until resolved.

__ Biggest differentiator in devOps compared to traditional software life-cycle?__
In the technology value stream, we optimize for downstream work centers by designing for operations, where operational non-functional requirements (e.g., architecture, performance, reliability, stability, testability, configurability, and security) are prioritized as highly as user features.


Preventing the introduction of new work enables continuous integration and deployment, which is 

### Third way - Continual learning and Experimentation

<img alt="Third way - priciples of continual learning and experimentation" src="https://itrevolution.com/wp-content/uploads/2012/08/third-way-400x224.png" width="50%">

.. the Third Way focuses on creating a culture of continual learning and experimentation. These are the principles that enable constant creation of individual knowledge, which is then turned into team and organizational knowledge.

__How?__

We improve daily work by explicitly reserving time to pay down technical debt, fix defects, and refactor and improve problematic areas of our code and environments.

### Selecting the correct Value Stream

Greenfield / brownfield do not matter - as long as the application is architected (or re-architected) for testability and deployability.

Although _systems of engagement_ are more easy to adopt to devOps, it is the _systems of record_ that can form a bottleneck. So everything in the org has to move to devOps going against the _bimodal_ IT design.


### Understanding work
Next step in value stream is:

	..what work is performed and by whom, and what steps can we take to improve flow

Typical teams involved in value stream mapping:

- Product owners
- Development
- QA
- Operations
- InfoSec
- Release Managers
- Technology executive or value stream manager

___ Managing Technical Debt and Non-functional requirements ___
Invest around 20% of all dev and ops time on Non-functional requirements. This is the only way to pay down technical debt.

