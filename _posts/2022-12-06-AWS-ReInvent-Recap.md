---
layout: post
title: AWS ReInvent Recap
comment: true
description: Notes from sessions at ReInvent 2022.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_350,h_350,c_fill/blog/reinvent2022/lfzaxzymqf4dveiltong.png
tags: webperf, ai-ml
---


This year, I got a chance to attend the AWS re:Invent conference held in Las Vegas from November 28th to December 1st. It felt great to be back at an "in-person" event. The overall focus appeared to be on AI/ML. The content varied from setting up large, complex and ultra-powerful clusters to non-technical aspects like identifying & communicating bias in AI models. Apart from that, I got a chance to attend sessions on HTTP/3, Web Performance Metrics measurement and learning the _Working Backwards_ principle of Amazon. Here are my notes.

![AWS re:Invent logo](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_1024/blog/reinvent2022/lfzaxzymqf4dveiltong.png)

### BOA318: Build a fitness activity tracker using machine learning

The session was intended to help us understand machine learning. However, I may have been over-optimistic in my selection :-) This session probably required attendees to know a lot about ML and training models. So it kind of went over my head. For those interested, here is the overall architecture used in this session.

![](https://akshayranganath-res.cloudinary.com/image/upload/w_650,f_auto,q_auto,e_sharpen/blog/reinvent2022/wmmqf5tunugprhk7gvr5.jpg)

### Accelerating high performance video transcoding with Amazon EC2

This was a very interesting session. I learnt 2 new things.

#### High Efficiency Streaming Protocol (HESP)

In this session, the presenters spoke about a mechanism of achieving ultra low latency streaming. Unlike normal streams, HESP has:

![HESP](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/fxtmszolkqtvsatq3cre.jpg)

* HESP uses lower amount of buffering as compared to regular streaming
* Every resolution in HESP has 2 streams - a supported resolution and a lower version stream to quickly switch if needed. 
* Each frame has an initialization stream. So switching between resolution is very easy.
* So if the player had switched to a lower resolution frame, once the play back completes, the player can easily switch to the higher resolution frame immediately.

The challenge with HESP is the rapid encoding requirements from ingest to delivery - especially when handling live streams. For this, the presenter proposed the use of Xilinx EC2 instances.

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/ounroeskajgtgltlosyp.jpg)

#### LC-VC by V-Nova

The second part of the session was by [V-Nova](). They presented on the topic of [LCVC](https://www.v-nova.com/lcevc-enhanced-video/) enhancement of codecs. They spoke about the ability to convert existing still images and videos into immersive [6 degrees of freedom](https://www.queppelin.com/what-is-six-degree-of-freedom/) experience. Since such experiences are going to be common, there is a need for delivering rich experience as well. However, coding-decoding on device is limited by the headset capabilities. So they proposed that the computing should be _split_ between CDN and device. In fact, they coined a term, _Graphics Delivery Network (GDNs)_ for handing these kind of content.

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/w8dc8pnpwkafkwwepusf.jpg)

### COM304: Detect and resolve biases in artificial intelligence

```
Virginie Mathivet
Modern Data Manager
TeamWork
```

* Every model has a bias in AI. Eg Google Translate has issues with gender.
* Bias notebooks: https://github.com/VMathivet/reinvent2022 
* In most cases, biases don’t come from the scientist but from data.
* Explainable AI (xAI) - ability to explain the underlying AI rules.

Here are the broad points that she was trying to make during her talk.

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/qkkby3t6mhjrcktcfawd.jpg)

### NET401: Deliver great experiences with QUIC on Amazon CloudFront

Presented by [Jim Roskind](https://en.wikipedia.org/wiki/Jim_Roskind), this was an incredible journey on the evolution and thought process that went into the creation of [IETF QUIC](https://quicwg.org/) protocol that has ultimately become the [HTTP/3](https://www.ietf.org/archive/id/draft-ietf-quic-http-34.html) protocol. Here are some slides that I noted down.

_What is HTTP/3_

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/nhmcpg6ps8dksw8z0gts.jpg)

_How Head of Line Blocking is prevented in QUIC_

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/kmxwltp8f33v3o3b4ft9.jpg)

_How packet loss is handled in QUIC?_

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/gguvfgyuxddfkgqf5kj8.jpg)

Further reading: At the end of the session, Jim asked us to read a short description explaining the protocol. Here's the document that he reference: [MULTIPLEXED STREAM TRANSPORT OVER UDP](https://docs.google.com/document/d/1RNHkx_VvKWyWg6Lr8SZ-saqsQx7rFV-ev2jRFUoVD34/preview#!).

### SUS201: Detecting deforestation with geospatial images and Amazon SageMaker

This was a very interesting session related to identifying large change based on satellite images. The use case was to use the satellite image before and after a large California fire and see the impact. Unfortunately, I had a customer issue and had to walk out.

### CMP314: How Stable Diffusion was built: Tips and tricks to train large models

This was a join session between [Stability.ai](https://stability.ai/) and AWS. Stability is famous for their [Stable Diffusion](https://stablediffusionweb.com/). One of the main speakers was _Emad Mostaque_, the CEO of Stability.ai. He made some very interesting observations on the development of AI.

* The whole world of large models and training was kick-started based on a paper titled [Attention Is All You Need](https://arxiv.org/abs/1706.03762). 
* Going forward, there are going to be a handful of companies that will create foundational models. This model is trained on images, videos, text, etc.
* There will be a few hundreds of companies that will build on top of the general model and train (ie fine tune) it for generic tasks on one type of data. For example, StableDiffusion for images, ChatGPT for text and so on.
* There will be thousands of companies that will use this domain specific model and train it for very specific task. For example, a car dealership company may train their model to detect dents and damages based on the images of a car.

The second half of the talk was very deep architecture discussion on how StableDiffusion managed to create Super Computer like raw power using [AWS Parallel Cluster](https://aws.amazon.com/hpc/parallelcluster/).

Some of the fun launch information were:

* Stable diffusion now does hands :-) 
* Photorealism is now almost here. By next year, we should have the generative AI build the capability for photographer like quality.

_Created by StableDiffusion with the prompt "Artificial Intelligence looking like a divine being'_:

![](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/reinvent2022/ue7cuq1njso4jq3hydji.jpg)

### AMZ302: How Amazon uses better metrics for improved website performance

### AIM342 Advancing Responsible AI: Bias Assessment and Transparency