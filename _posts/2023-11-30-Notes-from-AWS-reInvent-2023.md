---
layout: post
title: AWS re:Invent 2023 
comment: true
description: Everything is GenAI and you should use Amazon Bedrock and Amazon Q.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_350/blog/reInvent2023/reinvent-logo-2.png
tags: ai-ml, gen-ai, rag
---

AWS re:Invent 2023 could have been called __Gen AI, Amazon Bedrock and Amazon Q__. 

![reinvent logo](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650/blog/reInvent2023/reinvent-logo-2.png)

## What stood out?

Amazon was pushing hard the idea that GenAI is transforming all businesses. However, the LLM models themselves are still being developed. So, customers need to use a trusted platform and build tools based on the known end-point offered by various AWS services. LLM Models can be plugged-in and replaced. 

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650/blog/reInvent2023/keynote-1.png)

[Amazon Bedrock](https://aws.amazon.com/bedrock/), [Retrieval Augmented Generation (RAG)](https://huggingface.co/docs/transformers/model_doc/rag) and [Amazon Q](https://aws.amazon.com/q/) were the services in most focus throughout the event.

## Dig Deeper

### Data Security & Governance

During various sessions, AWS team and customers educated about the widespread use of Generative AI capabilities. They did acknowledge that access-control and data protection were at the forefront. Teams may misuse the service or share sensitive data in ignorance. The solution was to use a service like Amazon Bedrock and leverage an LLM model.

LLMs hosted within Bedrock can be trusted to not use the data for further training. Since the access can be restricted using the [IAM](https://aws.amazon.com/iam/), data protection is better achieved. Higher level services like [Kendra](https://aws.amazon.com/kendra/) and [OpenSearch](https://aws.amazon.com/opensearch-service/) and further ensure the data access can be controlled.


### RAG 

If you are familiar with [LangChain](https://www.langchain.com/) or [GPTs](https://openai.com/blog/introducing-gpts), a lot of content would sound similar. The only difference was the use of AWS services to achieve the same functionality. 

In one of the hands-on sessions, we built a RAG solution using this architecture.

![rag-deployment](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650/blog/reInvent2023/full_architecture.jpg)
[Source: shared as part of workshop]


When deployed, the data flow looks like this:

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_650/blog/reInvent2023/Amazon%20Bedrock.jpg)
[Source: shared as part of workshop]

The team also shared an [example Multi-Modal RAG powered application](https://github.com/aws-samples/aws-genai-llm-chatbot).


Amazon also spoke about introducing GenAI assisted code through [Amazon CodeWhisperer](https://aws.amazon.com/codewhisperer/). The nice feature about this tool is that it can integrate with existing IDEs like VSCode. It can also be customized based on a customer's repository so that the code generated is more context specific.

### Keynotes

A few other things that were launched/announced at the keynotes were:

* Amazon Bedrock is generally available.
* Bedrock is HIPAA eligible and SoC compliant.
* [Gaurdrails for Bedrock](https://aws.amazon.com/bedrock/guardrails/), a service to implement responsible AI was launched.
* New models of Claude and Llama were added to Bedrock.
* Agents for Bedrock were launched.
* Sagemaker has been updated to help in building LLM models.
* Dr. Verner Vogels, the CTO of Amazon launched a site called the [Frugal Architect](https://thefrugalarchitect.com/). The website contains 
    > Simple laws for building cost-aware, sustainable, and modern architectures 

### Expo

At the Expo, I was impressed with MongoDB's support for advanced capabilities in Vector search. This service is called [Atlas](https://www.mongodb.com/atlas).

I learned from DataDog that they support [Synthetics](https://docs.datadoghq.com/synthetics/), a service similar to synthetic testing offered by Catchpoint.

Lastly, at a session in one of the booths, I saw the use of [LangSmit](https://www.langchain.com/langsmith) - a very nice way to trace `LangChain` calls and make the output more reliable.

## Bottom Line

* GenAI is here for Enterprises. 
* RAG is the way to leverage GenAI with custom data & reduce hallucinations.