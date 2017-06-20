---
layout: post
title: Quotes from book - The Phoenix Project
comment: true
description: The Phoenix Project book is a good introduction to the approach of moving from traditional ops to devOps. This is my favorite set of devops quotes from the book.
---

Over last 2 weeks, I read the book **The Phoenix Project: A Novel about IT, devops and helping business win**. It was an immensely readable book that explains the need, the role and concepts of DevOps but as a novel. It is a thriller of a story and a wonderful way to get introduced to the concept of DevOps. I'd highly recommend this book.

![Phoneix project book cover](/images/phoenix_project_cover.jpg)

I took some notes and here are some of my favorite quotes from the book:

__.. The plot is simple:__ First, you take an urgent date-driven project, where the shipment date cannot be delayed because of external commitments made to Wall Street or customers. Then you add a bunch of developers who use up all the time in the schedule, leaving no time for testing or operations deployment. And because no one is willing to slip the deployment date, everyone after Development has to take outrageous and unacceptable shortcuts to hit the date.

I always liked that phrase in Saving Private Ryan: “There’s a chain of command: gripes go up, not down.”

“Your job as VP of IT Operations is to ensure the fast, predictable, and uninterrupted flow of planned work that delivers value to the business while minimizing the impact and disruption of unplanned work, so you can provide stable, predictable, and secure IT service.”

__The First Way__ helps us understand how to create fast flow of work as it moves from Development into IT Operations, because that’s what’s between the business and the customer. __The Second Way__ shows us how to shorten and amplify feedback loops, so we can fix quality at the source and avoid rework. And the __Third Way__ shows us how to create a culture that simultaneously fosters experimentation, learning from failure, and understanding that repetition and practice are the prerequisites to mastery.

He continues, “What use is it having all these offshore developers building features if we aren’t getting to market any faster? We keep lengthening the deployment intervals, so that we can get more features deployed in each batch.”

4 types of work:

* business projects
* internal projects
* changes & maintenance
* unplanned work

You’ve just described __‘technical debt’__ that is not being paid down. It comes from taking shortcuts, which may make sense in the short-term. But like financial debt, the compounding interest costs grow over time. If an organization doesn’t pay down its technical debt, every calorie in the organization can be spent just paying interest, in the form of unplanned work.

"Unplanned work has another side effect. When you spend all your time firefighting, there’s little time or energy left for planning. When all you do is react, there’s not enough time to do the hard mental work of figuring out whether you can accept new work. So, more projects are crammed onto the plate, with fewer cycles available to each one, which means more bad multitasking, more escalations from poor code, which mean more shortcuts..."

Allspaw taught us that Dev and Ops working together, along with QA and the business, are a super-tribe that can achieve amazing things. They also knew that until code is in production, no value is actually being generated, because it’s merely WIP stuck in the system. He kept reducing the batch size, enabling fast feature flow. In part, he did this by ensuring environments were always available when they were needed. He automated the build and deployment process, recognizing that infrastructure could be treated as code, just like the application that Development ships. That enabled him to create a one-step environment creation and deploy procedure..

__“If you can’t out-experiment and beat your competitors in time to market and agility, you are sunk. Features are always a gamble. If you’re lucky, ten percent will get the desired benefits. So the faster you can get those features to market and test them, the better off you’ll be. Incidentally, you also pay back the business faster for the use of capital, which means the business starts making money faster, too."__

“In ten years, I’m certain every COO worth their salt will have come from IT. Any COO who doesn’t intimately understand the IT systems that actually run the business is just an empty suit, relying on someone else to do their job.”

“I’ve long believed that to effectively manage IT is not only a critical competency but a significant predictor of company performance,” he explains.

Just how did code deployment become routine? Because developers are constantly getting fast feedback on their work: when they write code, automated unit, acceptance, and integration tests are constantly being run in production-like environments, giving us continual assurance that the code and environment will operate as designed, and that we are always in a deployable state. And when the code is deployed, pervasive production metrics demonstrate to everyone that it is working, and the customer is getting value.

DevOps shows how we optimize the IT value stream, converting business needs into capabilities and services that provide value for our customers.

The term __“devops”__ was originally coined by Patrick Debois and Andrew Shafer in 2008, and it entered common usage in 2009 in the Velocity Conference community with the famous “10+ Deploys Per Day: Dev and Ops Cooperation at Flickr” presentation, given by John Allspaw and Paul Hammond.

DevOps has benefitted tremendously from the work the Agile Community has done, showing how small teams operating with high trust combined with small batch sizes and smaller, more frequent software releases can dramatically increase productivity of Development organizations.

And of course, DevOps extends and builds upon the practices of __“infrastructure as code”__ pioneered by Dr. Mark Burgess, as well as continuous integration and continuous deployment (pioneered by Jez Humble and David Farley), which is a prerequisite to achieving fast deployment flow.

**Myth: DevOps means NoOps**
DevOps is sometimes incorrectly interpreted to be NoOps (i.e., IT Operations is entirely eliminated). However, more precisely, DevOps will often put more responsibility on Development to do code deployments and maintain service levels. This merely means that Development is taking over many of the IT Operations and operations engineering functions.
In order to support fast lead times and enable developer productivity, DevOps does require many IT Operations tasks to become self-service. In other words, instead of Development opening up a work ticket and waiting for IT Operations to complete the work, many of these activities will be automated so that developers can do it themselves (e.g., get a production-like Dev environment, add a feature metric for production telemetry).

The most obvious manifestation of the Toyota Kata is the two-week improvement cycle, in which every work center supervisor must improve something (anything!) every two weeks. To quote Mr. Rother, “The practice of kata is the act of practicing a pattern so it becomes second nature. In its day-to-day management, Toyota teaches a way of working—a kata—that has helped make it so successful over the last six decades.”