---
layout: post
title: Understanding and using Core Web Vitals
comment: true
description: Core Web Vitals was announced recently for measuring performance. Learn about the use, performance and SEO impact and tools available to measure the metrics defined as part of this change. 
image: https://akshayranganath-res.cloudinary.com/image/fetch/w_600,f_auto,q_auto/https://addyosmani.com/assets/images/core-web-vitals-addy.png
---

Recently, Google announced [Web Vitals - Essential metrics for a healthy site](https://web.dev/vitals/) and my initial metrics was a bored yaaawn. Yet another initiative and yet another set of performance metrics. My cynicism was similar to this Dilbert situation.

![dilbert key metric cartoon](https://akshayranganath-res.cloudinary.com/image/fetch/f_auto,q_auto/https://assets.amuniversal.com/096f45406cc901301d50001dd8b71c47)
(Source: [https://dilbert.com/strip/2007-05-16](https://dilbert.com/strip/2007-05-16))

However, after I started reading about it a bit, if felt like there was something to it and it is an interesting effort. So here's the summary of my understanding.

## Why does Web Vital matter?

Let's try to use [Simon Senek's Golden Circle](https://www.freshworks.com/freshsales-crm/resources/summary-of-start-with-why-blog/) to analyze the reason why Google worked on this initiative. Web Vitals, according to Google is about quantitively measuring the quality of user experience so that you, owner can identify opportunities to improve the site. Notice that the focus is on:

* the overall _quality_ of the experience rather than a specific performance measure.
* the metrics are _quantitative_ and relevant to user experience. Unlike past metrics like _pageLoad_ that indicated metrics relevant to a browser, the Web Vitals aim to measure things that can bubble up the subjective experience of a user.

__Core Web Vitals__ is a subset of the metrics that Google promises to provide and use across its products. These metrics build on the foundations that Google had laid under the [user-centric metrics initiative that I had written earlier](https://akshayranganath.github.io/3-Trends-in-Web-Performance/).

### Why Core Web Vitals matter for SEO?

In their [Google Webmaster blog post], Google provides one of the most transparent directive on the use of metrics for search ranking. They articulate their plans for using these metrics as a ranking factor and reducing the focus on Accelerated Mobile Pages (AMP). Specifically, these 2 lines are quite significant:

>We will introduce a new signal that combines Core Web Vitals with our existing signals for page experience to provide a holistic picture of the quality of a user’s experience on a web page.

and

>As part of this update, we'll also incorporate the page experience metrics into our ranking criteria for the Top Stories feature in Search on mobile, and remove the AMP requirement from Top Stories eligibility. 

They do point out that this change will be rolled out sometime next year and support for AMP will still continue. So if you want to use, don't forget that your [CDN can still help in delivering AMP pages](https://akshayranganath.github.io/3-Reasons-Why-AMP-And-CDN-Can-Work-Together/).

Let's take a look at what constitutes Core Web Vitals.

## What metrics constitute the Core Web Vitals?

Core Web Vitals is composed of three metrics and guidance on the performance values for each metric.

<blockquote>
<ul>
<li><a href="https://web.dev/lcp/">Largest Contentful Paint (LCP)</a>: measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
<li><a href="https://web.dev/fid/">First Input Delay (FID)</a>: measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds.</li>
<li><a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a>: measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1.</li>
</ul>
</blockquote>

The 3 metrics measure dimensions of web usability such as load time, interactivity, and the stability of content as it loads.([Source](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html)) Here's the distribution of the performance, as per [Google](https://web.dev/vitals/).

![core web vitals with performance distribution](https://addyosmani.com/assets/images/core-web-vitals-addy.png)

If you want to dig into the details on reason for using these 3 vitals and the suggested benchmark, head to the post on the [research and methodology for web vitals](https://web.dev/defining-core-web-vitals-thresholds/).

## How to measure the Core Web Vital metrics?

Google appears to have coordinated and done a great job at releasing tools for measuring Core Web Vitals. These metrics are currently supported on a variety of platform and tools. Here's a report on the [availability of tools](https://web.dev/vitals-tools/)

![core web vitals availability](https://akshayranganath-res.cloudinary.com/image/fetch/f_auto,q_auto/https://webdev.imgix.net/vitals-tools/Vitals-Tools1.png)
(Source: [https://webdev.imgix.net/vitals-tools/Vitals-Tools1.png](https://webdev.imgix.net/vitals-tools/Vitals-Tools1.png))

Apart from the tools mentioned, I am happy to see that my favorite tool, WebPageTest has the Core Web Vitals already incorporated. When you run a test, you should see the Web Vitals highlighted like this.

![webpagetest sample test report](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/wpt_core_web_vitals.png)

Google has published [details on various tools and helpful scripts](https://web.dev/vitals-measurement-getting-started/) for RUM solutions as well. SpeedCurve has [already announced](https://speedcurve.com/blog/web-vitals-user-experience/) they are supporting it.

## Go give it a try!

Google's carrot and stick policy of making excellent tools coupled with threat of an SEO impact is proven technique for adoption of the metrics. Expect to see RUM solutions to bundle these measurements and the conversation to pivot around these measures in the upcoming months.

Meanwhile, keep measuring and make your website blazingly fast!

