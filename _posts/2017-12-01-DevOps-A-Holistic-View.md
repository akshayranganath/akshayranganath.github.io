---
layout: post
title: DevOps - A Holistic View
comment: true
description: DevOps is influenced by many ideas like Lean, ToC, Agile and ITIL. In this post, I point out the exact practices adopted from these methods. 
image: /images/collaboration.jpg
tags: [devops, lean, agile, theory of constraints, ITIL]
---

DevOps is influenced by many ideas like Lean, ToC, Agile and ITIL. In this post, I wanted to explore the origin of different practices to give you a holistic view. The reason is that most blogs or articles just allude to this by saying "DevOps is based on Lean, Agile, ITIL and other practices" without explaining what part of the DevOps methodology is derived from these earlier methodologies. 

Hope this journey into the origins of DevOps is exciting!

## What is DevOps?

DevOps is a movement and not necessarily a process. It has various definitions by different authors. Here is one that I feel does a decent job. All the **emphasis** are mine.

>DevOps represents a change in IT **culture**, focusing on rapid IT service delivery through the adoption of agile, lean practices in the context of a **system-oriented** approach. DevOps emphasizes **people** (and **culture**), and seeks to improve **collaboration** between operations and development teams. DevOps implementations utilize technology — especially automation tools that can leverage an increasingly programmable and dynamic infrastructure from a life cycle perspective. [Source: [Gartner on DevOps](https://www.gartner.com/it-glossary/devops)]

So let's break this down a bit:
* DevOps is about people and culture
* It is about a _system-oriented_ approach. Whenever you see the term _system-oriented_ it just means the focus is on the business outcome. e.g.: A systems-oriented goal for an eCommerce website is more revenue. For a Dev team, it could be faster code release and for an Ops team, it is the no of days without an incident. The idea is that ultimately, business goal is everyone's goal and optimization has to be made towards this goal rather than team specific ones.
* Tools are not the reason for DevOps - they only enable in the DevOps culture


![DevOps Balanced Scorecard](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://i2.wp.com/devops.com/wp-content/uploads/2016/02/DevOps-Strategy-Map-Draft-v4-020316.gif)
## Breaking down DevOps

DevOps as a practice has evolved from various fields. According to the [The DevOps Handbook](https://www.amazon.com/dp/B01M9ASFQ3/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1), it is based on:
* Lean
* Theory of Constraints
* Toyota Production System
* Resilience Engineering
* Learning Organizations
* Safety Culture
* Human Factors
* High-trust management culture
* Servant leadership
* Organizational change management
* .. and many more

These are a lot of items and it is hard to see which practice of DevOps is influenced by these practices. So let's try to fit them in. I am using [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/the-three-ways-principles-underpinning-devops/) as the reference to explain the mapping. So we have:
* The First Way: This talks about the flow of work from left to right.
* The Second Way: This is about the feedback from right to left
* The Third Way: It emphasizes the need for continual experimentation and learning.

Let's see how the 3 ways work and the basis for these concepts.

## The First Way
This is the way of describing the flow of work from left to right, ie. from idea to delivery of working software code. At its heart, it just means that if we remove any blockers, we are able to deliver faster.  
![First way](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/first%2520way.png)

The First Way requires the fast and smooth flow of work from Development to Operations, to deliver value to customers quickly. We optimize for this global goal instead of local goals, such as Development feature completion rates, test find/fix rations, or Ops availably measures. (_Source: DevOps handbook_)

The goal of fast flow is to make any kind of waste and hardships - anything that requires heroics is made visible and to systematically alleviate or eliminate the burden.

### Agile

Let's first start with the definition of Agile.

>Agile software development refers to a group of software development methodologies based on iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams. (Source: [WHAT IS AGILE? WHAT IS SCRUM?](https://www.cprime.com/resources/what-is-agile-what-is-scrum/))

![Agile model](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/http://cdn.ttgtmedia.com/rms/onlineImages/software_quality-agile_software_dev_cycle_desktop.jpg)

The core ideas are:
* self-organizing teams
* smaller batch sizes
* working software in smaller increments

The idea is business and development is closely aligned and hence able to deliver on the __actual need__ from business. This is in contrast to _waterfall_ processes where the requirements are created right at the beginning and business has no visibility until the product is ready.

However, the focus of Agile is on Development and does not really explain what occurs when the code is thrown over the wall to Ops.

This is where DevOps picked off and wants to bring the whole process from creation to delivery and operations into the scope.

DevOps and Agile can play well. For example, a user story is marked as _Done_ only after it is deployed instead of just the cod check-in. Similarly, Ops can be emedded in the daily SCRUM meetings to ensure environments are created and ready for use when required.  

### Lean

According to [Wikipedia](https://en.wikipedia.org/wiki/Lean_manufacturing) 

>Lean manufacturing or lean production, often simply "lean", is a systematic method for waste minimization ("Muda") within a manufacturing system without sacrificing productivity. Lean also takes into account waste created through overburden ("Muri") and waste created through unevenness in work loads ("Mura"). Working from the perspective of the client who consumes a product or service, "value" is any action or process that a customer would be willing to pay for.

![Muda-Mura-Muri](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://www.tipsparaempresas.com/wp-content/uploads/2011/02/muda-mura-muri.jpg)

Lean basically originated from the [Toyota Production System (TPS)](http://www.toyota-global.com/company/vision_philosophy/toyota_production_system/)

The core aspects that impacts DevOps are:
* _Muda_ / waste: Waste in terms of DevOps is defects or broken builds. 
* _Mura_ / unevenness: This is manifested in snowflake configurations, mismatched environments. This concept is explained quite well in the presentation [The History of Pets vs. Cattle .. & Using it correctly](https://www.slideshare.net/randybias/the-history-of-pets-vs-cattle-and-using-it-properly)

From DevOps perspective, the concept of "flow", "value streams"  "bottlenecks" and "continuous improvement" derive from Lean. Specifically, Lean manufacturing has a 5 part priciple that is used to guide the production. Here are the 5 steps.

* Specify value from the standpoint of the end customer by product family.
* Identify all the steps in the value stream for each product family, eliminating whenever possible those steps that do not create value.
* Make the value-creating steps occur in tight sequence so the product will flow smoothly toward the customer.
* As flow is introduced, let customers pull value from the next upstream activity.
* As value is specified, value streams are identified, wasted steps are removed, and flow and pull are introduced, begin the process again and continue it until a state of perfection is reached in which perfect value is created with no waste.
_Source:[PRINCIPLES OF LEAN](https://www.lean.org/WhatsLean/Principles.cfm)_

![Principles of lean](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://www.lean.org/images/5stepslean.gif)

#### Kanban
One of the core tenets of the _First Way_ is to make the work visible. To achieve this, Kanban boards are used. 

>Kanban (看板) (literally signboard or billboard in Chinese and Japanese) is a scheduling system for lean manufacturing and just-in-time manufacturing (JIT).[2] Kanban is an inventory-control system to control the supply chain. _Source: [Kanban](https://en.wikipedia.org/wiki/Kanban)

When a Kanban board is used it is very clear on the tasks being queued up, in progress and completed. The end goal is to reduce idle time and eliminate waste. 

![Kanban board](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://mktgcdn.leankit.com/uploads/images/general/_xLarge/kanban-board-e60650d1-1.jpg)
  
### IT Service Management (ITSM)

Let's begin by understanding the meaning of ITSM and ITIL.

>IT service management (ITSM) is simply how you manage the delivery of end-to-end IT services to your customers based on best practices. One of the most commonly adopted best practice frameworks for ITSM is ITIL or IT Infrastructure Library. _Source: [What is ITSM?](https://www.atlassian.com/it-unplugged/itsm)_

>The Information Technology Infrastructure Library (ITIL) is a set of practices for ITSM that focuses on aligning IT services with business needs. ITIL is the most widely accepted approach to ITSM and can help IT organizations realize business change, transformation, and growth. _Source: [What is ITSM?](https://www.atlassian.com/it-unplugged/itsm)_

ITSM is similar to DevOps in the sense that it spans the entire life-cycle and doesn't stop at deployment. In this manner, it is similar to DevOps. ITIL has a set of established practices that can help in DevOps transformation. ITSM has a set of defined processes that can be adopted for DevOps. For example, it has a detailed incident management process. This could be tailored for a DevOps organization and be used in its incident handling procedure.

Here's some of the common ITSM processes.

![ITSM processes](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://image.slidesharecdn.com/introductiontotheitsmprogramatyale-whyarewedoingthisaugust2011-131219111634-phpapp02/95/introduction-to-the-itsm-program-at-yale-why-are-we-doing-this-august-2011-4-638.jpg?cb=1387451836)

The next component that acts as an enabler for the _First Way_ is CI/CD.   

### CI / CD
One of the commonly visible artifacts in the DevOps transformation is the CI/CD pipeline. But, before getting there, let's look at _what is_ CI/CD.

#### Continuous Integration
According to [Martin Fowler's blog post](https://martinfowler.com/articles/continuousIntegration.html),
>Continuous Integration is a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily - leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible. 

So, CI is the practise of checking the code and ideally running it through an automated test to ensure that it hasn't broken the build. Note that the focus here is to just get the code checked into the versioning system quickly. The objective is to avoid technical debt. If a developer has to check-in code every day, handling merge conflicts is easy. If a developer checks in code after a month, resolving the merge isisues with all other changes will be extremely difficult.


####  Continuous Delivery
Continuous Delivery takes Continuous Integration (CI) a step further. As per another [Martin Fowler's blog](https://martinfowler.com/bliki/ContinuousDelivery.html), 
>Continuous Delivery is a software development discipline where you build software in such a way that the software can be released to production at any time.

Elaborating on this, Martin Fowler says,
>You achieve continuous delivery by continuously integrating the software done by the development team, building executables, and running automated tests on those executables to detect problems. Furthermore you push the executables into increasingly production-like environments to ensure the software will work in production.

To achieve _Continuous Delivery_, most organizations use a __Deployment Pipeline__.

#### Deployment Pipeline
In their book, _Continuous Deliver_, Jez Humble and David Farley, describe a [deployment pipeline](http://www.informit.com/articles/article.aspx?p=1621865&seqNum=2) in this way.
>At an abstract level, a deployment pipeline is an automated manifestation of your process for getting software from version control into the hands of your users.

This is the place where the concept of assembly line, lean manufacturing and Toyota Production system sort of comes into manifestation. In many analogies, this piepeline is very similar to the assembly line in a manufacturing plant. The alerts that go out due to a failed build (often termed as red build) is similar to pulling the [Andon Chord](https://itrevolution.com/kata/). 

However, there are practitioners who are not convinced that IT software development is akin to assembly line. They posit that software involves innovation all through the year instead of the next year's new car model. And the model of software value stream is similar to the hub and spoke model of airlines. For more of this unique through process, please have a look at this excellent presentation from [DevOps Enerprise Summit 2017 - SFO](https://www.youtube.com/watch?v=HrEZM1Yg7Ck).

Now that we've seen one of the _CDs_ in the form of continuous delivery, let us look at another form of _CD_.

#### Continuous Deployment
As per [Electric-Cloud's wiki page](http://electric-cloud.com/wiki/display/releasemanagement/Continuous+Deployment#ContinuousDeployment-ContinuousDeploymentOverview) Continuous Deployment is 
> the practice of continuously pushing to production new versions of software under development.

So it takes the Continuous Delivery to a new level by actually pushing the code out to production. In both _Delivery_ and _Deployment_ code is tested in production like environments. The difference is that in _Delivery_, new change is not deployed until requested (a manual [circuit-breaker](https://www.martinfowler.com/bliki/CircuitBreaker.html)) vs _Deployment_ where the code is automatically promoted to production. 

![Continuous Delivery vs Continuous Deployment](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/07/differnce-1.png)   

Puppet Labs has a blog about [continuous deliver vs continuous deployment](https://puppet.com/blog/continuous-delivery-vs-continuous-deployment-what-s-diff)  

So we've seen various methods, processes and tools that can aid in a smooth flow of work from left to right. Now, let us turn the focus on the right to left feedback cycle. The end-goal of the _First Way_ is __Continuous Flow__. It means cross-functional teams can take a requirement and get it built and released as needed with no impediments. Basically it means, "deliver requirements on-demand". 
  
## The Second Way

The Second way describes the principles that enable the fast and constant feedback from right to left at all stages of value stream.(_Source: DevOps handbook_)

The purpose of the feedback loop is to ensure that we can quickly catch errors, avoid costly production issues. The Second Way is the part of DevOps that stresses on monitoring, dashboards and metrics. 

The Second way is closely tied to first way in terms of the underlying influences. e.g.: Kanban boards make work visible and SCRUM meetings help by providing a quick feedback on the impediments. By combing them, project managers can quickly feedback on project status and work on re-prioritizing, if needed.

The Second way also requires cross-functional teams and interaction. Operations team could be part of project planning meetings and provide their (non-functional) requirements that is tracked and tested as part of the release process. This ensures a more robust product.

  
![Second Way](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/second%2520way.png)

## The Third Way

The Third Way focuses on creating a culture of continual learning and experimentation.(_Source: DevOps handbook_) 

![The Third Way](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/The%2520Third%2520Way.png)
 
The Third Way is influenced by the concepts of Learning Organization, Kaizen, Improvement Kata, blameless postmortems and a lot of ideas. Let us explore a few of them.

### Learning Organization

The concept of a Learning Organization / Organizational Learning is quite old. It was brought into focus when the American manufacturing companies were trying to learn and compete against the Japanese organizations. One of the better definitions of a __Learning Organization__ was given by Prof. Garvin an [Harvard Business Review article](https://hbr.org/1993/07/building-a-learning-organization).

>A learning organization is an organization skilled at creating, acquiring, and transferring knowledge, and at modifying its behavior to reflect new knowledge and insights.

Peter Senge explained the different aspects of a learning organization using [5 aspects](http://www.thechangeforum.com/Learning_Disciplines.htm).

![5 disciplines of learning organization](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://www.solsweden.org/sol/wp-content/uploads/2017/04/the-five-disciplines-senger.jpeg)

In the context of DevOps, it means that the Value Stream of an organization is continuously adopting to the needs of the customer and changing based on the experiences, the failures and potential optimizations.


### Improvement Kata

In a DevOps organization, improvement is being necessary all the time. Improvements happen in the process, tooling, requirement gathering and so on. When an organization wants to embark on the DevOps transformation, they typically use the concept of Improvement kata to target one aspect of the organization and then transform it by using the 4 step process.

Improvement Kata is a _Lean_ tool. The idea is to improvements have to be made in a scientific and measurable manner so that the business value is optimized. 
![improvement kata](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://www.lean.org/images/IK%20Sticks.jpg) 


The behavior exhibited by an organization practising these aspects is the concept of __Hypothesis Driven Developement__. In such a model, every requirement is actually considered as a hypothesis that may or may not be proven to be true. If it is not true, the team analyzes and moves on. If not, the team analyzes for the success and builds further hypothesis to make it more successful.

![Hypothesis driven development](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://insights-images.thoughtworks.com/HDD_StoryCard_10a9a864fa5f5db4bbaea5bb39dddf60.jpg)

To hear more about this concept, watch this excellend video from _DevOps Summit 2017 SFO_ about the [The Yin and Yang of Speed and Control ](https://www.youtube.com/watch?v=-Rq-fuiKNCU)


### Blameless Postmortem

I guess the best way this has been described is the [Google's SRE Book](https://landing.google.com/sre/book/chapters/postmortem-culture.html) explains it.
>The cost of failure is education.

In the context of DevOps, blameless postmortems are a form of learning organization behavior. It is both the process of knowledge management process where the root cause is explored and document and a process improvement where the underlying cause maybe fixed so that the issue does not re-occur.
 

## Beyond DevOps

DevOps as a term was coined to primarily show that two teams that typically don't collaborate can actually work together. Once organizations have started to see the benefits, DevOps movement is now growing into partnership with other organizations as well. For example, here are a few of the common movements:

* __DevSecOps__: The purpose and intent of _DevSecOps_ is to build on the mindset that _"everyone is responsible for security"_ with the goal of safely distributing security decisions at speed and scale to those who hold the highest level of context without sacrificing the safety required. (Source: [DevSecOps blog post](http://www.devsecops.org/blog/2015/2/15/what-is-devsecops))
* __RuggedDevOps__: Rugged DevOps brings the lean thinking and manufacturing work of W. Edwards Deming that DevOps espouses to "ruggedizing" software. In the context of security, this means re-examining the supply chain of software you use to build your products on top of and working to build in security instead of trying to tack it on at the end in a last-ditch security review. (Source: [Want rugged DevOps? Team up your release and security engineers](https://techbeacon.com/want-rugged-devops-team-your-release-security-engineers))
* DevOps with auditing and legal teams: This is of interest to regulated industries like banking. The idea is that the auditing functionality that can be automated is built into the pipeline. Audit trails and logging are implemented as a frame-work so that the necessary processes and artifacts for audits are baked in.

So the idea of cross-functional teams is growing and the DevOps movement will evolve to encompass more teams as organizations see more success through a rapid innovation cycle that this movement can offer.

This is my idea of giving back to community on the stuff I learnt about DevOps this year. Hope you find it useful!

 
