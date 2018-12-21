---
layout: post
title: Quick Primer to Single Page Application (SPA) and Tracking SPA pages
comment: true
description: Understand the history API that powers Single Page Application (SPA) and learn how this is leveraged by real user monitoring solutions like mPulse for reporting performance of SPA pages .
image: /images/mobile-phone.jpg
---

## tl;dr;
SPA relies on HTML 5 History API. Using mPulse's SPA settings, we can track the soft-navigation. Soft-navigation is when the URL changes on the browser but, it doesn't actually re-load the entire page. 


I was trying to understand the working of Single Page Applications and came across the article [Using the HTML5 History API](https://css-tricks.com/using-the-html5-history-api/) by [CSS-Tricks](https://css-tricks.com/). In this excellent article, they explain the concept of the HTML5 history API. Normally, when you navigate from one URL to another, the browser re-loads the whole page. However, you may want to change certain parts of the page and not re-load the entire page. This could be accomplished by using AJAX requests. However, if you just use AJAX, the URL of the page remains same. So if you need to share this specific view, there is no way to do so.. That is where the History API comes into picture..

![mobile](/images/mobile-phone.jpg)

## Understanding the History API

The History API is able to manipulate the URL without forcing the browser to load the entire page. It offers 2 main functions `history.replaceState` and `history.pushState`. 

* `history.replaceState`: This just changes the URL but, does change the navigation flow in the browser. So a user hitting the back button will not go back to original view of this SPA page but, to the previous page from where they came from.
* `history.pushState`: This method will replace the URL _and_ record the current view information. So a user hitting the back button will go back to the original view of the SPA page.

For more detailed explanation of the 2 methods, refer to the official documentation at [Manipulating the browser history
](https://developer.mozilla.org/en-US/docs/Web/API/History_API) on the MDN site.

## Measuring performance of SPA navigation

SPA introduces a challenge to measuring performance. On regular webpages, browsers are collecting a host of performance related information based on the [NavTiming API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API). However, when a SPA navigation occurs, the page doesn't really re-load. Since this does not occur, the browser is not rebuilding the DOM. As a result, it is not able to report on the performance associated with the navigation.

To work around this, Real User Monitoring (RUM) solutions like [mPulse](https://developer.akamai.com/akamai-mpulse) rely on the history API. By observing the changes to this plugin, it is able to detect a navigation and then measure the timing information.

## Testing SPA Page

Since I work at Akamai, I had access to mPulse. So I thought of trying to see how this works. I created a dummy website using the code for [Ghostbusters SPA](https://css-tricks.com/examples/State/) from the CSS-Tricks website. In their example, we have the following:

* Landing URL: https://css-tricks.com/examples/State/
* SPA Navigation: 
	* https://test-woocommerce.akshayranganath.com/peter.php
	* https://test-woocommerce.akshayranganath.com/ray.php
	* https://test-woocommerce.akshayranganath.com/egon.php
	* https://test-woocommerce.akshayranganath.com/winston.php

In effect, when the user first lands at the home page, it is a regular navigation. This is termed as `SPA Hard` in mPulse. All other navigations within this sub-section of the website is termed `SPA Soft` or soft navigations. If a user were to directly use the URL for any of the character, it would cause the browser to load the page normally and be measured as a `SPA Hard` navigation event.

### Test Results

When I setup the tests, the median page load time shows up as 15s based on 8 views. This included both SPA (SPA-Soft) and non-SPA (SPA-Hard) timing information.

![all beacons](/images/spa_all_beacons.png)

When I look at the performance of hard navigation, the page load time from 4 views now jumps to 17.4s.

![spa hard beacons](/images/spa_hard_beacons.png)

If I now filter to just the soft navigations, the page load time drops to 129 ms from 4 views.

![spa soft](/images/spa_sort_beacons.png)

If we never had the soft navigation beacons, we may have mis-interpreted the site performance as over 17s. However, this represents the initial view that includes the time to load SPA framework. However, the pages speed up dramatically once the framework is ready. Without the information on soft navigation calls, you may mis-interpret the engagement on your website. A user in this case could load the home page and access 4 other sub-pages. Without SPA tracking, your RUM analytics may show a user just accessed 1 page and bounced. This could corrupt your bounce rate and conversion measurements.

### Take-aways

If you have a SPA based website you could be missing critical performance information signals or mis-interpreting the data.

* Enable SPA tracking if you have designed your page to use SPA frameworks.
* Understand if you have the right filters in place when looking at numbers. Mixing the SPA and non-SPA navigation will give you numbers that may not be actionable to your teams.
* On other hand, missing SPA navigation will reduce the engagement and conversion metrics. So carefully instrument their measurement for a holistic picture.

Hope this has been useful.