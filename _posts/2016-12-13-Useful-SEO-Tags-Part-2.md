---
layout: post
title: Useful SEO Tags - Part 2
comment: true
---

In this second part of the blog series, I look at the distribution on the usage of the &lt;meta&gt; tags across the Alexa top 1000 website.

## Introduction

In the [first part of the blog](https://akshayranganath.github.io/Useful-SEO-tags-part-1/), I looked at the pattern of use for the  tag. In this blog post, I'd like to focus on the meta tags. If you'd like to see all the possible options, please refer the [meta-tags](http://www.metatags.org/all_metatags) website.

## Meta Tags that matter
Moz has an excellent article by [Kate Morris](http://twitter.com/katemorris) on the set of [meta tags that matters](https://moz.com/blog/the-wonderful-world-of-seo-metatags). In this, it lists just 2 tags as essential. These are:

* meta-description
* meta-content-type

There are bunch of others that are listed as being optional and should be used only if the default behaviors have been changed.

With this knowledge in hand, I wanted to check if the Alexa Top 1000 websites are sticking to the best practice or if there is a heavy use of the tags with no real returns.

## Meta-Tag distribution
Let's start by looking at the top 25 meta-tags being used. I have published the entire distribution here: [https://gist.github.com/akshayranganath/ad0b170550714e2a77612bf0f81057da](https://gist.github.com/akshayranganath/ad0b170550714e2a77612bf0f81057da).

| Attribute |  Count |
| --------- | ------ |
| content |  14574 |
| name |  6205 |
| itemprop |  4316 |
| property |  3301 |
| http-equiv |  1219 |
| charset |  439 |
| itemscope |  214 |
| itemtype |  214 |
| itemid |  212 |
| data-reactid |  161 |
| id |  94 |
| class |  47 |
| data-app |  42 |
| value |  37 |
| data-type |  36 |
| lang |  23 |
| data-react-helmet |  17 |
| data-ephemeral |  17 |
| data-dynamic |  13 |
| xmlns:og |  12 |
| scheme |  11 |
| data-page-subject |  7 |
| xmlns:fb |  7 |
| data-ue-u |  7 |
| prefix |  3 |

![meta tag distribution](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/meta%2520tag%2520distribution.png)

This is a simplified check since some use of the meta tag is by a combination of values. For example, the meta-description would look like this:

	<meta name="description" content="This page is on SEO stuff.">


My first version of the script is does not capture this dependency but, I hope to add that capability over the next few weeks. At a very high level, it looks like most sites do follow the best practice. Schema.org tags are being heavily used and this makes sense due to the growing importance and the ability to control the behavior of results in SERPs.

## Strange Use-Cases
I did see the meta tags being put into use for some strange uses. For example, and are not even required but, are quite heavily used. Here's a use that seems to make absolutely no sense
	
	<meta content="id" name="language" />

## Conclusion
Meta tags appear to have been used by the top 1000 sites in the right intended manner, for most part. I plan to re-visit this and explore the usage oftag and break into the usage pattern. Stay tuned.