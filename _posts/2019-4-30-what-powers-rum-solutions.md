---
layout: post
title: What powers observability with RUM tools?
comment: true
description: Real User Monitoring solutions rely on browser support to make the measurements meaningful. We look at some of the underlying standards that allow this capability.
image: /images/binary-2910663_1280.jpg
---

Real User Monitoring (RUM) is the ability to measure the performance of your website / web application as seen by your end users. Some of the measurements are well-supported, some are browser specific and a few standards allow observability by letting you decide the measurement parameters. In the plethora of tools, it is hard to understand the differences. With this post, I would like to provide you a firm foundation on the minimum supported provided by the RUM solution for some solid measurements.

## Navigation Timing API

In the old days of wild-wild west, the performance measurements were instrumented using custom Javascript code. The challenge was the measurement would begin only _after_ the base HTML was downloaded and the JS code executed.

With the advent of NavTiming API, the browsers provide an interface called `PerformanceTiming`. Browser implementations make a promise to implemen this interface and populate it with a whole gamut of timers. Without going into a lot of details, here are the measurements that are promised by this interface.

![Nav Timing](https://www.w3.org/TR/navigation-timing/timing-overview.png)
Source: [https://www.w3.org/TR/navigation-timing/timing-overview.png](https://www.w3.org/TR/navigation-timing/timing-overview.png)

To access the details on your browser, simply open the developer tools. On the _console_, type the command to see the measurements being collected as part of NavTiming.
	
	window.performance.timing


>Spec: [https://www.w3.org/TR/navigation-timing/](https://www.w3.org/TR/navigation-timing/)

## Resource Timing API

Navigation Timing API is very good to provide details on the performance of your base document. However, it cannot provide the lower level information around the loading of the embedded resources. For example, if you want to check the loading time for your bootstrap library code, the NavTiming API cannot provide the data.

Resource Timing API was introduced to give your granular information on the performance of resources that goes into page construction. This spec defines an interface named `PerformanceResourceTiming`. Browsers implement this interface and can provide you with granular details on the resources. Here are the details you will receive from your browsers:

![Resource Timing](https://www.w3.org/TR/resource-timing-2/timestamp-diagram.svg)
Source: [https://www.w3.org/TR/resource-timing-2/timestamp-diagram.svg](https://www.w3.org/TR/resource-timing-2/timestamp-diagram.svg)

To access the resource timing details, type this on your browser's _console_.

	window.performance.getEntriesByType("resource")

This will provide an array of measurement for each of the resource loaded on the page. This array has a maximum length of 150 but, it can be extended, if required.	

>Spec: [https://www.w3.org/TR/resource-timing-2/](https://www.w3.org/TR/resource-timing-2/)

## User Timing API

>Spec: [https://www.w3.org/TR/user-timing/](https://www.w3.org/TR/user-timing/)

## Paint Timing API

>Spec: [https://www.w3.org/TR/paint-timing/](https://www.w3.org/TR/paint-timing/)

## Beacon API

>Spec: [https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API](https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API)

## Network Information API

>Spec: [https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)

## Long Tasks API

>Spec: [https://w3c.github.io/longtasks/](https://w3c.github.io/longtasks/)

## Server Timing API

>Spec: [https://w3c.github.io/server-timing/](https://w3c.github.io/server-timing/)

In terms of support, Chrome supports pretty much everything. Opera too is quite decent in its support followed by Firefox. Safari is generally the new IE when it comes to providing support for observability! To know the current status of implementation, you can refer to one of these resources:

* _MDN_: On the Mozilla's [MDN website]([https://developer.mozilla.org/), search for a standard. It will generally have the spec and support details. Although the website is owned by Mozilla foundation, the browser vendors have decided to pool the resources and update the documents on this single website. Personally, I consider this the single source of truth, followed by the W3C website.
* _CanIUse_: https://www.caniuse.com/. This website provides an easy to understand view and is generally well updated. If there is a conflict between MDN and this website, I will go with MDN.

## Adjacent Support
All the different APIs I've described earlier are the standards necessary for to provide good measurement. Apart from the measurement standards, there are security headers that can prevent your RUM solution from observing third party resources. Here are the 3 primary ones:

### Timing-Allow-Origin (TAO)

>Spec:

### Cross-Origin-Resource-Sharing (CORS)

>Spec:

### Content-Security Policy (CSP)

>Spec: