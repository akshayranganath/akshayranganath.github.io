---
layout: post
title: How to learn &amp; adapt DevOps? 
comment: true
description: Moving from traditional development models to DevOps is a significant transformation. I share my experience on this journey and the resources I used.
image: /images/cocoon.jpg
tags: [devops, automation, automated unit test, git, git hooks, webhooks, transformation]
redirect_from:
  - /how-to-learn-and-adopt-to-devops/
---

DevOps is the latest buzzword but, it is also a philosophy that has a potential to change the way organizations build product and services. Being in a professional services role associated with CDN, I was far removed from the actual development teams and had lost touch with my coding background. Over the last 6-8 months, I have been working on to learn about the concepts of this new methodology and felt that there are may be people out there embarking on a similar journey. If you are one of them, hope my approach can give some ideas. Of course, I am still learning - so if you have any thoughts, please let me know!

![transformation / metamorphosis](/images/cocoon.jpg)

## tl;dr;
If you want to quickly get an idea on the journey, here's my path to DevOps:

- Read the books *Phoenix Project* and *The Goal*
- Take an introductory course on DevOps. There are a few of them from Linux Academy, Linda.com, Udacity and Coursera.
- Read the book DevOps Handbook to get a firm foundation
- Build a simple code pipeline with Github. This involves:
	- picking up a programming language, 
 	- working with git
 	- writing unit tests
 	- adding git hooks and github webhooks

Basically here's the mapping:

- DevOps what: Introductory course from Lynda.com, Linux Academy, Udacity or Coursera
- DevOps why: Read Phoenix Project and the Goal
- DevOps how: DevOps hand book, GitHub coding and creating web hooks

## In the beginning..

![sunrise - beginning](/images/sunrise.jpg)

