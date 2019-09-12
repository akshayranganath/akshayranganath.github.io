---
layout: post
title: Useful SEO Tags - Part 1
comment: true
---

In this blog post, I analyze the distribution and the use cases for the different kinds of __link__ tags. Starting with _link rel="canonical"_, I dig into the distribution of the other attributes and use cases for the tag.

## SEO Tags in the wild
[Rand Fishkin](https://twitter.com/randfish) published a [whiteboard Friday](https://moz.com/blog/category/whiteboard-friday) on the topic of [which tags matter for SEO](https://moz.com/blog/which-page-markup-tags-still-matter-for-seo-whiteboard-friday). While reading it, I was intrigued to check the kind of tags that are actually being used in the wild.

So I thought of running my own research to see the kind of trends and usage of tags across the Alexa Top 1000 websites. Since I did not have access to the Alexa list, I used the top 1000 URLs from [HTTPArchive](http://httparchive.org/) instead.

In this first part of the blog, I summarize my findings on the  tag.

## Meta Tags
One of the first things I checked was the use of the tag. This was interesting to me after I learnt the foundational tag __link__ and a slightly less used but interesting use of __link canonical__ for geo targeting.

For the top websites, I assumed that [link rel="canonical"](https://moz.com/learn/seo/canonicalization) would be quite relevant and [hreflang](https://moz.com/learn/seo/hreflang-tag) would play an important role in geo-targeting. However, my research did have a limitation in that I was accessing just the home page. So, the potential to see the canonical links would be fewer.

I was correct in this assumption. Of the top 25 use of _link rel_, here's the distribution I saw:

| Attribute | Count |
| --------- | ----- |
| alternate | 4046 |
| stylesheet | 2550 |
| dns-prefetch | 1269 |
| apple-touch-icon | 1026 |
| shortcut | 585 |
| icon | 528 |
| canonical | 414 |
| apple-touch-icon-precomposed | 305 |
| preconnect | 170 |
| search | 155 |
| publisher | 101 |
| manifest | 69 |
| mask-icon | 49 |
| image_src | 42 |
| chrome-webstore-item | 35 |
| preload | 33 |
| next | 30 |
| shortlink | 25 |
| edituri | 21 |
| wlwmanifest | 20 |
| prefetch | 13 |
| pingback | 12 |
| profile | 11 |
| author | 11 |
| apple-touch-startup-image | 8 |


I have uploaded the raw data here: [https://gist.github.com/akshayranganath/9e953a32c6ed8066f006301bc02bef1c](https://gist.github.com/akshayranganath/9e953a32c6ed8066f006301bc02bef1c).

Here's the distribution again: 

![SEO Link Distribution](https://res.cloudinary.com/akshayranganath-dflt/image/upload/blog/SEO%2520Link%2520Distribution.png)

When I looked at the &lt;link&gt; tags, I wasn't sure on the usage and had to do a bit of read-up. Here's a summary of some of the tags:

* __rel="search":__ As a user, you can configure alternate search engines like "imdb" on browsers. This tag provides a mechanism to provide hint that your site has the ability for such a search functionality. The concept is called <a href="http://www.opensearch.org/Home">OpenSearch</a> and you can read about it's use at <a href="https://aaronparecki.com/2011/07/11/3/how-to-let-google-power-opensearch-on-your-website">Aaron Parecki's blog</a>. And here's a sample OpenSearch file from Airbnb: https://www.airbnb.com/opensearch.xml.</li>
* __rel="image_src"__: As a site owner, you may have a preference on which image is used as an icon to represent the website. This tag could be used to specify the icon. For more, read this <a href="https://stackoverflow.com/questions/19274463/what-is-link-rel-image-src">stack overflow discussion</a>.</li>
* __rel="next"__: If you have a paginated website and would like to provide hints to the search engine bots using this tag. An associated tag is <strong>rel="prev" </strong>for pointing back to the previous page. More details at <a href="https://webmasters.googleblog.com/2011/09/pagination-with-relnext-and-relprev.html">Google Webmaster tools blog.</a></li>


## Conclusion
In the Alexa Top 1000, &lt;link&gt; tags are heavily used for SEO purpose but, the majority of the usage is for geo-targeting. A lot of other nifty mechanisms are being put to use like specifying the pagination or the preferred icon image. However, these seem to be less popular than the basic use of targeting and canonicalization.

Apart from SEO, the other use of the tag appears to be for performance optimization. Specially, "__[resource hints](https://w3c.github.io/resource-hints/)__" in the form of *dns-prefetch*, *preconnect* and *preload* are being used and they feature in the top 25 uses of &lt;link rel&gt; tag. To know more about this, have a look at [Yaov Weiss](https://twitter.com/yoavweiss?lang=en)' presentation from [Velocity New York](https://yoavweiss.github.io/velocity_nyc_resource_hints/#1).
