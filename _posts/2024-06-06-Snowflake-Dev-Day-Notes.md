---
layout: post
title: Snowflake Dev Day Conference 2024
comment: true
description: Notes from the Snowflake Developer conference held in San Francisco.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/Designer.jpg
tags: ai-ml, gen-ai
---

# Snowflake Dev Day - 2024

![hero image ](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/Designer.jpg)

## Session 1: Forecasting with Snowflake ML Functions

Predicting and forecasting using predictive modeling that is built in.

Get data from Snowflake marketplace. e.g. [https://app.snowflake.com/marketplace/data-products?sortBy=popular&pricing=free](https://app.snowflake.com/marketplace/data-products?sortBy=popular&pricing=free)

Execute SQL; python block and make that streamlit. You can now have a chart as well in the block.

Train a model and predict the demand for next 3 months. This can be done with [FORECAST](https://docs.snowflake.com/en/sql-reference/classes/forecast) model.

1. Create a view
2. Train the model with the view
3. Predict by calling the `forecast` method.

Add features to model - things like Holidays, Back to School, Thanksgiving, etc. This is an example.

    CASE WHEN DATA='2023-12-25' then 1 else 0 as christmas_flag

For forecast, pass the corresponding variables - when is Christmas this year. These are future features.    

## Session 2: AI Visionaries: Future of humanity after AI

Andrew NG, Hanna Hajishirzi (Prof University of Washington), Andrew Treullie (Dir of Product at Snowflake)


### Areas that don't have enough focus on Research

**Hanna**

* what is the data being used in language models we only see weights.
* how to evaluate models and more importantly limitations of model.
* post training - make the model usable. 
* how to extend knowledge learned from NLP and apply to other areas.

**Andrew**

LLM current model is like asking a student to write an essay w/o ever hitting a back-space.

* shift towards agentic AI. Iterative workflow - build the output based on . [STORM paper by standford](https://arxiv.org/abs/2402.14207).
Layer model on the application layer
* lack of evaluation - holding progress back

### Key Opportunities in Evaluation

**Hanna**

* LLMs are brittle. Response is based on prompting and whether same or similar data was present in the training data.
* How to evaluate if a generated response is good. No consensus yet.

**Andrew**

* Data gathering is tough. Due to this not much effort put in.
* Lots of community driven effort on evaluating models.
* Evaluation of the models - specifically if a change that we made has helped or harmed the model.


### LLM as a Judge

OpenAI has Super-Alignment teams that has the question - will a human even be a good judge for the generated output at some point in time?

**Hanna**

* RLHF is being replaced by RLAIF - humans being replaced by AI for feedback. AI is getting very close or even better than humans for general preferences. However, complex tasks or complex questions, the gap is large. Will it be fixed - difficult to say and this is the area of research.


**Andrew**

* Weakness of humans is lack of consistency. 
* Driving consistency is the most important thing for evaluation.

Story of Gary Kasparov

### New models

RAG and Agentic Sytems

**Hanna**

Q: RAG models are not good enough - why? What are issues with scaling?

* Current LLM model training is to build weights and throw away the data. How can we expect it to remember everything? How can it stay updates? How to make it "forget" something like New York times has done for ChatGPT?
    * Have data store and let the LLM use it.
    * If someone wants to forget the data, we remove this set from the data store
* Issue - not efficient. Get the data first, concatenate and then make the query. If data is huge like trillion rows in a table, this approach won't work.
* SelfRAG - Iteratively check if you need retrieval and then allows or blocks further data retrieve. Then, the model starts to generate.


**Andrew**

* Shift is from RAG to Agentic RAG. Let me agent decide on what data to retrieve

Solution to RAG is Agents.

### Agentic / Self-Reflection

Church-Turing hypothesis.. table + self-reflection = human level intelligence? Or is there anything missing?

**Andrew**

* Self-reflection is very useful and helps in improving the quality miraculously.


**Hanna**

Foundational models are very good at:
* Hallucination but they can be treated as hypothesis
* Right now - no ability to do things like moving arms.

### Looking to future

What should next generation learn to be useful?

**Andrew**

* Should we learn Python - we should! Value of learning Python is much higher now that couple of years ago.
* There was a generation of Cloud native developers. We are seeing the rise of Gen AI native developers. Instincts are quite different - we need to teach kids on how to get this.
* Barrier to learning is low.


## Lab: Gen AI with Snowflake

https://quickstarts.snowflake.com/guide/getting_started_with_bedrock_streamlit_and_snowflake/index.html