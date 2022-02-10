---
layout: post
title: Notes from Making Instagram Fast articles
comment: true
description: Instagram Engineering published 4 part blog on web performance optimization. Here is my notes from these articles.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/lmpszilmigl2dkkmbure
---

## &tl;dr;
> [Instagram Engineering](https://instagram-engineering.com/) published a series of 4-part blog series on how they improved the performance on their website. Here's my notes from these articles for a quick overview.

![child racing on a go-kart](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/lmpszilmigl2dkkmbure)


## Part 1

[Making Instagram.com faster: Part 1](https://instagram-engineering.com/making-instagram-com-faster-part-1-62cc0c327538)

* intelligent pre-loading of fonts and GraphQL queries
	* _Approach 1_: (suggested by [Chrome team](https://medium.com/reloading/a-link-rel-preload-analysis-from-the-chrome-data-saver-team-5edf54b08715))Have `preload` tag after the critical `<script>` tags
	* _Approach 2_: (implemented by Instagram) Use preload for all critical tags and order them in the order it is necessary.
* preloading images:
    * Preload images when the browser is free. This can be done by using the [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) API. (There is more to this but, this is a good start)
    * For the lazy-loaded images, load it sequentially so that the image closes to viewport gets rendered first.

## Part 2
    
[Making Instagram.com faster: Part 2](https://instagram-engineering.com/making-instagram-com-faster-part-2-f350c8fba0d4)

* Pushing data early
    * _HTTP Chunked Transfer_: This can split the HTML response and has universal support (as compared to complex HTTP/2 push). Every platform has some kind of streaming response library - use that.
    * _Push response/cache first approach_: This implementation is a bit involved and custom. For general websites, my gut feel is that a ServiceWorker based approach would work.
    
## Part 3

[Making Instagram.com faster: Part 3 — cache first](https://instagram-engineering.com/making-instagram-com-faster-part-3-cache-first-6f3f130b9669)

* Cache first approach:
    * This is basically providing a mechanism to load the entire view and queue up the actions before the first load.
    * It is similar to the approach of git branch with the website as the master.
    * For most regular website, this is similar to providing an offline cached experience. 
    * My take-away is simply to cache as much as possible.
* API:
    * This is specific to the caching implementation.
    * My take-away is that there needs to be a robust mechanism for cache management and XHR call management so that they don't block and cause cache collisions.
    
## Part 4

[Making instagram.com faster: Code size and execution optimizations (Part 4)](https://instagram-engineering.com/making-instagram-com-faster-code-size-and-execution-optimizations-part-4-57668be796a8)

* Send less code, especially to lower end devices:

>There’s a common assumption in the industry that the size of the JavaScript that gets downloaded over the network is what’s important (i.e. the size post-compression), however we found that what’s really important is the size pre-compression as this is what has to be parsed and executed on the user’s device, even if it’s cached locally.

* Reduce JS code size:
    * JS size, uncompressed more strongly determines performance if it is in the critical render path.
    * Size of JS for lazy loaded component has lower impact on performance.
    * One simple approach is to use the `require` in a lazy fashion. This will ensure that the modules are loaded only if the code execution path reaches a point the really requires this module.
* Move to ES2017
    * Browser support is quite good.
    * Run your own checks and keep 2 builds if that is absolutely required. One build will be ES2017 and another one could be ES5 or polyfill depending on user base.

## Summary

Preloading is a big win, if you can use it correctly. Don't under-estimate the power of [boring technology](https://mcfunley.com/choose-boring-technology) like [HTTP chunked encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding). Use browser-native features like ES2017's [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to reduce code. For lazy-loading of images, consider [browser-native methods](https://web.dev/native-lazy-loading/) and where it is not available, try to implement standards based solution like [IntersectionObserver](https://medium.com/walmartlabs/lazy-loading-images-intersectionobserver-8c5bff730920) and [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) API.