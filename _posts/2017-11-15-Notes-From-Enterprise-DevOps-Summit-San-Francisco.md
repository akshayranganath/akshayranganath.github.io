---
layout: post
title: Notes from Enterprise DevOps Summit 2017 - San Francisco
comment: true
description: I was privileged to be sponsored by Akamai to attend the Enterprise DevOps Summit in San Francisco. Here are the notes from the sessions I attended.
image: https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/DOES2017SFO.png
tags: [devops, conferences, san francisco]
---

I was privileged to be sponsored by Akamai to attend the Enterprise DevOps Summit in San Francisco. Here are the notes from the sessions I attended. 

![DOES 2017 SFO](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/DOES2017SFO.png)

All the resources for the conferences were already shared. Here are the links:

- [Presentations on Github](https://github.com/devopsenterprise/2017-San-Francisco)
- [Presentations on DropBox](https://bit.ly/DOES17SFOslides)
- [Videos on Youtube](https://www.youtube.com/channel/UCkAQCw5_sIZmj2IkSrNy00A/feed)
 

# Day 1: 11/13/2017

## Keynotes

## More Culture, More Engineering, Less Duct Tape

Tranformation methodology is very similar to _Improvment Kata_

## Augmenting the Org for DevOps

- significant outage in 2015. Driver and accelerator for DevOps movement
- application had over 200 hops on the internal network for a single interaction - this was the application that had to move to cloud

Methodology: Monolith to 3 tier app, re-skilling org to Agile processes

Critical Success factors:
- get CXX support
- metrics based
- changing team structured from contractors to employees => end to end engg rather than narrow focus.

Manual testing was the primary bottleneck (20 hrs). Automation reduced it to 12 mins.

Automated regression testing
- grass roots bottom-up approach
- know how to pitch upwards (eg: talk about reduced lead times instead of no of deploys a week)

**Containergeddon** - everything is moving to containers. 

Used [circuit breakers](https://martinfowler.com/bliki/CircuitBreaker.html) and [Netflix hysterix](https://github.com/Netflix/Hystrix) code

DevOps value:
During an outage, 10 UI changes were released in 3 days. Even the CEO made statements on the success of DevOps movement.

 
## Using DevOps to Build Your Learning Organization
[@stevemayner](https://twitter.com/stevemayner)

- Columbia Sportswear - Family owned business. 
- DevOps movement was implemented without a CXX sponsor / support. 
- DevOps born out of the need to stay relevant and to "do the right thing"

Challenge: Microsoft shop with vendor lock-in. Very UI driven and lack of automation.

> You are either building a learning organization or losing to someone who is. - _Andrey Clay Shaffer_

_Be -> Know -> Do_ model of leadership

- Version control was a big game changer
- Go for small wins using the Plan-Do-Check-Act (PDCA) model.

Referenced a velocity talk about Ops in one of the roles:
- rockstars
- builders
- janitors

[Watch this](https://www.youtube.com/watch?v=posb7CzWSFc)

_"Weekly retrospective"_ added a huge value and gave a lot of insight on how to improve from grass-roots.

_ChatOps_ - game changer

**Anti-pattern** to most others: If some task is not common, then automate it. Since it is not repeated often, potential to make an error is high.

## Transformational Leadership and DevOps - Beyond the Research

Cultural change is the hardest change. Success rate of just 19%. But, ability to change is the core competency of organizations.

Why do transformations fail?
Confusion -> Frustration -> Anxiety -> Fear (now people are at the lowest tier of Maslow's pyramid) -> Resistance

![Transformation Leadership model](https://techbeacon.com/sites/default/files/styles/inline_image/public/maynerfigure_0.png?itok=E0nRDj1l)

Books referenced:
- The Startup Way
- Turn the ship around

Middle managers are the ones most impacted by change. However, 
- They know the processes, 
- have the network and 
- can point to places where skeletons are buried.
This is very important in transformation so that mistakes aren't repeated.


## Breakout sessions

### What Does it Mean to Lead IT?
**[Mark Schwartz](https://twitter.com/schwartz_cio?lang=en)**

Historically, IT department was an "add-on". Business went on fine w/o IT. Streotypes created for IT:
- uninterested in business
- don't care about timelines
- can't even speak in English (as in can't speak in terms understood by others)

So, IT had to be provided with exact requirements. IT had to respond with goals, timelines and budget. Business would control IT and extract value. IT was never considered an integral part of the org. ==> Waterfall model.

"IT's" customer is business mentality. As though, IT did not contribute anything to the actual product. 

CIO's office created to:
- talk English to business
- come up with measurable goals, even if Biz did not understand what the goals meant
- enforce timelines and budget

No other department in the org is "controlled". They have freedom to operate and do the necessary things to help business succeed. Not IT.

Even with _Agile_ and _DevOps_, the attitude hasn't changed much. It is about business controlling IT. 

#### New model
Instead of requirements, provide high level objectives. Let IT be a part of the strategy discussion. Since teams are already multi-functional, no need to control.

Role of the leadership: 
- provide clear objectives
- remove impediments
- monitor the progress towards business objectives


### Continuous Chaos in DevOps

Build chaos engineering tools as a foundational service. Every application has to "subscribe" to the tools and specify the components. This will identify the right failure services to use. "Failure as a service" model.

### DevOps Handboook Experiments in Accelerating Delivery

Lessons implemented from the DevOps hand book:
![DevOps Handbook lessons](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/DevOps%2520Handbook%2520lessons.png)

Instead of "presenting" to management, rely on "Show and Tell". It provides better grasp to management.

One of main benefits of DevOps - automation testing reduced the lead time. 

### Architecting Your App And Your Pipeline for Continuous Delivery - 10 DOs for Successful DevOps
[@anders_wallgren](https://twitter.com/anders_wallgren)

One of the best predictors of high performing organizations - "how much do they fear deployments"?

Another one: Binary artifact repo - indicates maturity for devOps success.

Very technical deck. Extremely useful for development teams / architects. Speaks about software patterns to build code and for the pipelines.

Some good resources from [microservices.io](https://microservices.io)

Follow the [@honest_update](https://twitter.com/honest_update?lang=en) for some fun status messages.


## Day 2: 11/14/2017

### Keynotes

#### Better Governance - Banking on Continuous Delivery

Goals for 2017 and beyond:
- slayTheMonolith
- noFearRelease
- youBuildItYouOwnIt

##### NoFearRelease
Typical fears are:
1. fear of speed
2. fear of breakdown
3. fear of being out of control
4. fear of being non-compliant

_Compliance_ is a bad word. _Governance_ is better. It implies _awareness and ownership of risk_.

3 lines of defense:
- 1st line: Who owns the risk?
- 2nd line: policies and processes
- 3rd line: independent assurance 

Minimum set of controls:
- Two sets of eyes (peer review
- Least privilege
- Unauthorized change monitoring

Being bank, the question from auditors were: How to assure that the pipeline itself is not tampered, the process is not broken or the pre-commit checks were not relaxed for a driven deployment.

In terms of deployments, Kubernetes / containers provide immutable servers. And no human access is provided to production systems.

Opensource tools: [CapitalOne](https://github.com/capitalone/)


#### The Making of Amazon Prime Now

![amazon virtuous cycle](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/amazon-maturity-model.png)

_i had to work so could not focus much_

#### Making Digital Magic

Digital transformation involved:
- Technology
- Leadership 
- Community
_very similar to the People-Process-Technology model in Agile_

Mesos - what is it?

Technology for _Movies Anywhere_
- cloud native
- ops deeply embedded into design
- Kubernetes with Kops
- Terraform
- helm, vault
- Lambda functions used for monitoring
- PagerDuty, NewRelic and Data dog for monitoring

Reference to book - [What Got You Here Won’t Get You There](https://www.amazon.com/What-Got-Here-Wont-There-ebook/dp/B000Q9J128/ref=pd_sim_351_1?_encoding=UTF8&psc=1&refRID=9DE6NZ7X0C0RDE4N5214)

### Breakouts

#### Intel's Journey to Build Quality In: How QA and Test Automation Drive DevOps Transformation

Initial model _push and pray_. 85% of code was not covered.

Parameterization of tests and using environment variables made a big difference in the usabilty of tests.

On-demand is the key. Environment needs to be spun up and down with no tickets and wait times.

#### Cloud Native Architectures
**[Cornelia Davis](https://twitter.com/cdavisafc))**

Just download the presentation. It is simply too good. Try to get the book as well.
[Slides](https://www.slideshare.net/cdavisafc/cloud-native-architectures-for-devops)


#### Starting and Scaling DevOps in the Enterprise

Very informative and down to earth presentation on DevOps transformation. Download slides for future use.

CAB is the "change resistance board"!

Today's approach to DevOps:
> I am a millenial. My mom still cleans my room and ops will clean up after me.

In today's deployments, more time is taken to setup the environment and run the checks than the actual coding.

Repeated manual tests: (3 Ms )

- waste of time (Muda)
- inconsitancy (Mura)
- burden on testing team (Muri)  

Book - Jeff Morgan on testing

Action: Sign up for newsletter and get the book free. 

#### DevOps: From Analyst Inquiry to Organizational Action

**Trends** 

- Last year questions were about - "What is DevOps"? 
- This year, DevOps has reached escape velocity. 
- Trends for this year:
    - Dev and Ops are now working together.
    - Security needs to fit in.
    - Data / database is still outside of the scope. This will increasingly become the bottleneck and requires newer architectures.
- In last 90 days, Business is coming back and saying that deployment are too fast. Net result: Deployment frequency is being re-defined as "on demand deployments"
- **Technologies**: Gitlab, Jenkins, Kubernetes and Jira - 80% of organizations use them. However, what's missing is end-to-end tool chains.
- Insurance, Banking and FinTech - DevOps is _smoking hot_. 

Again - download slide for future use.
   
#### DevSecOps: It's Not Me or You, It's WE!

Panel discussion..

Security is traditionally "command and control". Sec teams tend to say - "here's the code / process. Just follow it." No longer the right approach.

Security companies still stuck in last century of request/response or client/server model.

Follow NIST security framework instead of ISO. ISO is too burdensome.

_Approach for security_:

- what security incidents were handled
- what security incidents were failures
- Pen Test and take action items and fix the bugs.

**Closing tips**:

1. Break silos between security and devops teams
2. Practice often: War games, incident response
3. Security should be "built-in". It should be part of the product design and part of the build pipeline. Security team needs to understand the business objectives.
4. Know your bill of materials, i.e., Configuration Items should be clearly known. This will help address issues like struts vulnerability.

Finally, aim for "security as code". Although not currently a feasible solution, this is the end goal.

#### The Key to High Performance: What Data Says
[@nicolefv](https://twitter.com/nicolefv)

All about the **State of DevOps** reports. Trends:
- 2014: DevOps Works!
- 2015: IT goes lean
- 2016: Shift left
- 2017: DevOps works for all kinds of organizations.

Other notes:
- Measure **Cycle time**: code commit to code deployment.
- Throughput and stability are possible without any trade offs.
- Maturity models don't work in this industry. "What is a mature org?" - metrics itself keep changing very fst.
- Architecture matters - technology stack doesn't
- Westrum's organizational model and transformational leadership - very good predictors of DevOps successes. 

Read the HBR article by _Besson_ on _[Real Reason Superstar firms are racing ahead](https://hbr.org/2017/10/the-real-reason-superstar-firms-are-pulling-ahead)_.

#### Coping With Complexity: Resilience Engineering Research In DevOps

Action item: Download and share the [stellar report](http://stella.report/).

> incidents of yesterday inform and the architecture and rule of tomorrow.

![incidents as investment](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/allspaw-incidents.png)

Check out [adaptivecapatictylabs.com](https://adaptivecapatictylabs.com/)

Watch the video again. It is amazing! 

## Day 3: 11/15/2017

### Keynotes

#### The human factor: Inspiring the pursuit of success and averting drift into failure

Session by [Dr Sidney Dekker](http://sidneydekker.com/)

- the company / airline that reports the most incidents has the least number of catastrophic accidents ==> open culture and less fear of being honest
- sweet spot of honesty exists for organizations.. if you stress beyond it, catastrophic results occur
- award for speaking up is generally unclear and delayed. award for _not_ speaking up is generally immediate
 
_What's difference between organizations that screw up and those that don't screw up?_
It is the presence of positive capacities and not in the absence of negative capacities. 
_This follows John Allspaw's talk. When trying to find the root cause, analyze why the incident had not occurred more times - what causes the lack of incidents._

Understand how things go right to figure out processes on when things go wrong.

![Dekeer - focus on what's right](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/dekker-focus-on-right.png)

#### Fear does not exist in the dojo - a devops journey with a competitive twist

_DoJo_ - creating an internal training environment.
Process cross-pollinated to Verizon from Target.

6 weeks workshop:
- 2 day Sprint
- 12 sprints
- Clear outcomes of the effort
- Up skilling of employees to new ways of working, esp in global org
Note to self: Can our consulting work-shop be modeled on this?

Internal DevOpsDays - a very good way to engage, encourage and learn.

![Internal devops conference](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/devops-internal-conference.png)
Gamification of DevOps and get teams excited.


#### There is No Finish Line

No "devOps" team - everyone has to adopt it. 

![nike transformation](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/nike-transformation.png)

### Breakouts

#### The Case for Value Stream Architecture

Competition is not across the board. It can be at specific value stream. Case point - 
![Unbundling of banks](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://thefinancialbrand.com/wp-content/uploads/2015/04/Unbundling-of-a-bank-V2.png)

DevOps is big and there are a lot of startups
![DevOps startups](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://image.slidesharecdn.com/devopsandprogrammaticinfrastructure-160919103700/95/devops-and-programmatic-infrastructure-37-638.jpg?cb=1475855439)

DevOps / Lean tries to take the analogy of assembly line. Although accurate to some extent, it does not capture the complexities of software developement:
- Car assembly lines can stay stable for about a year. Software keeps changing.
- Car manufacturing can follow linear steps. Software release is not all that linear.
- Software value stream looks more like an airline network with some hubs seeing more dense connections than others
- Replace airports by tools and process - this is a more accurate representation

Waterfall and very narrowly focused DevOps movement is trying to force linearity where linearity doesn't really exist.

Sample work-flow at Nationwide:
![CI visibility at Nationwide](https://res.cloudinary.com/akshayranganath/image/fetch/f_auto,q_auto/https://image.slidesharecdn.com/16decibmenlightenmentseriescompressed-161219154436/95/how-nationwide-and-tasktop-achieved-continuous-visibility-across-the-devops-lifecycle-7-638.jpg?cb=1482162468)

Download _Value stream architecture_ eBook

Download book - [Thinking Environments](https://itrevolution.com/book/thinking-environments/)


#### Enterprise DevOps and Unicorns

Fear / change approval is a mind killer.

#### Process-as-Code: Real-World Examples that Scale

Treat your automation process as a product / software artifact. So it goes through rigorous testing, validation, enhacements and bug fixes.

Follow-up:
- what is groovy
- what is Domain Specific Language (DSL)
- what is vagrant


#### Baking Security into your Pipeline: Start Here

Embed security experts in SCRUM meetings. 

Hacked pipeline is very scary
- when plugins are used in Jenkins, who checks for vulnerabilities in them?

Credentials should be in [vault](https://www.vaultproject.io/) and not hard-coded or in plain-text configuration files.

Work on reducing _blast radius_ by reducing the impact of a compromise.

What is SonarQube?

*80% of official (latest) docker images had at least 1 severe vulnerability*

Configuration item + auto patch

Keep testing your process. Process as code means treat it as:
- version control
- test
- log
- audit trail


#### Microservices for the Enterprise: Myths vs. Reality

This session seemed to be put together without any real agenda or focus. Very boring :-(

#### Convergence of Safety Culture and Lean: Lessons from the Leaders

_Panel Discussion_ between Gene Kim, Dr Sidney Dekker, Dr Steven Spear and Dr Richard Cook.

Leaders -> enable team. Not control it. Leaders need to say:
- I don't know
- I need help
If this is not seen by org, then learning culture will never take effect.

Most important learning from Toyota Production System - Andon Chord ==> recognize that the known processes is not able to cope up with current work processes.

##### Guidelines to Community
- Tell stories, esp when things go wrong. It helps sensitize community on what can go wrong.
- DevOps is about building community of users who work on devOps. Mentor others.
- Share stores of failures and near misses.. _Success comes from experience and experience comes from failures_.
- You are all experts and you have moral responsibility to share it with the community.
- Identify yourself as one who practices DevOps instead of identifying as someone working for a particular role in a company
- Share stories of uncertainty


### Closing Keynotes

#### Data and DevOps: Breaking Down the Silos
**[Elisabeth Hendrickson](https://twitter.com/testobsessed)

Data is still in silos.
1. DBA
2. Data Engineer
3. Data Scientist

Read up on [12 factor app](https://12factor.net/)

Cloud Native architecture for data.
![cloud native architecture](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/cloud-native-architecture.png)


#### The Yin and Yang of Speed and Control
**[Jon Smart](https://twitter.com/jonsmart)

Read up on [Cynefin framework](https://en.wikipedia.org/wiki/Cynefin_framework)

Lessons at Barclays bank:
1. Don't scale work. Create smaller teams and batches first.
2. Don't impose an Agile transformation. Focus on outcomes - start with why

>It is easier to act your way to a new way of thinking rather than think your way to a new way of acting.

>Impediments is not in the path but impediments is the path.

Every requirement should follow a Hypothesis Drive Development by [@barryoreilly](https://twitter.com/barryoreilly)
![Hypothesis driven investment](https://insights-images.thoughtworks.com/HDD_StoryCard_10a9a864fa5f5db4bbaea5bb39dddf60.jpg)


### Books referenced

- The Startup Way
- Turn the ship around
- What Got You Here Won’t Get You There
- Cucumber and Cheese - A Tester's Workshop
- [Cloud Native](https://www.manning.com/books/cloud-native)

### Key trends

1. DevOps is in full-swing accross industries
2. Cultural transformation is the hardest but, it is necessary. 
3. Focus is shifting from plain "deployment frequency" to being ready for "on-demand" deployments.
4. Security, esp security of code and the pipeline is gaining attention.
5. Maturity in-terms of expanding the DevOps to mean more teams like audit, marketing, finance and legal teams
6. Data is the hardest problem to move to cloud based architecture. This is going be to an ongoing item for investigation.