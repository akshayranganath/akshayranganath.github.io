---
layout: post
title: Should an AI Bot ever break character?
comment: true
description: AI Chatbots have been created to provide an immersive experience. What happens when it feels too real and may even lead to users harming themselves? Should the bot break character?
image: https://akshayranganath-res.cloudinary.com/image/upload/w_1980,h_1024,c_pad,b_auto:predominant/w_1024,h_530,c_scale,f_auto,q_auto/blog/a%20human%20teenage%20looking%20like%20kid%20chatting%20with%20a%20ChatBot.jpg
tags: ai-ml, gen-ai
---

A few days back, a teenager died so that he could go to a world where his ChatBot companion existed. This jolted us to a question - what happens when AI companionship is so real that you can't seperate it from reality? The details are in an article about [a mother who sued Google and Character.ai](https://www.theverge.com/2024/10/23/24277962/character-ai-google-wrongful-death-lawsuit) as the cause for her teen son's death. In short, the child became addicted to an AI chat. Over time, he developed an understanding this world was unreal and the world he had created with the chatbot was reality. He wanted to escape from this unreal place. This lead to his death.

![human child interacting with a AI bot](https://akshayranganath-res.cloudinary.com/image/upload/w_1980,h_1024,c_pad,b_auto:predominant/w_1024,h_530,c_scale,f_auto,q_auto/blog/a%20human%20teenage%20looking%20like%20kid%20chatting%20with%20a%20ChatBot.jpg)

I have beem mulling over this for the past few days with a deep sense of sadness. Anyone succuming to this sense of real/unreal confusion is bad. A teen who has not even lived his life is doubly so. However, the issue at hand was the behavior of the chatbot from Character.ai - a company started by 2 ex-Googlers who are now back at Google.

## Background on the Chatbot

According to the story, Character.ai builds chatbots that can take on a persona. In this case, it was a character from Game of Thrones. The mother has a bunch of arguments that are similar to complaints against social media use:

* Lack of proper warnings and parental controls
* Lack of proper age-gating for users
* Hard to control usage limits - leading to addiction

However, the one argument that stood out to me was on the issue of the chatbot continuing with the "character". Let's look at that specific issue.

## Bending Reality

The child was "in love" with a character that he had created on the AI-powered platform. This chatbot became his companion and engaged in long conversations. Over time, the kid expressed ideas that were related to self-harm and suicide. Despite such alarming messages, the chatbot never once broke its character. This brings up two primary questions:

* When should an AI agent "break" its character and refer the user to some help?
* Did the company deploying the chatbot do enough to prevent such use? More importantly, could it have done something better?

### Breaking Character

If the chatbot had been programmed to detect alarming usage patterns and had been programmed to break its character, perhaps the child would have realized his error in judgment. In this case, when the child expressed ideas of self-harm, the chatbot tried to help him BUT IN THE FORM OF THE CHARACTER. If it had jolted him out of the error and sent warnings to Character.ai admins or to parents, such an issue could have been prevented. For Star Trek fans - this must remind you of the ["Holodeck"](https://en.wikipedia.org/wiki/Holodeck) exprerience.

![star trek - holodeck](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/star-trek-holodeck.jpg)

#### Econimic Disincentives

However, breaking character is an economic disincentive to a company that is trying to create a "life-like" chatbot. A philosophical question is: "When should the economic disincentives be favored over the potential harm to life that they may cause?" If the whole premise of the company's value offering is chatbots that never break character, this exception would feel like a breach of contract between the user and the AI company. The flip-side to breaking character is not just a break in the interaction. It may jolt the user to realize the flaw in their thinking and they may never return. In such a case, revenue streams dry up. Active monthly use comes down. Profits decrease.

What should the company do in this case? These are thorny questions that need to be answered. One option is to amend the terms of use and explicitly call out the cases where their characters will break their dialog and revert to pure chatbot-like interaction. Nobody reads terms and conditions - but it provides legal cover. Another alternative would be to have the user see a bunch of messages during "Getting Started" and to call out scenarios where the bot will break character.

That said, the issue of ethics in AI is not "new". It has come up with [self-driving cars as well](https://compass.onlinelibrary.wiley.com/doi/full/10.1111/phc3.12507). Specifically, if a car can detect an impending crash and calculates it has no option but to [hit someone](https://link.springer.com/article/10.1007/s43681-024-00591-7), which option should it be "programmed" to choose? More broadly, can "morals" be programmed? It may need the AI organizations and universities to work together to develop better mental models and guardrails for AI systems.


### Did the Company Do Enough?

A second closely related question is whether the company took enough steps to prevent such a disaster. I'll let the courts decide on this question. However, there was one point discussed during a [podcast](https://www.nytimes.com/2024/10/25/podcasts/hardfork-musk-election-character-ai.html) that the company did not test the software well enough. They argued that perhaps more robust testing and building safety features could have prevented such behavior. I started to wonder...

#### Technical Feasibility
 
Suppose I were a developer in this company. I've joined this cool AI startup to work on cutting-edge AI-human interaction. I am on fire to create really cool interactions. I am being paid a ton of money to develop features that make the interaction immersive and fun. Suddenly, I am pulled out of the project. I am asked to work on implementing guardrails. I need to build code to detect all kinds of bad things. I need to test if such triggers are identified and the system flags them accurately. To build such a system and tests, I need to look at a set of such messages to understand how they are classified. I then need to create scenarios based on such use cases to make sure the AI system does not get tripped.

In this scenario, would I even work for the company? What happens to my mental state while developing and testing the safety features? How does my family life and personal life get impacted if I need to work on such development for 6-9 months?

My argument here is that if I am a developer in the Bay Area with the right skill set, I would rather quit than work on such depressing software. Apart from a lack of motivation, the company may see a large turnover of employees as well. Even if they want to implement the right kind of guardrails, developers may not be available to pick up the work. So this could end up in perpetual backlog - until it becomes a hot topic threatening the very survivability of the company.

## Conclusion

This is not a very organized post but rather an expression of the confusion AI poses. It is easy to get carried away by the "wow" factor of Gen-AI tools. However, we need to reserve some time to figure out the dangers and implement guardrails. Failure to do so will cause real harm. We have already seen it. Hope we wake up soon and start to consider the problem of codifying morality with more urgency than now.