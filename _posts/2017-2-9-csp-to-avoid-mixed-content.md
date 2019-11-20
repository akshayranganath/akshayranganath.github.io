---
layout: post
title: How to auto-upgrade to HTTPS (aka avoid mixed content)?
comment: true
description: When migrating to a full HTTPS site, Content-Security-Policy and Upgrade-Insecure-Requests could be your friend. This post tells you the use of the headers and the mechanism to implement it during the site migration.
---
Migrating to a full HTTPS site is hard. Using <b>"Content-Security-Policy: upgrade-insecure-requests"</b> can reduce the "mixed-content" errors for embedded objects. Finally, use <strong>Strict-Transport-Security</strong> header to secure the domain its sub-domains.

![CSP logo](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/CSP%2520logo.jpg)

## HTTPS Migration - The Challenge
In the recent past, there has been a lot of push to move websites to HTTPS. Google has been dangling the carrot of a better ranking by making [HTTPS as a ranking factor](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html" target="_blank).

However, the biggest issue is timing the migration. If the primary site moves to HTTPS and the embedded objects do not, then the browser will block the resources. It is better to move the embedded objects over to secure site and update the source code to change the reference from HTTP to HTTPs.

Yet, source code change is a long drawn and difficult process. In such a scenario, Content-Security-Policy will be your friend.
## Content-Security-Policy (CSP)
As per [W3C, CSP](https://www.w3.org/TR/CSP3/) is:
<blockquote>..a mechanism by which web developers can control the resources which a particular page can fetch or execute, as well as a number of security-relevant policy decisions.</blockquote>
One of the directives is the [upgrade-insecure-requests](https://www.w3.org/TR/upgrade-insecure-requests/). When this directive is used as a header or a HTML meta-tag, the browser auto-upgrades requests to HTTPS.

As per documents, 2 kinds of links are upgraded:

- Passive mixed content
	* <strong>Embedded links</strong>: These are the references to images, stylesheets and javascripts.
	* <strong>Navigational links</strong>: These are the links placed in the tags.
- Active mixed content
	* These are the AJAX calls / XHR requests


However, not all requests are upgraded. We learnt this the hard way during a migration.
### Gotcha# 1: Browser support
First off, not all browsers support CSP. As per [caniuse.com](http://caniuse.com/#search=upgrade), Firefox, Chrome and Opera are the browsers that support this directive. IE, Edge and Safari currently do not support it.

![Can I use: CSP](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/Can%2520I%2520use%253A%2520CSP.png)

### Gotcha# 2: Exceptions
Although the W3C document mentions that navigational links are upgraded to https, both Chrome and Firefox have different interpretation

Here's what Mozilla says [about navigation links](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests):

	- Links on same domain are upgraded
	- 3rd party links are not upgraded

Chrome on the other hand [says this](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/fixing-mixed-content):
<blockquote>Note that having http:// in the href attribute of anchor tags (<a>) is often not a mixed content issue, with some notable exceptions discussed later.</a></blockquote>
So Chrome will not upgrade links to HTTPS.
## Gotcha# 3: Third Parties
Third party content is not upgraded. Since browsers don't know if those domains support HTTPS, they don't upgrade. In the current versions, such content is silently blocked. You can find these blocked content by opening the developer tools in Firefox/Chrome and navigating to the console window. It would looks like this example:

![Active mixed content errors](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/Active%2520mixed%2520content%2520errors.png)

## What's next?
By using the CSP header, most of the embedded object errors can be removed. CSP supports [reporting](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Enabling_reporting) as well. By enabling this, you as the content publisher can get the set of URLs being blocked/warned by browsers and fix in the source code.

A subsequent change would be to use the [Strict-Transport-Security](https://www.w3.org/Security/wiki/Strict_Transport_Security) header. This header should be enabled after the migration is complete and baked in. When this is used, the browser ensures that all requests to the domain (and sub-domains) are made over HTTPS. This will eliminate the short-comings the plain upgrade header.
## How/Where to implement these changes?
As the upgrade directive and STS can be implemented with HTTP headers, you can introduce it at your web-server/proxy level or with your CDN. For more details on how CDN can help in such a setup, refer to my blog on "[How can CDN help in SEO efforts?](https://akshayrangananth.wordpress.com/2017/01/23/how-can-cdn-help-in-your-seo-efforts/)"