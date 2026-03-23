---
layout: post
title: Vibe Coding a Python Library
comment: true
description: I used vibe coding to build and publish a fully working Python SDK for Cloudinary's people search feature. From code generation to pypi—in about 4 hours using Cursor.
image: /images/blog/cld-people-search-hero-image.png
tags: ai-ml, AgenticAI, Cursor, pypi
---

![face recognition](/images/blog/cld-people-search-hero-image.78aa64c8.png)

I was looking for a real use case to test out "vibe coding". Although I have used Cursor for almost a year now, it was mostly in bits and pieces. I wanted to *really* test-drive the capability of all its aspects to build a fully working system. Today, I built and launched a fully-functioning Python repository - [_Cloudinary People_](https://pypi.org/project/cloudinary-people/) using vibe coding!

## What is the use case?

Cloudinary has launched a capability to identify people in uploaded images. An API was made available to handle 3 use cases:

1. [List all recognized persons in account](https://cloudinary.github.io/api-schemas/index.html?schema=api&viewer=stoplight#/operations/listPeople)
2. [Get a single person details](https://cloudinary.github.io/api-schemas/index.html?schema=api&viewer=stoplight#/operations/getPerson)
3. [Update a person](https://cloudinary.github.io/api-schemas/index.html?schema=api&viewer=stoplight#/operations/updatePerson)

At this point, no SDK support is available since it is relatively new. So I wanted to take Cursor out for a test-drive and build an SDK for these endpoints.

## How did I do it?

### Step 1: Generate the basic code

I used Cursor, alternating between the **Plan** and **Build** modes. Just to give a glimpse, I started with this initial prompt:

```
I would like to build a full Python SDK for the Cloudinary people search feature. The documentation for this feature is available here: In this SDK, user will support their API Key, API Secret and Cloud Name parameters. 

Users will need to use the following features:

1. List recognized people (https://cloudinary.github.io/api-schemas/index.html?schema=api&viewer=stoplight#/operations/listPeople )

2. Get person details (https://cloudinary.github.io/api-schemas/index.html?schema=api&viewer=stoplight#/operations/getPerson )

3. Update a person (https://cloudinary.github.io/api-schemas/index.html?schema=api&viewer=stoplight#/operations/updatePerson )

For this SKD, I'd like to use pydantic for type checking. Provide a "verbose" option to print debug information where necessary.

Add self-documentation as well. If needed, I may use this SDK as a foundation to develop a CLI. For now, don't worry about CLI.

Can you plan this project?
```

This step created a detailed step-by-step plan for the project. I then asked Cursor to create the code.

### Step 2: Review the code

Once this code was ready, I wanted to ensure code quality. So I started a new agent and asked it to review the code.

```
@cloudinary_people_sdk_910195c7.plan.md (1-71) Take a look at the project specs and the code created. Analyze the code from the perspective of a Senior or Principal Software Engineer. Identify  potential issues in logic or problems with maintainability. Suggest changes that can make this code be better.
```

Cursor gave a whole set of recommendations in a separate markdown file. It identified 3 critical issues, about 5 maintainability issues and a few other issues related to tests and packaging.

I asked Cursor to implement all the recommendations.

I followed it up with some minor changes. I wanted the code to support a specific mechanism of authentication that Cloudinary SDKs use. It was able to incorporate it easily.

### Step 3: Package and publish

At this stage, I was confident of the code, but I wanted one more peer review. So I asked Cursor to do another round of checks, again starting in **Plan** mode followed by **Build** mode.


```
I would like to publish this repository to pypi. Before doing this, I'd like you to run a security audit. 

1. is this code safe to publish?
2. are there any dependencies having security vulnerabilities? if so, how can I work-around them?
3. From a code documentation and README perspective, is this reasonably complete? 

Basically, I want a peer review before I publish.
```

It identified the following:

* Medium: CVE-2024-35195 in requests < 2.32.0 - a security issue
* Bug 1: verbose=True parameter does not exist - a bug
* No LICENSE file

and a few more minor things.

After fixing this, I was all set.

### Step 4: Publish

To test out my confidence 😄, I switched to Cursor's agent CLI. I asked it to package and publish my repo to pypi.

It first published the code to `pypi test` and asked me to verify. Only after I confirmed, it went ahead and published to `pypi`.

### Step 5: Generate a hero image

The last step was to make it attractive. For this, I used Gemini. I simply provided my github URL to the LLM and asked it to create a hero image. 

```
I would like to create a hero image for my python project at https://pypi.org/project/cloudinary-people/. Can you generate a prompt that would be suitable for this project? I plan to use Gemini/Nano-Banana to create the image.
```

After some trials, it generated an image that worked for me!

## Conclusion

Vibe-coding is real! If you know the system that you want to build and have clarity in mind, the tools are simply amazing. I developed the entire library + hero image in about 4 hours! This would have normally taken weeks of effort since this is not my day job.

Vibe-coding is a strong enabler for developers. If we know what we want, getting the agent to do it on our behalf is liberating. That said, if I ever need to deep-troubleshoot this library, I'll be hesitant. I did not "code" each line, so my ability to support it will be limited!

Are you seeing something similar in your world? Do share your thoughts!