---
layout: post
title: The Cost of AI Productivity
published: false
comment: true
description: Three doubts about the claim that AI frees people for higher-value work. Saved time often is not redeployed, constant focus may crowd out new ideas, and teams lose a single authoritative record.
image: /images/blog/ai-productivity-hero.jpg
tags: ai-ml, productivity, organizations, thinking
---
>Disclaimer: I work for Glean as a Solution Architect. Opinions here are mine.

Everyone says the same thing about AI at work. The tools will make you more productive, and the time you save will free you up for the work that actually matters.

![ai productivity boost](/images/blog/ai-productivity-hero.jpg)

I believe the first half of that, at least some of the time. Drafts get written faster. Search gets shorter. A lot of the small mechanical tasks that used to fill a day can now be handed to a model. The part I keep turning over is what happens after the minute is saved.

If an hour comes off your calendar, where does it go? Do you spend it on something more valuable, or does it fill itself? And if every task that remains is supposed to be high value, what happens to the idle stretches where ideas used to show up? I have three worries. None of them say stop using the tools. They say the productivity story is missing the cost.

![Three costs: saved time that fills itself, no idle stretch for new ideas, and many versions of the same fact](/images/blog/ai-productivity-three-costs.svg)

## Saved time is not redeployed time

I found this interesting study, ["Shifting Work Patterns with Generative AI"](https://www.nber.org/papers/w33795), where the authors begin with this abstract:

>We present evidence from a field experiment across 66 firms and 7,137 knowledge workers. Workers were randomly selected to access a generative AI tool integrated into applications they already used at work for email, meetings, and writing. In the second half of the 6-month experiment, the 80% of treated workers who used this tool spent two fewer hours on email each week and reduced their time working outside of regular hours. **Apart from these individual time savings, we do not detect shifts in the quantity or composition of workers’ tasks resulting from individual-level AI provision.** (emphasis mine)

Later in the paper, the authors say that the people who actually used the AI tools spent about two fewer hours a week on email, and they worked less outside regular hours.

That is a real saving. The rest of the slogan is harder to find in the data. The researchers did not detect a shift in how much work people did, or in the mix of tasks. Access to the tool changed the edges of the day. On its own, it did not move people onto higher-value work.

Unless an organization has clear design and processes in place to move the workers to a "higher value work", a lot of employees will finish the work faster and fill up rest of the time.

## High-value work can crowd out new ideas

The second worry is harder to measure, and I want to be plain about that. I have not seen a study that tracks the rate of new ideas inside companies as they adopt AI. I guess this is a gut feel based on how I work.

A lot of ideas arrive while you are doing something else. Filling in a timesheet. Driving to the office. Standing in the shower. Your hands are busy and your attention is only half claimed. The rest of your mind is free to put two things next to each other that you would never have paired on purpose. Graham Wallas described this a century ago, in *The Art of Thought*, as incubation. 

![art of thought book](/images/blog/wallas_4stages.jpg)

Source: [https://www3.cs.stonybrook.edu/~tony/ui/lectures/creativity.htm](https://www3.cs.stonybrook.edu/~tony/ui/lectures/creativity.htm)

You prepare, by learning the problem. Then you stop working on it directly. If an idea comes, it comes in that gap. He called it incubation. The next step is checking whether the idea is any good and finally building/creating a solution. The point where ideas originate - the incubation is an unconscious or semi-conscious state of mind.  Everything else is done very consciously.

That is the part that worries me about "focus on high-value work."

If the timesheet is gone, the status email writes itself, and the commute is a call, then every block on the calendar wants your full attention. If each activity demands full attention and conscious action, there is no time remaining for incubation. Having a calendar block as "Focus Time" or "Incubation time" won't work. We all know that markeing a calendar to "innvoate" will not cause us to actually innovate. So what can we do?

Perhaps we will need to build daily activity blocks that will ease the cognitive load. Maybe organizations can have tasks like meditation breaks, or voluntarily cutting back on automation to force periods of calm can be helpful.

![person meditating](/images/blog/meditation.jpg)

## Every team gets its own version of the truth

There is a third issue - and this is related to knowledge management.

It is getting harder to find the authoritative version of anything. When all your data sources are connected to an LLM, there is less incentive to put in effort to create and build a meaningful knowledge management system. Whenever someone needs enterprise information, they can just fire up their LLM tool and it can syntentize the latest data.

Such a system presents two primary issues:

* There is no authoritative or _golden_ document for anything: Let's say I pull up release notes for some product/feature. Depending on my access levels in enterprise, I may not even see certain repos. So my LLM never reads these pull requests. The document it syntesizes for me could be vastly different than the ground truth.
* No unified process: Suppose an organization leans in on agents. Everyone is incentivized to build their own agents. Even when a formal "official" and well-supported agent is rolled out, users may not want to use it. This is similar to the [not invented here](https://en.wikipedia.org/wiki/Not_invented_here) syndrome. As a result, effort is replicated across org, cycles are wasted in maintaining systems that has very low or no usage.

![not invented here cartoon](/images/blog/not-invented-here.jpg)

The end result of all this is a general lack of trust with the data. Let's say an escalation occurs. The useful first question is whether the deployment is actually broken. Instead, the question that gets asked is which tool produced the diagnosis. Engineering does not trust an output that came from a prompt they did not write. Services does not trust a diagnosis from a tool that missed the customer's context. Both sides can generate another answer in a minute, which makes the disagreement cheaper to continue and harder to end. In fact, Harvard coined a term for such AI generated output: [**Workslop**](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity). It is defined as:

>AI generated work content that masquerades as good work, but lacks the substance to meaningfully advance a given task.

Unless organizations are able to rein-in the "free-for-all" agentic building and mandate the use of certain set of tools, we will not have a shared understanding within the org and this will hamper smooth handling of escalations and bug fixes.


## What I would want in place

I do not have a framework for this. I have three practices I would want before I believed an AI productivity number.

**Measure what the saved hour became.** A tool that reports minutes saved has done the easy half. The hard half is a person who can point at the work that exists now and did not exist before. If they cannot, the hour was absorbed. That is worth knowing. It is a bad thing to celebrate.

**Leave some work deliberately undemanding.** Incubation is part of the job. A calendar full of high-value decisions has no room for the association those decisions depend on. I would rather protect a walk, a quiet pass over raw notes, or even a boring task, than assume the next idea will show up inside a prompt.

**Name the canonical artifact, and give it an owner.** Agents can draft release notes, incident summaries, and troubleshooting steps. The draft should point back to a document a person owns, and that document is the one other teams argue from. An ad hoc agent is allowed. Give it an owner and a date. On that date it is promoted into the official path, or it is turned off. When an escalation starts, settle the fact before arguing about the tool.

Productivity can still go up. I expect it will, on a lot of tasks. The cost shows up in what we stop doing once it does: assigning the saved time, leaving room for a thought to finish itself, and keeping one version of the record that the rest of the company can use.

## Sources

- [Shifting Work Patterns with Generative AI](https://www.nber.org/papers/w33795), Dillon, Jaffe, Immorlica, and Stanton, NBER Working Paper 33795
- [AI-Generated "Workslop" Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), Niederhoffer, Kellerman, Lee, Liebscher, Rapuano, and Hancock, Harvard Business Review, September 2025
