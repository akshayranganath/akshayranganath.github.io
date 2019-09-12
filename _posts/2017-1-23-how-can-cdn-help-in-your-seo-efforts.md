---
layout: post
title: How can CDN help in your SEO efforts?
comment: true
---

CDN can help in more than just improving site-speed for SEO. It can aid in better targeting, mobile friendliness, domain authority and more. Read about where CDNs are of use for your SEO efforts.

![standing on shoulders](https://res.cloudinary.com/akshayranganath-dflt/image/upload/blog/standing%2520on%2520shoulders.jpg)

## Background
This blog is a follow up for my earlier post on [What metrics matter for SEO?](https://akshayrangananth.wordpress.com/2017/01/18/what-metrics-matter-for-seo/). In this post, I'd like to explore how a CDN can aid in different aspects of SEO.

But, before we dig in, let's me quickly re-iterate the value proposition of using a CDN.
## Why use a CDN at all?
In the seminal study titled [It's the latency stupid](http://www.stuartcheshire.org/rants/latency.html), Stuart Cheshire tried to understand on which factor matters more for a "faster" website. Is it the bandwidth available or the latency? His conclusion was that beyond a point, bandwidth has no impact on the speed and it boils down to the latency.

So why is latency such a big speed killer? Simply put, the speed of data transfer over the internet is constrained by the distance from the user and the server. The best possible speed is at the speed of light. However, network components add some processing time and navigating the internet when distances are large means the speed is reduced.

CDNs deploy their servers such that end users talk to a server that is geographically and topographically closer to them. This way, the network hops and the network think time is reduced. This results in a website speeding up. The basic premise is that the user need only talk to the CDN server and not with the origin data center. So a user in Sydney, Australia will need to talk to a CDN server in Sydney instead of going all the way to a data center in New Jersey, USA. Anecdotally, this all makes sense.

CDNs also add better routing than the regular Internet's routing and thus improve on the latency.

With this quick primer, let's dig in to CDN and SEO!
## Role of CDN in SEO
I'd like to discuss the following aspects of SEO. These are the areas where a CDN could help. I've pulled up these SEO factors from Moz's report on [Ranking factors](https://moz.com/search-ranking-factors/).

- Server response time
- HTTPS / Secure sites
- Domain authority
- Mobile friendly website
- URL Optimization
- (Indirectly) Quality of other sites hosted on the same block of IP Addresses

### Server response times
This metric is generally translated as TTFB in most studies that have looked at correlation data. However a CDN can help not just in improving the TTFB but, also in reducing the overall latency and thus improving other metrics like page load, start render or speed index.
#### Caching
The most economical and simple solution is to cache the page at the CDN. This should be sufficient as an immediate step towards a better SEO. If our mate in Sydney has to only talk to the CDN server in her city alone, it would be much faster than a request traveling to the server in New Jersey! Caching itself is more nuanced. An object could be cached at multiple places as explained in this post titled [Yoav Weiss](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/">A tale of 4 caches</a>by <a href="https://twitter.com/yoavweiss). For our purpose, let's focus on caching at CDN.
#### Streaming of response
In the HTTP world, a response can be generated in 2 ways:

- Full response: Server waits until the entire response is created, potentially compresses and sends it down.
- Chunking the response: Server starts to respond as soon as the bytes are available.

Full response is useful for smaller objects or objects that don't have any processing. These would be objects like images, stylesheets, static HTML pages and pre-generated PDFs. Such objects are very good candidates for caching as well.

Chunking is useful for dynamic pages like personalized home page, reports, listing for hotel/flight reservations and so on. These pages could be cached but, may need to be qualified. eg: Cache if a user is not logged in.
#### Perceived performance optimizations
Once the basic caching optimizations are done, further tweaks could be made like lazy loading images and dynamically populating the page content. Google has confirmed that their bots are able to handle AJAX and so this is a safer tweak to make.

*Does Bing support AJAX requests? I have not been able to find a document confirming this.* 
#### Content targeting
Since CDNs are aware of the user's geographic location, you could target the site better. The same mechanism can be used to segment the cache as well so that the latencies are reduced and server response time across the different geo is optimized.
### HTTPS
Google has been pushing for a secure websites. To encourage users, Google [Let's Encrypt](https://plus.google.com/+JohnMueller/posts/PY1xCWbeDVC">announced</a> that it would not penalize users for the HTTP to HTTPS redirect. Setting up HTTPS is easier with a CDN. It is cost effective as well since Certificate authorities like <a href="https://letsencrypt.org/) provide free SSL certificates.

However, HTTP to HTTPS migration is a lot more than just changing the protocol, as experienced by [Wired](https://www.wired.com/2016/05/wired-first-big-https-rollout-snag/). So plan it out thoroughly, even when using a CDN.
### Mobile Friendly Websites
Building mobile friendly / responsive websites is [Responsive Web Design Makes It Hard To Be Fast](https://www.youtube.com/watch?v=8IE3QWOYKx8">hard</a>. The primary challenge is to identify if a device is mobile/tablet or desktop. This could be avoided by building a purely responsive website where everybody gets the exact same set of resources and the browser displayes according to the device capabilities. However, it causes the most amount of resource bloat for the smallest of the devices. For more on issues around the responsive design, read Guy Podjarny's blog post <a href="http://www.guypo.com/responsive-web-design-is-bad-for-performance-there-i-said-it/).

A CDN could help in the responsive design / mobile friendly websites in multiple ways:

- <b>Device detection</b>: A CDN could tell you if a device is a mobile / tablet / desktop. eg: Akamai's solution here provides details on different aspects of the device:[http://edc.edgesuite.net/](http://edc.edgesuite.net/). Using this, a server could vary the response and reduce the resource bloat
- <b>Mobile specific connection optimization</b>: A CDN could detect the network capabilities and enforce better optimizations like image conversions, degrading image quality, and improving connection timeouts.
- <b>CDN logic</b>: On the CDN, logic can be implemented to serve different resources based on device type and reduce the bandwidth used. This will help in speeding up the site and better user experience.
- <b>Site migration</b>: When moving from a m.dot website to a new responsive website, effort is required to handle soft launch and to gradually migrate the bots. All of this routing decisons can be made on at the CDN layer.

### URL and Domain tweaks
CDNs are like proxies. They can take request one an incoming domain+URL and send the request to totally different domain and URL. So SEO friendly domains could be setup, especially for domain shards. Similarly, user friendly URLs could be used for publishing through the CMS platforms. At the CDN, these URLs could be translated to the format expected by the back-end systems. This would help even your end users and ultimately result in better values from Google indexing and potentially a higher ranking on search results.

For example, you could have a publishing URL like "www.mydomain.com/coats/black-winter-coat". At the CDN, this could be translated to the CMS URL as "www.mydomain.com/p/a/ac?pid=123".

Such optimizations also plays well with the maximum character length restrictions recommendations of a CDN as well.
#### Domain Authority
First let's understand the meaning of domain authority. Moz defines it as as follows:
<blockquote>Domain Authority is a score (on a 100-point scale) developed by Moz that predicts how well a website will rank on search engines.
<cite>[Moz: Domain Authority](https://moz.com/learn/seo/domain-authority)
</cite></blockquote>
##### What's the issue
Basically, if you are amazon.com, you just get ranked higher than mom&pop.com. It's because Google has seen amazon.com being delivering results that are relevant and popular. It has a brand that is trusted. Hence Google rewards it by giving it a higher domain authority.

Other factors that goes into this authority is the use of relevant name. For example, a website about "Web Analytics" named webanalyticsexplained.com will rank better than if it were named as johndoesblog.com. Similarly, domain names that have hyphens and numbers are considered to have lower trust rating and marked down.

However, domains are hard to setup and managing them would involve effort and time. Case point would be an organization hosting a big event. Suppose www.mycompany.com is hosting a super famous SEO conference called "Best SEO Meet Ever (BSME)". The IT team would find it easier to simply re-use the existing data center and existing firewall rules. In such a case, hosting the conference site on a new domain "www.bsme.com" may be get complicated.
##### CDN To the rescue
With a CDN, domains can be spun up and brought down while the origin data center details remains unchanged. So the CDN could be told to send requests for www.bsme.com to the parent site on a special path like www.mycompany.com/bsme/. Once the event is over, the CDN could even setup a 301 redirect to the parent site so that the audience earned are not lost.

Bottom line: It is possible to target keyword with a domain and setup it up on a CDN than trying to do the entire setup at origin data-center.
### Other CDN optimizations
#### Handling Failures
When a site suffers outage and Bots try to index and receive error, they are confused. With a CDN it would be possible to setup fail-over mechanisms. Origin failures that are temporary could be coded to respond with a 500. If a maintenance is planned, the CDN can be coded to respond with a 503 and a "Retry-After" header. In call cases, CDN could respond with a simple HTML message that explains the issue as well so that the real users are not left in confusion.

This ensures bots get the right message and don't index the wrong page or ignore a site for longer than necessary.
#### Stale pages / Redirects
When websites change, they leave behind a legacy of 404s. They are bad for users and are a missed opportunity for SEO. Using CDN, these 404s can be corrected to respond with a redirect to the updated content. This is both a good user behavior and a way of retaining the link juice.

Do note that redirects have specific meaning with respect to SEO. Have a look at this blog post for more details.
#### A/B, Multivariate testing
CDNs being proxies can act as a control point for your multivariate testing. At the CDN you could definte the logic like sending 10% of mobile traffic to a new site design and then tracking them with analytics or RUM to measure the success criteria.
### Conclusion
In this post, I've tried to cover the reason why a CDN can help in SEO efforts. Apart from improving the latency and bumping up the site speed, CDNs could help in addressing issues of domain authority, managing vanity URLs and targeting efforts.

If you'd like to know more, DM me [@rakshay](https://twitter.com/rakshay).