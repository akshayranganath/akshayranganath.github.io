---
layout: post
title: Perceptual SpeedIndex - What, Why and is it necessary?
comment: true
description: Recently a paper was released about perceived performance around a new metric called SpeedPerception. Although interesting, it does not appear to be practical like SpeedIndex, TTFB or other metrics.
image: https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/book_open.jpg
---
Recently, a [new paper](https://arxiv.org/abs/1704.01220) was released about [perceived performancee](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/). This paper calls for a new way to measure the perception of speed with a tool called SpeedPerception. It proposes improvements to [SpeedIndex](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) for modeling the user's perceived speed. The study was interesting and here's my thoughts on it.

Here's my notes and thoughts about the paper.

![open book](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/book_open.jpg)

## Perceived Performance

Until a few years back, a website's performance was measured using the Javascript's _onLoad_ event. It was easy to measure and available across all browsers. However, over time, people realized that pure metrics don't matter if it is not relate to what the users think. This is when the concept of **Perceived Performance** was introduced. I find this explanation quite useful:


>Perceived performance refers to how fast a user thinks your website is, not necessarily how fast your technical stats say it is. When it comes to optimizing your websites, its what the user thinks that really matters, not the technical wizardry that’s going on behind the scenes. <br />
_Source: [An Introduction to Perceived Performance](http://blog.teamtreehouse.com/perceived-performance)_

### Hows does this impact measurement?

Basically, perceived performance says you need to measure the speed as __perceived__ by the users. So things like bytes-downloaded, number of objects on page or number of images may be meaningless. Time metrics like TTFB, domComplete and so on may be useful for finding the trend but, they still don't convey what the user *feels* about speed.

To address this challenge, (Pat Meenan)[https://twitter.com/patmeenan] introduced the metric [SpeedIndex](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index). The idea was to identify the time it took for rendering above the fold content and the pace at which this content was rendered. As per Pat's documentation, it is calculated as follows:
![SpeedIndex formula](https://sites.google.com/a/webpagetest.org/docs/_/rsrc/1472780188199/using-webpagetest/metrics/speed-index/speedindexformula.png)

Bottom line: if a page loads above the content faster the SpeedIndex will be lower. And this is a good thing. However, it could be impacted by things like carousals, ad-insertions and so on. The general idea is that users will approximately feel a site is fast if above the fold content loads faster.

## SpeedPerception Experiment
[InstartLogic](https://www.instartlogic.com/)'s team of Qingzhu Gao, Parvez Ahammad, and Prasenjit Dey have published a paper titled __[Perceived Performance of Webpages In the Wild](https://arxiv.org/abs/1704.01220):__ *Insights from Large-scale Crowdsourcing of Above-the-Fold QoE*. In this paper, they talk about a new way of measuring the perceived performance using the tool [SpeedPerception](http://speedperception.meteorapp.com/). It is a very unique approach and tries to address this challenge of perceived performance:

>..understanding the relationship between static measurements and user experience is non-trivial and hard to generalize across websites for a key reason: a user’s perception of speed (when presented a single webpage in isolation) is subjective


The goal of the study was 3-fold. I am praphrasing the first 2 here. The third one is related to the tool itself.

* H1: No single existing metric perfectly models / measures perceived performance.
* H2: Visual metrics are better indicators of perceived performance

These are pretty [commonly understood](#addendum). So it was not too surprising that they proved them. However, it was interesting that they introduced a lot of new metrics to measure the perceived performance.

### Perceptual SpeedIndex
As part of the article, the authors present metrics titled "Perceptual SpeedIndex". Essentially, it does a similar "area under the curve" computation. In both SpeedIndex and Perceptual SpeedIndex, the data is provided by the screen shots during the page loading cycle. In the case of SpeedIndex, a pixel-by-pixel difference is produced and this difference is integrated over time.

In the case of Perceptual SpeedIndex, a different technique called *[Structural Similarity Index](https://ece.uwaterloo.ca/~z70wang/research/ssim/)* is used instead. The aim of this method is to guess if a human can _perceive_ the difference between 2 images. Although pixels may have changed, it may or may not reflect as a difference to a human user. Using software like [DSSIM](https://github.com/pornel/dssim), difference in images over time can be computed. By integrating this difference, the Perceptual SpeedIndex is computed.

## What's good?
This metric looks interesting since it is relying on actual differences that humans see and not pixel-by-pixel comparison like existing SpeedIndex. This makes it closer to whay humans actually perceive rather than bland numbers.

It is similar to the the concept being proposed by [Sergey Chernyshev](https://twitter.com/sergeyche) in his talk *[Designing speed with progressive enhancementt](https://www.slideshare.net/SergeyChernyshev/designing-speed-with-progressive-enhancement-ny-web-performance-meetup-68078415)*.

## What's not so clear?
Although the idea is very interesting, the measurement technique needs to be tested more throughly. In most cases, the 2 metrics closely follow each other. Here's what the author says about the SI and Perceptal SI:

>In large-scale empirical studies that we conducted (using 500+ Alexa top mobile webpage videos collected via WebPagetest), we find that SI and PSI are linearly correlated ( at 0.91, to be precise). This means most of these webpages aren't visually jittery. In the cases where visual jitter or layout stability problems exist, SI and PSI differ quite a bit._[Perceptual SpeedIndex for measuring above-the-fold web performancee](https://www.instartlogic.com/blog/perceptual-speed-index-psi-measuring-above-fold-visual-performance-web-pages)_


So the real use case would for pages where:

* Page render is impacted due to layout changes due to injected ads
* Delayed font-loading, etc.

Considering that page layout changes due to injected ads is a very bad practice anyway, the new metric does not help much. Another challenge would be to re-educate the performance team on a new metric just when they were beginning to learn/understand the concept of SpeedIndex.

Although not insurmountable, the question is if it would be worth the effort of re-education when the 2 metrics correlate at over 0.9 for most use cases.

#### Edit: 16-May-2017
On a question around Perceptual SpeedIndex and its availability on WPT, this is what Pat Meenan says:

>It's a variant of the Speed Index code that uses SSIM instead of histograms for checking completeness. 
The main difference is that it is sensitive to page elements moving (i.e. the page shifting down a few pixels would radically change the completeness %). That could be a good or a bad thing depending on how you felt about layout moving.
Source: https://www.webpagetest.org/forums/showthread.php?tid=14883

## Closing thoughts
In the concluding part of the paper, the authors describe their efforts to figure out the right combination of metrics that closely approximate to the actual perceived performance. As per the study, even with a combination of all existing performance metrics coupled with SpeedIndex and Perceptual SpeedIndex, we can predict the actual perceived performance only at an accuracy of around 75%. Meaning, there is a lot of scope to figure the one metric that can exactly explain the perceived performance.

If you are interested in a similar research that I had done, feel free to check these blogs:

* [Metrics research - single document](https://community.akamai.com/docs/DOC-2021)
* [Metrics research - part 1](https://community.akamai.com/community/web-performance/blog/2015/05/11/what-web-performance-performance-metrics-do-i-track-part-1)
* [Metrics research - part 2](https://community.akamai.com/community/web-performance/blog/2015/05/11/what-web-performance-performance-metrics-do-i-track-part-2)
* [Metrics research - part 3](https://community.akamai.com/community/web-performance/blog/2015/05/11/what-web-performance-performance-metrics-do-i-track-part-3)
* [Metrics research - part 4](https://community.akamai.com/community/web-performance/blog/2015/05/11/what-web-performance-performance-metrics-do-i-track-part-4)


## Addendum
As such, these hypothesis are not ground breaking. For example, [Tammy Everts](https://www.soasta.com/blog/author/teverts/) had published a blog about the cornucopia of measurements titled *[Metrics, metrics everywhere (but where the heck do you start?)](https://www.soasta.com/blog/metrics-metrics-everywhere-but-where-the-heck-do-you-start/)*

The argument in this presentation was that the metric to be measured varies by your role in the organization. There is never an easy answer to it and performance should cannot be boiled down to a single number. eg: Here are the metrics that are currently well known - and more keeps getting added over time!

![Lots of metrics](https://www.soasta.com/wp-content/uploads/2015/05/metrics-grid2.png)