Before starting on the DevOps journey, let me outline my experience. I used to be a Java/J2EE developer and my last project in this avatar was building a solution over the [liferay](https://www.liferay.com/) portal server. We had a team of 20 and the process was pure waterfall/iterative. I had no background in the world of agile and never attended the scrum sessions, nor understood the user stories. It was like I had missed out on a whole era of software programming.

In my role, I mainly work on consulting with our customers on various aspects of web performance. Since I worked on Akamai solutions and guidance to customers, I was far removed from the world of actual coding for almost 8 years. About 1.5 years ago, a slow trickle of questions and ideas started to crop up about this devops thing. Over the last few months, it was nearly impossible to escape hearing about the miracles of this elixir. That is when I decided to take a plunge and start to learn about the changes happening in the landscape of development and operations.

## Laying the Foundations

As with most people, I had heard a lot about the cloud providers - Amazon AWS, Google Cloud Services and Azure coupled with names like ghithub, chef, puppet and so on. I had assumed all of these amorphous stuff fit into a neat thing that magically transformed into DevOps. And I knew this understanding was totally wrong.


So the first thing I realized is I needed a solid footing and gain an understanding of the concepts. Our company had a tie-up with Linux Academy and I found their course title **[DevOps Essentials](https://linuxacademy.com/devops/training/course/name/devops-essentials)** to be very useful. It gave me a gentle introduction on what is devOps as a technical practice and how the commonly heard tools fit in. 

### Theory on DevOps
Now that I had a rough idea on the **what** of DevOps, I wanted to get the reason on **why** this had become so important. As I was searching around, I found the book **[The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262509)**. It introduced the concept of the pains that a typically organization feels in delivering software and walks through the transformation as a high paced novel. I am still a big fan of this book and would highly suggest this for anyone coming from an IT Service background. I did collect a [list of quotes](https://akshayranganath.github.io/quotes-from-book-the-phoenix-project/) from this book. 

Within the *Phoenix Project* book, there were a lot of references to an earlier book called **[The Goal](https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951/ref=sr_1_1?ie=UTF8&qid=1500502236&sr=8-1&keywords=the+goal)**. This was a book written in the manufacturing transformation era of the 80s and spoke about how to optimize the assembly line. Since it was referenced so heavily, I decided to pick this up - and I was amazed. The parallels between code development and assembly line manufacturing was spot on. It was one of those moments when you feel like "I could have thought of that!" And yet, it had taken over 20 years of painful lessons in bad software management to arrive at this wisdom. My point is: If you'd like to understand the fundamentals of devops better, you should read this book and learn about the [theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints). 

After reading these 2 books, I realized that there were so many things that I was doing in my previous life that resonated with the hard-ships faced by the protogonists in the novels. We used to have constant delays, missed features, a Javascript pop-up saying "Hi" that made it to production and a lot of other horrendous code management and people management issues. We seemed to have no control. And yet, we would fill out a load of documents and be certified at the highest levels of Capability Maturity Model (CMM) ratings! The cynic in me had finally found some answers!

## Getting involved..

![hands on ](/images/handson.jpg)

The next step was to get a more in-depth view and learn the **how** of devops. Actually, this step gaining more understanding of the _what_ and _why_ as well. For this purpose, I would highly recommend the book **[The DevOps Handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/ref=pd_lpo_sbs_14_t_0/140-1510501-0325548?_encoding=UTF8&psc=1&refRID=J9PM2SX07X936SY6DHJ9)**. It explains in a very clear manner on how organizations can approach the devops transformation. The authors cover various aspects from culture, the tooling and the process necessary to make this transformation. I have published a [collection of quotes from DevOps handbook](https://akshayranganath.github.io/quotes-from-devops-handbook/) as well.

Apart from the theory, I felt that I needed to understand the various things tools and techniques necessary that leads up to a devOps organization.

### Gaining Hands-On Experience
To build a more hands-on experience, I decided to actually build some software and adopt the methods being taught by the books. So I used the following things:

| Purpose | Tool / Technique | Comments |
| ------- | ---------------- | -------- |
| Programming | Python | I was already familiar with python and it just made sense to use it. I had lost touch with Java over the past decade. |
| Environment creation | Virtualenv | [Creating virtual environments](https://akshayranganath.github.io/How-to-create-dev-environment-for-python/) is essential to provide the exact same foundation for code development. So I had to learn the use of virtual environment. Using virtual environment and the command ```pip freeze```, I was able to generate the dependency list for my project. Once this became part of github project, my code could be easily deployed and worked with no surprises. | 
| Code repository | Github / BitBucket | The holy grail of most DevOps initiatives is that everything must be an artifact that is tracked in a repository. This includes the project source code and the code necessary to build environments, the test scripts and the various design documents. <br />I used Github since it is most famous and most common. For all my private coding efforts, I use BitBucket as they offer a private repository for free users. |
| Automated testing | [python unittest](https://docs.python.org/2/library/unittest.html) | Automation testing is an indispensable part of the DevOps transformation. So I had to learn how to write unit tests using a simple frame-work that is supported by the platform. For my projects, [unittest](https://docs.python.org/2/library/unittest.html) is sufficient. <br />Theory on DevOps recommends more robust testing like [Acceptance Test Driven Development / Behavioral Driven Development](https://www.agilealliance.org/glossary/atdd/). Since I am just picking up, this was an overkill and I skipped it! |
| Build automation | Bitbucket pipeline | To get a feel for the concept of build automation, I enabled the build pipeline on BitBucket. Basically, it takes my ```requirements.txt``` file and installs all the libraries defined for a virtual python environment. I also defined it to run my automation tests once the environment was created. <br />This process ensured that was able to check <ul><li>Environment creation was successful </li><li>Checked in code did not break any pre-defined tests</li></ul>. |
| Build hardening | [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) | As I was still learning, I experimented with the use of ```pre-commit`` hook within git. This would ensure that a pre-defined set of tests would run on my local machine *before* the code was committed to be checked in. I wish this had existed long ago and it would have saved so many late night effort on code cleanup! |

## Standing on shoulder of giants..

![standing on shoulders](/images/standing_on_shoulders.jpg)

My learning effort was based on the amazing work being done in this field by so many authors, writes, bloggers and practitioners. I wanted call out a few of them that you could follow as well:

- **[Jez Humble](https://twitter.com/jezhumble):** Author of the book and maintainer of eponymous website [Continuous Delivery](https://continuousdelivery.com/), he does post interesting nuggets on twitter.
- **[Gene Kim](https://twitter.com/RealGeneKim)**: Co-author of the books Phoenix Project and DevOps Handbook, he is a very good person to follow on twitter.
- **[Martin Fowler](https://twitter.com/martinfowler)**: A veteran at ThoughtWorks, his blog at [MartinFowler.com](https://www.martinfowler.com/) has very good resources and concise definition on the concepts of DevOps. 
- **[DevOps.com](https://devops.com/)**: I recently started to follow the blogs from this website. They are quite well written and a good resource to glance through.

I am still collating good resources. If you have any suggestions, please let me know!

## In the end..
At the culmination of my effort, I was able to put out a strategy for adopting DevOps with Akamai. If you are interested, head over to my post [Planning a DevOps Strategy](https://developer.akamai.com/blog/2017/07/11/planning-devops-strategy/).

That's it for this edition. I hope to take this forward from my learning over the next few months. Hope this has been useful.