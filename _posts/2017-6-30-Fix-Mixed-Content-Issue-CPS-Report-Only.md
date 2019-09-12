---
layout: post
title: Fix mixed content issue with Content Security Policy report
comment: true
description: Mixed content can cause browser warnings. Finding such pages can be automated by using Content-Security-Polciy reports and I show how to do this.
---

One of the biggest challenges of migrating a website from HTTP to HTTPS is the issue of mixed-content warning. I had written on [how content-security-policy (CSP) can help in this HTTPS migration process](https://akshayranganath.github.io/csp-to-avoid-mixed-content/). However, one of the more fundamental problem is finding pages that have a mixed content issue.

![needle in haystack](https://res.cloudinary.com/akshayranganath-dflt/image/upload/blog/needle%2520in%2520haystack.jpg)

## What is the challenge?
When a webmaster wants to move a website from HTTP to HTTPS, the typical process is:

1. Enable HTTPs on all the sub-domains and the primary domain.
2. Add "[Content-Security-Policy: upgrade-insecure-requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)"
3. Find and fix mixed content warnings on all the pages
4. Start issuing a default HTTP to HTTPS redirect. There may be some SEO impact. Do refer to this excellent blog on [301 redirection for SEO](https://moz.com/blog/301-redirection-rules-for-seo).
5. Finally, enable Strict-Transport-Security ([HSTS](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet)) on all the domains

Step #3 could be especially hard for very large websites. Finding pages that have a mixed content issue is a deal breaker as well. If it is not done, then the browser will show the warning on console and disable the padlock icon as well. 

One of the ideas we had was, "What happens if we enable both the 'upgrade-insecure-requests' and HSTS headers?" That way, even when the base HTML references a resource as 'http', the other directives will force it be requested over HTTPs. Although this is true, at least in Chrome, the browser first flags the warning on mixed content and breaks the padlock first. The directives to convert to https seems to occur only when the actual resource is requested. This research was done by [Paul Calvano](https://twitter.com/paulcalvano) and posted the results on an internal forum at Akamai.

So the only solution to ensure that you do migrate successfully is to actually fix all insecure references to https.

<span style="color: red">
<b>ALERT!</b> <br />"Content-Security-Policy: upgrade-insecure-requests" is not available in IE browsers. Users on this browsers will not only get the warning but, the requests to embedded objects will never be promoted to HTTPs as well.
</span>

## Enter Content-Security-Policy Report 
Content-Security-Policy offers 2 flavors of implementation:

- [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to actually implement specific access restrictions
- [Content-Security-Policy-Report-Only](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) to simulate the implementation of a policy and report on the impact. 

For this blog post, our interest is in the reporting feature of CSP. The reporting can be setup by having an end-point defined. It could be on the same domain or on a completely separate domain. If you a website with hundreds of requests per day, you could consider using the free service at [https://report-uri.io/](https://report-uri.io/).

	Content-Security-Policy-Report-Only: default-src https: ; report-uri /csp-violation-report-endpoint/

Once it is setup, access violations are reported using a JSON format. So you'd see a report like this for a specific policy violation.

```json
{
  "csp-report": {
    "document-uri": "https://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}
```

Here's what this means:

- Error was fired on the base page at _https://example.com/signup.html_
- The URL blocked was _http://example.com/css/style.css_
- This http object was references in a _style-src_ object, ie a _link rel="stylesheet"_

## How does reports help?
When the reporting is setup, an alert is fired for each of the blocked request. By building some tooling, it would be very easy to generate a report providing a list of blocked URLs and the base page where the resource was blocked. So you could have something like this:

| Base Page | Blocked Resource | Referenced as | 
| --------- | ---------------- | ------------- |
| /signup.html | /css/style.css | style-src |

As a webmaster, you could then share it with the developer team. They could reference the base page tab and then fix the insecure reference. The development team could then change any __http://__ references to be relative reference __//__. This way, there is no dependency on forcing https. The embedded page will use the same protocol as the base page in such cases.

### Progressively Add Security
Since there are browser inconsistencies, one of the better ways to proceed with full site HTTPS migration is to use both CSP and CSP report-only headers. CSP header should perform the __upgrade-insecure-requests__. This will occur for all browsers other than IE. You can also use CSP report only to get a report of blocked URL. In this way, you'd get:

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
Content-Security-Policy: upgrade-insecure-requests;
```

- full site HTTPS behavior on browsers that do support upgrade-insecure-requests
- warning and mixed content messages that can be used to clean up the code.

There is no issue with using both headers.

## Conclusion
Migrating from HTTP to HTTPs could be challenging but, using the right set of CSP headers could help you make this transition a bit more easy. Unfortunately, the only clean way to get this done is to fix the references to any http request to use https. 