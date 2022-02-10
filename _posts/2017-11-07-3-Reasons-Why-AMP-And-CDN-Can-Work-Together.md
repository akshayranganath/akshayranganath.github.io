---
layout: post
title: 3 Reasons Why AMP And CDN Can work together
comment: true
description: Google's Accelerated Mobile Pages (AMP) and Content Delivery Networks (CDN) are complimentary. In this post I'd like to show that the two can co-exist.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/fist-pump.jpg
tags: [amp, cdn]
---
Google's Accelerated Mobile Pages (AMP) and Content Delivery Networks (CDN) are complimentary. In this post I'd like to show that the two can co-exist.

## What is AMP?

According to Google [Accelerated Mobile Pages (AMP)](https://developers.google.com/amp/) project 
>is built on top of existing web technologies to enable blazing-fast page rendering and content delivery.

Although Google's stated purpose is about speed, the adoption has been due to the carrot it danlges for AMP users. A page that implements AMP could be shown as part of the carousal right under the search bar. A non-AMP page will never be shown here. This SEO jump is what has been driving the folks to try AMP. To get into this carousal, you need to have your content in Google's AMP cache. But - we're getting ahead of oursleves. Let's see how AMP works.

## How does AMP work?

AMP consists of 3 parts. Again, taken from the AMP project:

- _AMP HTML_ is HTML with some restrictions for reliable performance.
- _AMP JS_ library ensures the fast rendering of AMP HTML pages.
- _AMP Cache_ can be used to serve cached AMP HTML pages.
If your page implements the AMP HTML, passes the validation by AMP JS, then you are eligible for AMP CDN caching. Elaborating on the caching, Google explains:
>The Google AMP Cache is a proxy-based content delivery network for delivering all valid AMP documents. It fetches AMP HTML pages, caches them, and improves page performance automatically. When using the Google AMP Cache, the document, all JS files and all images load from the same origin that is using HTTP 2.0 for maximum efficiency.


An immediate question that comes to mind is: _Do we remove CDN since we now have AMP and save some money?_ Well, the answer is you will still need a CDN and here are 3 reasons for it.

![team work](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/fist-pump.jpg)

## Reason 1: AMP pages still need to be hosted

AMP pages are discovered like regular pages by Google. So you need to have a webpage that is hosted on the internet. Here's a the work-flow that Google uses to discover and cache an AMP page. For details and an example, refer to the [case study](#case-study) below.

![How is AMP Page Discovered?](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/how-is-amp-page-discovered.png)
 
Google detects that an AMP version exists by looking for the ```&lt;link rel="amphtml"``` tag. Content publishers will potentially need to create 2 versions of a page and host it at origin. Since these are pages that can be cached, serving them over CDN will ensure better performance and a good offload at the origin data center.

## Reason 2: Google still needs to index

Google claims that _site speed_ is one of the indicators for ranking a web page. To get to a good performance, you'd need to leverage a CDN. This will ensure that the latencies are reduced for the Google bot, regardless of the bot's location and your site has a good performance and  better chance of ranking well on Google.

## Reason 3: AMP is not universally supported

The target for AMP project was mainly publisers. These are the pages that can easily be cached and has little to no personalization. If you are running an website like an online shop with personalized content, A/B tests and device specific optimizations then, AMP will not be a good fit.

AMP is also not designed for pages that have dynamic elements. So if you have a form or a check-out flow, AMP will not work for you. In all these cases, you'd need to host a version of your website and use a CDN to deliver and optimal experience to your users. 

## Case Study
With the basic story out of the way, I wanted to show a real use case. Let us take the example of [Forbes](https://www.forbes.com/). Let's use an example of a news story. 

- News Story URL: [https://www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/#60b5986e46e3](https://www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/#60b5986e46e3)

Now, this page is the full user experience. If you look at the source code, it has a hint to the AMP page using this tag:

```html
<link rel="amphtml" itemprop="url" href="https://www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/amp/">
``` 

Let's follow the link and open the AMP page. Within this AMP page at the URL [https://www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/amp/](https://www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/amp/), there is a reference to the AMP JS.

```html
<script async src="https://cdn.ampproject.org/v0.js"></script>
```
This tells Google that Forbes wants the page to be validated and cached on Google AMP cache. So Google does the validation and saves it at the URL [https://www-forbes-com.cdn.ampproject.org/c/s/www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/amp/](https://www-forbes-com.cdn.ampproject.org/c/s/www.forbes.com/sites/bobevans1/2017/10/18/ibm-rocks-the-cloud-purists-moan-but-customers-love-big-blues-15-8-billion-cloud-business/amp/)

There is a pattern that Google follows to name the AMP domain. This is explained in the [AMP Cache URL Format](https://developers.google.com/amp/cache/overview#amp-cache-url-format)

### Hacks Around AMP

#### Use AMP without AMP cache
Using the JS code to validate your page is the step that actually causes Google to create the Google cache domain and serve the objects from here. If your goal is to build a well-performing web page but without the Google AMP cache, then simply remvove the reference to the JS file. By doing this, you get the advantage of a well performing page and full control over the content. 

The downside is you will not appear in the carousal below search box. 

### Create AMP-only page
You could create a website that has AMP-only version. In this case, the ```&lt;link rel="amphtml"``` tag will point back to the same URL to tell Google that this page is an AMP version. 

For example, [BMW.com](https://www.bmw.com/en/index.html) has a new website that is based on AMP (and progressive web app). If you notice the source code, it starts with this tag:

```html
<html amp lang="en">
```
So this page itself will be served for mobile search results (from AMP cache) and from the regular domain for all other uers.

## Concluding thoughts
AMP is targeted for mobile search results and for faster rendering of content on the mobile devices, especially in constrainted network conditions. If you are a web-admin who wants to provide a rich user experience and immersive images, then AMP is not necessarily the right approach. It can give you a marginal SEO boost but, at a cost of minimalistic experience.

Regardless of the approach you use, there still needs to be a web site that is hosted. This website still needs to be fast, reliable and scalable to handle the end user and bot requests. It can either provide a minimalistic AMP experience or a rich experience. For this part of the website, you would require a CDN and hence the argument that AMP and CDN work together.    

   

  

