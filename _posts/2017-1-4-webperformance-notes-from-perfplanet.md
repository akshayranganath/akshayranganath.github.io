---
layout: post
title: WebPerformance notes from PerfPlanet
comment: true
---

Every year, in the month of December, [calendar.perfplanet.com](http://calendar.perfplanet.com) invites the experts from Web Performance to contribute their ideas as one blog post a day. It has some very insightful articles and hints at the upcoming technologies.

![PerfPlanet logo](https://res.cloudinary.com/akshayranganath-dflt/image/upload/blog/PerfPlanet%2520logo.png)

I went through the articles and made some notes and thought of sharing it for myself and for anyone who is harried for time.

### Day 1: [Testing with Realistic Networking Conditions](http://calendar.perfplanet.com/2016/testing-with-realistic-networking-conditions/)

The routes and peering relationships for all of the CDN’s and servers involved in any given content means that it usually works best if you test from a location close to the physical location your users will be coming from and then use traffic-shaping to model the link conditions that you want to test.

In the real world if you over-shard your content and deliver over lots of parallel connections with a slow underlying network you can easily get into a situation where the server thinks data queued in buffers had been lost and re-transmits the data causing duplicate data to consume the little available bandwidth.

### Day 2: [Lighthouse performance tool](http://calendar.perfplanet.com/2016/lighthouse-lighting-to-way-to-better-web-performance/)

Although lot of tooling is for PWA, it has a command line option and the report is quite useful. Need to try it out.

**Edit: 26-Mar-2017**: Lighthouse is now built into WebPage test Chrome tests. So keep an eye out for this,

### Day 3: [Brotli compression](http://calendar.perfplanet.com/2016/enabling-brotli-even-on-cdns-that-dont-support-it-yet/)

- Brotli over HTTPS only
- FF, Chrome and Opera only

### Day 4: [HTTP/2 Push - Everything about Push!](http://calendar.perfplanet.com/2016/http2-push-the-details/)
Rules of thumb for H2 push: [https://docs.google.com/document/d/1K0NykTXBbbbTlv60t5MyJvXjqKGsCVNYHyLEXIxYMv0/edit](https://docs.google.com/document/d/1K0NykTXBbbbTlv60t5MyJvXjqKGsCVNYHyLEXIxYMv0/edit)

Pushing resource 4 use cases:

- after html
- before html (most interesting, works with CDNs)
- with resources
- during interactive / after onload

Resource hints are cross origin while H2 push is not.

Lots of challenges with push, esp Push+Resource hints. Performance varies between cold and warm connection and degrades with higher latency connections like 2G. Lot more research required.

Colin Bendall's [https://canipush.com](https://canipush.com) is a good resource to test browser capability to accept server side push.

### Day 5: [Meet the web worldwide](http://calendar.perfplanet.com/2016/meet-the-web-worldwide/)

Get data on different aspects of web usage from: https://www.webworldwide.io/
Desktop

### Day 6: [Measuring WebPageTest Precision](http://calendar.perfplanet.com/2016/meet-the-web-worldwide/)

For a desktop experience, the default 9 runs yielded following precision:

- TTFB: around 6% to 8%
- Other metrics: better than 6%
- If 3% precision or better is sought, then 20 or more runs are recommended.
- If a 10% precision only is sought, then 7 runs should be enough.

Mobile

- For a mobile experience, the default 9 runs yielded a 3% or better precision.
- If a 5% precision only is sought, then 5 or more runs should be enough.
- If a 10% precision only is sought, then a single run should do.

### Day 7: [Progressive Storyboards](http://calendar.perfplanet.com/2016/progressive-storyboards/)
It’s important to ensure that the sequence in which features are revealed to the user is natural and follows user’s incremental needs as they wait comfortably for all the information and interactive functionality to be shown.

1. Verify Destination
	* First step of any web navigation from one page to another or interaction within website interface is to assure the user that the action they performed was the one they intended to do so they can comfortably wait while it loads without wondering if they need to click the Back button.
2. Provide primary content
3. Allow interation
4. Show secondary content
5. Below the fold

### Day 12: [Prefer DEFER over ASYNC](http://calendar.perfplanet.com/2016/prefer-defer-over-async/)
Async will not block HTML parsing but it will block rendering. So prefer DEFER over ASYNC when possible.

### Day 17: [Rise of Web Workers](http://calendar.perfplanet.com/2016/rise-of-the-web-workers/)
Web workers may be used to handle all the non-DOM manipulation tasks, especially when being used in a frame-work based environment like React and Angular. Needs more research though.

### Day 20: [Font-face syntax optimizations](http://calendar.perfplanet.com/2016/no-font-face-bulletproof-syntax/)
Remember that browsers use the first format they find that works—so if you don’t order them correctly the browser could waste resources (or render poorly) with a less-than optimal format.

	@font-face {
	 font-family: Open Sans;
	 src: url(opensans.woff2) format('woff2'),
	 url(opensans.woff) format('woff');
	}

First use woff2 and then woff. Doing this eliminates older browsers but, they'll still see the content on system defined fints.

### Day 24: [A tale of 4 caches](http://calendar.perfplanet.com/2016/a-tale-of-four-caches/)
There are different levels of caching on the browser and the behavior may vary based on the way it was loaded. eg: preloaded object may not persist across navigation as compared to a prefetched object. The location of cache also has implication on whether an object shows up in the Developer tools.

### Day 25: [Root Domain issues with CDN](http://calendar.perfplanet.com/2016/root-domain-cdn-performance/)
The ANAME/ALIAS is resolved by your DNS provider’s nameserver instead of by a recursive resolver (ISP, Google Public DNS, OpenDNS or other) and this may lead to end users being routed to a far-away CDN node and consequently getting a poor experience.

### Day 26: [PNG Image optimizations](http://calendar.perfplanet.com/2016/squeezing-png-images/)
PNG optimization using pngquant and zopflipng

### Day 27: [HTTP Push and Progressing JPEGS](http://calendar.perfplanet.com/2016/even-faster-images-using-http2-and-progressive-jpegs/)
Progressive images with HTTP/2 should help in renderimg images faster. To optimize it further, consider changing the scan settings at the image optimization work-flow stage to improve on the SpeedIndex.

### Day 28: [Links to interesting posts](http://calendar.perfplanet.com/2016/bonus-content/)

There are a lot of articles mentioned in here. I am going to focus on these 2 for now:

* [R for website performance optimization](https://github.com/craigfrancis/r-stats/blob/master/docs/intro.md)
* [2017 front-end performance checklist](https://www.smashingmagazine.com/2016/12/front-end-performance-checklist-2017-pdf-pages/)
