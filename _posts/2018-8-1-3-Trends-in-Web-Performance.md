---
layout: post
title: 3 Trends in Web Performance
comment: true
description: Web Performance landscape has evolved with focus on perceived performance, RAIL model, focus on mobile website speed and better tooling. The blog explains new metrics and relates them to measurement tools.
image: https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/speed-2018.jpg
---

Website performance is always an ongoing effort and an elusive target. In the early days, pageLoad time was the gold standard of web performance monitoring. However, websites have evolved to be a lot more dynamic, Javascript heavy and filled with rich images and 3rd party content. We need better metrics, a better model and better tooling to measure and monitor the performance. In this blog post, I explain the evolution 3 different trends that is shaping the industry:

- [Response-Animation-Idle-Load (RAIL) model](https://developers.google.com/web/fundamentals/performance/rail): It is both a model and a prescriptive framework that sets up performance benchmarks
- Perceived Performance / [User-centric performance metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics): A set of measures that tries to more accurately predict the user's level of engagement / frustration at using a web page.
- Tooling: Set of tools like [CrUX](https://developers.google.com/web/tools/chrome-user-experience-report/), [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), [LightHouse](https://developers.google.com/web/tools/lighthouse/) and RUM solutions like [mPulse](https://www.akamai.com/us/en/products/web-performance/mpulse-real-user-monitoring.jsp)

So let's dig in!
![Speed](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/speed-2018.jpg)

## RAIL Framework
RAIL is a framework that is being publicized by Google. According to the [Google developer page](https://developers.google.com/web/fundamentals/performance/rail) it is

>a user-centric performance model that breaks down the user's experience into key actions

The framework breaks down performance into these 4 key goals:

![RAIL model](https://developers.google.com/web/fundamentals/performance/images/rail.png)<cite>Source: <a href="https://developers.google.com/web/fundamentals/performance/rail">https://developers.google.com/web/fundamentals/performance/rail</a></cite>

| Measure | Explanation | Target |
| ------- | ----------- | ------ |
| Response | Complete a transition initiated by user input within 100ms. | < 50 ms | 
| Animation | Aim for visual smoothness. Users notice when frame rates vary | Produce frame < 10 ms |
| Idle | Maximize idle time to increase the odds that the page responds to user input | Response < 50 ms |
| Load | Load pages so that they are interactive quickly based on network / device type | on 3G, time to interactive < 5s |

Basically, the RAIL model says that load your page fast so that it is interactive quickly. Once it is interactive, ensure that any dynamic aspects are fast enough so that the page remains interactive to user input.

For more information about RAIL, please watch this video about _[RAIL in real word](https://www.youtube.com/watch?time_continue=3&v=iIV1xPFXmBs)_.

## Perceived Performance
How fast your site _appears_ to load is as important as it really loads. The problem with perceived performance is that there was no way to measure it. It's something of a conundrum like this:

![PR Perception cartoon](http://forwardthinkingpt.com/wp-content/uploads/2014/09/24cartoon.jpg)
<cite>Source:<a href="https://www.cartoonstock.com/directory/p/public_perception.asp">https://www.cartoonstock.com/directory/p/public_perception.asp</a>

We have had a lot of measurements like Time to first byte, DOM loaded, onLoad and a host of other measurements. These metrics have been immensely helpful in the evolution of the web performance industry. However, they were designed on the events that could be measured by browsers. However, they failed to answer some basic questions like these:

| Experience | Meaning | Metric |
| __Is it happening?__ | Did the navigation start successfully? Has the server responded? | First Paint / First Contentful paint |
| __Is it useful?__ | Has enough content rendered that users can engage with it? |
| __Is it usable?__	| Can users interact with the page, or is it still busy loading? |
| __Is it delightful?__ | Are the interactions smooth and natural, free of lag and jank? |

![Perceived performance metrics](https://developers.google.com/web/fundamentals/performance/images/perf-metrics-load-timeline.png)

<cite>Source: <a href="https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics">https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics</a></cite>

Going beyond this, we have a few more measurements like the following:

| Experience | Meaning | Metric |
| __Is it slow to interact?__ | How much time did it take from the first user interaction to the page responding to this action? | First Input Delay | 
| __Is there a mismatch in expectation?__ | Based on content being loaded, users may try to interact but the page fails to respond. The gap measure this difference. | Time to First Interactive - Time to First Interaction |
| __How frustrated is the user?__ | When the user can't interact, they may first double click and click continuously in the hope of making a page work. | Rage Clicks |

All this boils down to measuring a host of metrics that is spread across different tools and platforms.

![What does perception really mean?](https://blogs.akamai.com/blog2pic2.png)
<cite>Source: <a href="https://blogs.akamai.com/2018/04/perception-matters-measure-perceived-performance.html">PERCEPTION MATTERS: MAKING RUM MORE REAL</a></cite>

If you notice, we've now gone from hard measurement of DNS or onLoad to softer measurements related to user's interaction and experience. All this is harder to measure but, Google has announced that their search indexing will now take these factors into account. Specifically, Google will now:

- use mobile page speed as a ranking signal
- encourage "developers to think broadly about performance"
- and hint at using suggestions from tools like LightHouse, CrUX and PageSpeed Insights which we'll discuss next.

<cite>Source: <a href="https://blogs.akamai.com/2018/04/perception-matters-measure-perceived-performance.html">Using page speed in mobile search ranking</a></cite>

## Tooling for Perceived Performance

[WebPageTest](https://www.webpagetest.org/) has been the best and de-facto tool to visualize and show the concept of perceived performance. The film strip view, video and visual progress charts have been the toolset that we have been using for a long time. However, we now have more tools that can help in building a case for measuring and optimizing for perceived performance.

- [LightHouse](https://developers.google.com/web/tools/lighthouse/): Project LightHouse by Google is able to run a lot of audits and present findings. These findings are wide ranging like providing a filmstrip view to Chrome Javascript timeline. By using the audit, you would be able to dig into problems like a particular Javascript taking high amount of time and thus causing rendering issues.
- [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report/): Google Chrome collects performance measurements from real browsers. This information is sent back to Google, if users have opted in for the data collection. This anonymized data is now being exposed as the Real User Monitoring (RUM) data for Chrome under the project CrUX. This tool is especially helpful since it gives you a spread of the user experience. Synthetic tests can only give you the data from simulated users with pre-defined setup. CrUX can provide histograms of actual performance behaviors, including perceived performance information.
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights): This tool has now evolved to provide both suggestions to improve the page and pull up the CrUX data for the URL being audited. By using the PSI report, you should get an idea on the current performance and tips to analyze and fix your website.
- [Akamai mPulse](https://www.akamai.com/us/en/products/web-performance/mpulse-real-user-monitoring.jsp): Akamai's mPulse Real User Monitoring solution provides all the perceived performance data along with the standard metrics like onLoad. The tool can be instrumented to measure rage clicks as well to identify the user's frustration levels when using a website.

## What do you look for?
By correlating the data from syntehtic tests and the RUM solutions, you should be able to identify potential issues in perceived peformance. Some of the issues could be:

- synchronous scripts holding up the browser's main thread and preventing it from rendering the content
- A/B testing solutions that implement some fix leading delayed rendering of the page ([Preventing flickering with A/B Solutions](https://growthhackers.com/questions/ask-gh-how-do-you-deal-with-flickering-when-ab-testing/))
- page _appearing_ to be ready but, actually busy. This can be seen in the first input delay (FID) as well as the difference between Time to First Interaction and Time to First Interactive. 
- page _appearing_ to render but not showing the content that matters. This can be caught by metricsl like First Contentful Paint, First Meaningful Paint and Visually Ready

I have highlighted a very small subset of issues that could be tracked and worked on by leveraging the pereceived performance metrics. If you have any use cases, I'd like to hear more as well!