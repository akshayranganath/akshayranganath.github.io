---
layout: post
title: What metrics matter for SEO?
comment: true
---

*Google is very nuanced in the way it handles the Site speed. It appears to rely on some combination of TTFB coupled with rendering metric like Time to first paint / start render or DomInteractive. However, it is very hard to find the exact metric. So focus on delivering the best performance to user and Google will automatically rank you well!*

![measurement](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/measurement.jpg)

## Background
Before giving away the answer on which metric matters, let's first study the published studies around this topic.

Recently, there was a study published that seemed with the title [Does Site Speed Really Matter to SEO?](https://www.goivvy.com/blog/site-speed-matter-seo). Its main conclusion was that TTFB is the metric that strongly correlates to a higher google ranking. So, this was generally considered to be the smoking gun and the metric that needs to be optimized if you want a better ranking on Google.

A study pretty similar to this one was published a few years back by Zoompf. The study was summarized on the Moz site under the title [How Website Speed Actually Impacts Search Ranking](https://moz.com/blog/how-website-speed-actually-impacts-search-ranking). Again, the basic premise was that TTFB had a much higher correlation with Google ranking. Specifically, a site with a lower TTFB would be ranked higher on Google SERP (Search Engine Results Page). Metrics like Time to DocComplete and RenderTime were considered to have low or no correlation to the actual ranking by Google.

The third and more interesting study was published by an SEO analyst with a study titled [Does Speed Impact Rankings?](http://neilpatel.com/blog/does-speed-impact-rankings/). In this study the author concludes that:

- Although speed is important, it is just one of the many ranking factors
- User interface plays a big role. Create a very minimalistic interface may not help in better google ranking
- If you're starting on optimizing, start with TTFB

I like this study since the reason TTFB is considered important is that it is easier to measure and independent of the browser. All other metrics like Start Render, DomInteractive, etc rely on specific browser implementations. So optimizing the metric for say Chrome may or may not impact the actual SERP. However, optimizing TTFB would impact each and every user and bot.

Now, let's dive a bit more into the nitty-gritties of what matters for SEO.

## Sampling Bias?
Although I highly value the studies done by each of the above authors, there are some unexplained issues or problems with methodology. The <a href="https://moz.com/blog/how-website-speed-actually-impacts-search-ranking">first study</a> clears hints to this under the section <i>Tail wagging the doc</i>. Let me quote the statement:
<blockquote>Do these websites rank highly because they have better back-end infrastructure than other sites? Or do they need better back-end infrastructure to handle the load of ALREADY being ranked higher?</blockquote>
In other words, all of the studies have an issue where it's hard to go ignore this:

![Correlation is not causation](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/Correlation%2520is%2520not%2520causation.jpg)

(Digressing: If you want to read up on more serious issues related to <i>correlation is not causation</i> issue, head [over here](http://www.skepticalraptor.com/skepticalraptorblog.php/correlation-does-not-imply-causation-except-when-it-does/)).

To summarize, here's the issues with the studies:

- It only looks at one factor like TTFB: Pages from big companies could have higher TTFB but, it could also have very complex page that is favored by Google over similar speed but lesser complex page.
- It ignores the actual end user behavior: Suppose, there are 2 websites discussing the strategy used by 2 teams in a football match. Site A has detailed paragraphs while Site B has short summary followed by graphs, pictures and images. Site A could start out being ranked higher due to TTFB/start render but over time, Google will learn from user behavior and rank Site B higher
- It fails to combine the metrics for holistic view: TTFB may impact sitespeed. However, what if TTFB combined with start render and number of images on page is the real reason for higher ranking? The last factor is not even part of the analysis.
- Sampling bias in research terms: If the researchers had used terms like "tesla", there is a very high chance that brands associated with the name will rank higher, regardless of site performance. This is simply due to relevance. It is unclear on how well the terms were selected and if they were devoid of any such terms. Even if the search terms are filtered, Google has started to answer questions directly in search result page that ranking may have no impact. eg: If you search <a href="https://www.google.com/search?q=sampling+bias&rlz=1C5CHFA_enUS705US705&oq=sampling+bias&aqs=chrome..69i57j0l5.2732j0j4&sourceid=chrome&ie=UTF-8">sampling bias</a>, there is snippet explaining it and I never have to click on the results at all.

Due to these complexities, I wanted to explore a more robust and continual study and found the research by Moz pretty interesting.

## Study by Moz
Moz publishes a study called <a href="https://moz.com/search-ranking-factors">Search Engine Ranking Factors</a>. They use a combination of <a href="https://moz.com/search-ranking-factors/survey">correlation data</a> and <a href="https://moz.com/search-ranking-factors/survey">survey data</a> to get the results. This is quite a unique way of presenting the information.

First, let's look at the correlation results.

## Moz: Correlation data
Since I am at <a href="https://www.akamai.com/">Akamai</a>, my focus is on the metric associated with the <a href="https://moz.com/search-ranking-factors/correlations#2">Page-Level Keyword Agnostic Features</a>. and <a href="https://moz.com/search-ranking-factors/correlations#5">Domain level Keyword-agnostic Features</a>. Of this, a few things stand out:

- Server response time for this URL
- URL is HTTPS
- URL length
- URL has hyphens
- Domain has numbers
- Length of domain name and length including sub-domains

Apart from this, bulk of the metrics are related to the actual page content, links to the page, social interactions and mentions.

Now, let's look at the survey data.
## Moz: Survey data
The <a href="https://moz.com/search-ranking-factors/survey">survey results</a> have many common metrics and a few that are different from the correlation data. Here's the set of metrics interesting to me:

- Page is mobile friendly
- Page load speed
- Page supports HTTPS
- Page is mobile friendly (for desktop results)
- Search keyword match to domain
- Use of responsive design and/or mobile-optimized
- Quality of other sites hosted on the same block of IP Addresses

Here's a few factors that were considered to negatively impact the ranking:

- Non mobile friendly
- Slow page speed
- Non mobile friendly (for desktop results)

In short, mobile friendly / responsive sites are important for both mobile and desktop ranking coupled with site speed. And this makes sense since we're talking about a well designed site that works on both desktop and mobile and loads fast. And it precludes all the content related optimizations!

## Conclusion

After looking at the various research and surveys, it is clear that ultimately, Google or other search engines want to provide results that are relevant and popular. For this, they may be using a lot of ranking factors and it may keep changing over time. Trying to address a single ranking factor could be a very hard game. Instead, web masters should work with content creators to provide relevant content that users actually desire. It should be presented in a way that is pleasing and actionable. To aid in this, web maters could:

- Build mobile friendly websites
- Make it fast - across all the metrics
- Keep it secure and host on a relevant domain
- If needed, associate with a brand so that people and bots trust the page

All this boils down to <a href="https://twitter.com/mattcutts">Matt Cutts</a> simple statement:
<blockquote>You never want to do something completely different for googlebot than you'd do for regular users.

<cite><a href="http://www.seolium.com/seo/learn/show-different-pages-for-googlebot/">SEOLium blog post</a></cite></blockquote>