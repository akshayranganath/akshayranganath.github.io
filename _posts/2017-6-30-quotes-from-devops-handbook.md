---
layout: post
title: Quotes from DevOps Handbook
comment: true
description: "The DevOps Handbook: How to create world-class agility, reliability and security in technology organizations" is codification of DevOps mindset, practices and processes. Here are my favorite quotes from the book.
---

__[The DevOps Handbook]((https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002)): How to create world-class agility, reliability and security in technology organizations__ is the follow-on book to __[The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262509/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=6Q7CNB17CF6AAX0DWSKT): A Novel about IT, DevOps, and Helping Your Business Win__. I had collected my favorite [quotes from the Phoenix project](https://akshayranganath.github.io/quotes-from-book-the-phoenix-project/) earlier. I finally managed to get the DevOps handbook and here's my collection of favorite thoughts from the book. 

<img src="http://lh3.googleusercontent.com/ZE_FlRhIjlfueaWLxIK0_eFkUgJ9rEc2wg-akVq_D9ghFk4i3BWA52tdv5mZ4rVyDYR38hPIC-j-ZT3uY0IK=s0" width="30%" \/>

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

>.. as the process required to convert a business hypothesis into a technology enabled service that delivers value to the customer.

```
My paraphrasing: 
Value stream starts when the any engineer checks 
in a change (could be design, user story) and ends with this change 
is successfully running in production and providing value 
to customer and generating feedback and telemetry.
```

## The Three Ways
Taken from the blog by [Gene Kim](https://twitter.com/RealGeneKim) titled [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/the-three-ways-principles-underpinning-devops/)

- *First Way*: 
<img alt="First way - principles of flow" src="https://itrevolution.com/wp-content/uploads/2012/08/first-way2-400x191.png" width="50%">
<img alt="Second way - principles of feedback" src="https://itrevolution.com/wp-content/uploads/2012/08/second-way1-400x211.png" width="50%">
<img alt="Third way - priciples of continual learning and experimentation" src="https://itrevolution.com/wp-content/uploads/2012/08/third-way-400x224.png" width="50%">