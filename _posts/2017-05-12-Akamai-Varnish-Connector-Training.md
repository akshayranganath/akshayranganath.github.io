---
layout: post
title: Notes from "Akamai Connector For Varnish" training
comment: true
description: Akamai and Varnish are launching a new solution called Akamai Connector For Varnish. Here's how to setup and work with Varnish.
---

Akamai and Varnish are launching a new solution called **[Akamai Connector For Varnish](https://developer.akamai.com/connector-for-varnish/)**. For this purpose, I took a training on Varnish and here are the notes from this session.

## Varnish basic setup / commands

![Varnish cache](https://www.smashingmagazine.com/wp-content/uploads/2013/12/varnish-cache-opt.png)

## Default startup parameters
The startup parameters for Varnish are picked up from the file __/etc/varnish/varnish.params__.

### Default VCL

On a CentOS, the path is __/etc/varnish/default.vcl__. In this use case, I removed the "Via" and "Server" response header.

```bash
sub vcl_deliver {
    # Happens when we have all the pieces we need, and are about to send the
    # response to the client.
    #
    # You can do accounting or modifying the final object here.
    unset resp.http.server;
    unset resp.http.via;

}
```

### Check settings
To view the settings of current running Varnish instance, this command will help.

	varnishadm param.show

To see the VCL that is currently loaded, use this command:

	varnishadm vcl.list

In my case, the output was:

	active     auto/warm          0 boot	

To see the parameter values for a given VCL, use this. In this case, I was using the default 'boot' VCL.	

	varnishadm vcl.show -v boot

## Varnish log
### Varnish log format 

Querying and grouping the logs

	varnishlog -q "RespHeader ~ 'Age: 0'" -g session

Logs use a special language called _VSL-Query_. 	

```bash
*   << Session  >> 44        
-   Begin          sess 0 HTTP/1
-   SessOpen       ::1 36478 :80 ::1 80 1494529036.854837 21
-   Link           req 45 rxreq
-   SessClose      REM_CLOSE 0.001
-   End            
**  << Request  >> 45        
--  Begin          req 44 rxreq
--  Timestamp      Start: 1494529036.854865 0.000000 0.000000
--  Timestamp      Req: 1494529036.854865 0.000000 0.000000
--  ReqStart       ::1 36478
--  ReqMethod      GET
--  ReqURL         /
--  ReqProtocol    HTTP/1.1
--  ReqHeader      User-Agent: curl/7.29.0
--  ReqHeader      Host: localhost
--  ReqHeader      Accept: */*
--  ReqHeader      X-Forwarded-For: ::1
--  VCL_call       RECV
--  VCL_return     hash
--  VCL_call       HASH
--  VCL_return     lookup
--  VCL_call       MISS
--  VCL_return     fetch
--  Link           bereq 46 fetch
--  Timestamp      Fetch: 1494529036.855280 0.000415 0.000415
--  RespProtocol   HTTP/1.1
--  RespStatus     200
--  RespReason     OK
--  RespHeader     Date: Thu, 11 May 2017 18:57:16 GMT
--  RespHeader     Server: Apache/2.4.6 (CentOS) PHP/5.4.16
--  RespHeader     Last-Modified: Fri, 06 Jan 2017 10:17:18 GMT
--  RespHeader     ETag: "fe-5456a52a3a62e"
--  RespHeader     Content-Length: 254
--  RespHeader     Content-Type: text/html; charset=UTF-8
--  RespHeader     X-Varnish: 45
--  RespHeader     Age: 0
--  RespHeader     Via: 1.1 varnish-v4
--  VCL_call       DELIVER
--  RespUnset      Server: Apache/2.4.6 (CentOS) PHP/5.4.16
--  RespUnset      Via: 1.1 varnish-v4
--  VCL_return     deliver
--  Timestamp      Process: 1494529036.855288 0.000423 0.000008
--  RespHeader     Accept-Ranges: bytes
--  Debug          "RES_MODE 2"
--  RespHeader     Connection: keep-alive
--  Timestamp      Resp: 1494529036.855311 0.000447 0.000023
--  ReqAcct        73 0 73 258 254 512
--  End            
*** << BeReq    >> 46        
--- Begin          bereq 45 fetch
--- Timestamp      Start: 1494529036.854903 0.000000 0.000000
--- BereqMethod    GET
--- BereqURL       /
--- BereqProtocol  HTTP/1.1
--- BereqHeader    User-Agent: curl/7.29.0
--- BereqHeader    Host: localhost
--- BereqHeader    Accept: */*
--- BereqHeader    X-Forwarded-For: ::1
--- BereqHeader    Accept-Encoding: gzip
--- BereqHeader    X-Varnish: 46
--- VCL_call       BACKEND_FETCH
--- VCL_return     fetch
--- BackendOpen    23 boot.default 127.0.0.1 8080 127.0.0.1 48074
--- BackendStart   127.0.0.1 8080
--- Timestamp      Bereq: 1494529036.854966 0.000063 0.000063
--- Timestamp      Beresp: 1494529036.855216 0.000313 0.000249
--- BerespProtocol HTTP/1.1
--- BerespStatus   200
--- BerespReason   OK
--- BerespHeader   Date: Thu, 11 May 2017 18:57:16 GMT
--- BerespHeader   Server: Apache/2.4.6 (CentOS) PHP/5.4.16
--- BerespHeader   Last-Modified: Fri, 06 Jan 2017 10:17:18 GMT
--- BerespHeader   ETag: "fe-5456a52a3a62e"
--- BerespHeader   Accept-Ranges: bytes
--- BerespHeader   Content-Length: 254
--- BerespHeader   Content-Type: text/html; charset=UTF-8
--- TTL            RFC 10 0 -1 1494529037 1494529037 1494529036 0 0
--- VCL_call       BACKEND_RESPONSE
--- VCL_return     deliver
--- Storage        malloc s0
--- ObjProtocol    HTTP/1.1
--- ObjStatus      200
--- ObjReason      OK
--- ObjHeader      Date: Thu, 11 May 2017 18:57:16 GMT
--- ObjHeader      Server: Apache/2.4.6 (CentOS) PHP/5.4.16
--- ObjHeader      Last-Modified: Fri, 06 Jan 2017 10:17:18 GMT
--- ObjHeader      ETag: "fe-5456a52a3a62e"
--- ObjHeader      Content-Length: 254
--- ObjHeader      Content-Type: text/html; charset=UTF-8
--- Fetch_Body     3 length stream
--- BackendReuse   23 boot.default
--- Timestamp      BerespBody: 1494529036.855263 0.000360 0.000047
--- Length         254
--- BereqAcct      133 0 133 253 254 507
--- End            
```

### Vanish synthesized response

```bash
curl -X PRI localhost -v
* About to connect() to localhost port 80 (#0)
*   Trying ::1...
* Connected to localhost (::1) port 80 (#0)
> PRI / HTTP/1.1
> User-Agent: curl/7.29.0
> Host: localhost
> Accept: */*
> 
< HTTP/1.1 405 Method Not Allowed
< Date: Thu, 11 May 2017 18:47:15 GMT
< Server: Varnish
< X-Varnish: 31
< Content-Type: text/html; charset=utf-8
< Retry-After: 5
< Content-Length: 273
< Connection: keep-alive
< 
<!DOCTYPE html>
<html>
  <head>
    <title>405 Method Not Allowed</title>
  </head>
  <body>
    <h1>Error 405 Method Not Allowed</h1>
    <p>Method Not Allowed</p>
    <h3>Guru Meditation:</h3>
    <p>XID: 31</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>
```

### Varnish piped response

```bash
curl -X DUMMY localhost -v
* About to connect() to localhost port 80 (#0)
*   Trying ::1...
* Connected to localhost (::1) port 80 (#0)
> DUMMY / HTTP/1.1
> User-Agent: curl/7.29.0
> Host: localhost
> Accept: */*
> 
< HTTP/1.1 501 Not Implemented
< Date: Thu, 11 May 2017 18:47:58 GMT
< Server: Apache/2.4.6 (CentOS) PHP/5.4.16
< Allow: GET,HEAD,POST,OPTIONS,TRACE
< Content-Length: 203
< Connection: close
< Content-Type: text/html; charset=iso-8859-1
< 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>501 Not Implemented</title>
</head><body>
<h1>Not Implemented</h1>
<p>DUMMY to /index.html not supported.<br />
</p>
</body></html>
* Closing connection 0
```


## Varnish Cache key
Cache key in varnish is based on "Host" and "URL". Varnish can __tag__ the cache by other parameters like "Vary", other headers or some other request base parameter.

## Varnish status
__varnishstat__ can provide *ps* like interface. It provides a snapshot of current cache hit/miss and storage statistics. However, it is "snapshot" from the time the varnish has been started.

However, there is no way to get historical data on cache rate. The only way is to request varnishstat every minute and then run a delta for generating the reports.

## Purging mechanism

4 main methods:

- Ban
- Soft ban
- Purge
- Soft purge

Hash key is formed by URL and path. Under this hash, there can be sub-hashes by custom header, condition, etc and objects remain under it.

It is possible to remove all objects under one hash key or to surgically remove single sub-hash keyed object.

It is possible to tag objects by version number. Eg: Add a custom header from origin called "X-Version" and use this in cached object. It is possible to purge all objects with this number.


## VCL Commands
Compile the VCL file to C program

	varnishd -C -f /etc/varnish/default.vcl 

Adding a new VCL

	varnishadm vcl.load boot2 /etc/varnish/default.vcl	

So 2 VCLs are available

	varnishadm vcl.list
	active     auto/warm          0 boot
	available  auto/warm          0 boot2	

To use the new one, use this:
	
	varnishadm vcl.use boot2

To verify

	varnishadm vcl.list
	available  auto/warm          0 boot
	active     auto/warm          0 boot2	


## VCL	

- Goal of VCL is to have settings that are "un-crashable"
- Domain specific language
- State machine with functions as sttes
- built in functions start with __vcl_*__
- **Intelligent purge**: It is possible to take a Purge request and after purge, the request can be reset. This way, the new object is fetched and possibly cached.
- "Retry-After" header can be easily added through VCL ==> useful for SEO.
- __Hit-for-Miss__ - a bit confusing. Basically, it is a state created to short-circuit the logic to detect uncacheable object. It is possible to set a TTL to store the evaluation saying an object should not be cached.
- **Normalizing queries**: it is possible to sort the query strings in the normalized order. This is the method: [STRING querysort(STRING)](https://varnish-cache.org/docs/4.0/reference/vmod_std.generated.html#func-querysort). 
	- For more granular way to fine-tune query strings, use [libvmod-querystring](https://github.com/Dridi/libvmod-querystring).
	- Similar sorting can be done on cookies as well.

Here's the VCL state diagram:
![VCL state machine](http://book.varnish-software.com/4.0/_images/simplified_fsm.svg)



## ESI

Akamai and Varnish support [Edge Side Includes](https://www.akamai.com/us/en/support/esi.jsp). Varnish's ESI implementation is a subset of features offered by Akamai.

- ESI fragments are fetched sequentially in open source version
- In proprietary version, this fetch is done in parallel

<pre>
Only 3 tags are supported by Varnish:
In Varnish we've only implemented a small subset of ESI. As of 2.1 we have three ESI statements:

esi:include
esi:remove
&lt;!--esi ...--&gt;
</pre>

For more, see here: [Edge Side Includes](https://www.varnish-cache.org/docs/3.0/tutorial/esi.html). Here are the main tags necessary to trigger ESI.

```bash
beresp.do_esi
          Type: BOOL
          Readable from: vcl_backend_response, vcl_backend_error
          Writable from: vcl_backend_response, vcl_backend_error
          Boolean. ESI-process the object after fetching it.  Defaults to false. Set it to true to parse the object for ESI directives. Will only be honored if req.esi is true.

req.esi
      Type: BOOL
      Readable from: client
      Writable from: client
      Boolean.  Set  to  false to disable ESI processing regardless of any value in beresp.do_esi. Defaults to true. This variable is subject to change in future versions, you should avoid using
      it.

   req.esi_level
      Type: INT
      Readable from: client
      A count of how many levels of ESI requests we're currently at.
```      

__Maximum includes = 5__

```bash
varnishadm param.show | grep esi
max_esi_depth              5 [levels] (default)          
```

To make this more scalable, Varnish is moving towards [EdgeStash](https://info.varnish-software.com/blog/edgestash)

## Edgestash

![Varnish software](https://www.varnish-software.com/wp-content/uploads/320x200.png)

Varnish supports server side rendering with EdgeStash. It is supported only on VarnishCache Plus. It is similar to Moustache/handlebar.


## VMOD

>VMODs are extensions written for Varnish Cache. VMODs are complied into shared object (.so) and loaded into memory. [VMODs](https://www.varnish-cache.org/vmods/)

Some interesting VMOD:
- *vmod_paywall* - can implement the functionality of paywall on websites
- *vmod_softpurge* - instead of default purge, try invalidation


## Cache invalidation

Varnish offers different mechanisms of cache purge/invalidation. Here is a comparison of the implementation with Akamai's way of doing cache clearing/purge.

| Purge | Soft Purge | Ban | Soft ban | Force Cache misses | Surrogate keys |
| -- | -- | -- | -- | -- | -- |
| Same as single object purge| Single object invalidation | ECCU purge | ECCU invalidation | Special | Cache tagging |

Ban is preferred for multiple objects. It is async, if it does not use any __req__ parameter and uses only __obj__ parameters.

**Force Cache miss **: You can fake a cache bypass. So the request does not check the cache for the cached object and hits the back-end. However, it has 2 behavior on response:

- if backend fails, then, _this_ request fails and end user gets an error. Cached object is untouched.
- if backend succeeds, then the response replaces the existing cached object and the user gets this new response.

Adding references to Akamai's APIs:
- *[Regular Purge / Invalidate](https://developer.akamai.com/api/purge/ccu/overview.html)*: This can be used for single URL or CP Code purge.
- *[ECCU Purge](https://control.akamai.com/dl/customers/other/CCU/Content_Control_Interfaces.pdf)*: This can be used for wildcarded URLs, and purging with complex conditions.

Here's the complete purge and ban strategies allowed. I've taken it from the section [Purge - Bans - Cache Misses - Surrogate Keys](http://book.varnish-software.com/4.0/chapters/Cache_Invalidation.html).

<table border="1" class="docutils" id="purge-ban-hash2-force">
<span id="table-18"></span><caption><span class="caption-number">Table 17 </span><span class="caption-text">Comparison Between: Purge, Softpurge, Bans, Force Cache Misses and Surrogate keys (hashtwo/xkey)</span><a class="headerlink" href="#purge-ban-hash2-force" title="Permalink to this table">¶</a></caption>
<colgroup>
<col width="13%" />
<col width="17%" />
<col width="17%" />
<col width="17%" />
<col width="17%" />
<col width="17%" />
</colgroup>
<thead valign="bottom">
<tr class="row-odd"><th class="head">&nbsp;</th>
<th class="head">Purge</th>
<th class="head">Soft Purge</th>
<th class="head">Bans</th>
<th class="head">Force Cache Misses</th>
<th class="head">Surrogate keys</th>
</tr>
</thead>
<tbody valign="top">
<tr class="row-even"><td>Targets</td>
<td>Specific object (with all its variants)</td>
<td>Specific object (with all its variants)</td>
<td>Regex patterns</td>
<td>One specific object (with all its variants)</td>
<td>All objects with a common hashtwo key</td>
</tr>
<tr class="row-odd"><td>Frees memory</td>
<td>Immediately</td>
<td>After grace time</td>
<td>After pattern is checked and matched</td>
<td>No</td>
<td>Immediately</td>
</tr>
<tr class="row-even"><td>Scalability</td>
<td>High</td>
<td>High</td>
<td>High if used properly</td>
<td>High</td>
<td>High</td>
</tr>
<tr class="row-odd"><td>CLI</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr class="row-even"><td>VCL</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr class="row-odd"><td>Availability</td>
<td>Varnish Cache</td>
<td>Varnish Cache</td>
<td>Varnish Cache</td>
<td>Varnish Cache</td>
<td>Hashtwo VMOD in Varnish Plus 4.0 or xkey VMOD in Varnish Cache 4.1</td>
</tr>
</tbody>
</table>


### Common recommended VCLs

- Drupal: [VCL purge & ban ](https://gitlab.wklive.net/snippets/32)
- Wordpress: [STEP-BY-STEP: SPEED UP WORDPRESS WITH VARNISH SOFTWARE](https://info.varnish-software.com/blog/step-step-speed-wordpress-varnish-software)
- Magento: [Using varnish with Magento](http://devdocs.magento.com/guides/v2.0/config-guide/varnish/config-varnish-magento.html)
- AEM: REPLACING ADOBE AEM [Part 1](https://info.varnish-software.com/blog/advanced-cache-invalidation-applied-replacing-adobe-aem-cq5-dispatcher-with-varnish-plus-part-1) and [Part 2](https://info.varnish-software.com/blog/advanced-cache-invalidation-part2)

{Digression: Comparison of CMS platforms https://www.slideshare.net/TeroJuola/magento-2-hybris-websphere-commerce-oracle-atg-comparison }

## Varnish Gather
A nifty tool, [Varnish Gather](https://github.com/varnish/varnishgather) to analyze and troubleshoot varnish information.

If faced with an issue with Varnish setup, ask the customer to run this command and then get the full output. This can be used for detailed troubleshooting.

eg; varnish lib should be mounted on tmpfs


## Varnish HA (VHA)
Basically it is an advanced implementation of [Internet Cache Protocol](https://tools.ietf.org/html/rfc2186). Here's details of VHA: https://www.varnish-software.com/plus/varnish-high-availability/.

Once a single Varnish instance gets a new object to cache, it communicates to others that there is a new object. The other varnish instances then get the object from this first instance.

### Varnish Probes
Varnish itself can send probes to back-end to mark it healthy / down. It can be configured to use a specific HTML page and the timers on connect time, poll time, health check % can be configured.

Ways of splitting traffic to back-end. More info here: https://www.varnish-cache.org/docs/5.0/reference/vmod_directors.generated.html

- fall back
- round robin
- shard

>There are no loops in VCL.

## CDNs using Varnish

- Fastly 
- MaxCDN 
- Cachefly

## Varnish Connector

Working of Varnish connector is explained here. Basically, Varnish VCL can be setup such that it can: 

- drive the caching on Akamai
- purge issued to Varnish can clear Akamai cache as well

![Varnish connector](https://developer.akamai.com/connector-for-varnish/images/architecture.png)

### Installation

First download the Akamai connector code from https://akamai-connector.varnish-software.com/dist/.

To work with open source version, use this:

```bash
yum install varnish-devel curl-devel openssl-devel python-docutils
```

To work with Varnishplus, use this

```bash
yum install varnish-plus-devel curl-devel openssl-devel python-docutils
```

Then run the standard installation commands:
```bash
./configure
make
make install
```

To test, check if you have the Akamai connector help file:

	man vmod_akamai

Now setup Akamai connector:

	akamai-connector-setup.sh install

This will install a few VCL files
```bash
Akamai Connector for Varnish setup

Installing

Source: /usr/share/doc/akamai-connector/akamai_auto.vcl
Destination: /etc/varnish
Arguments: --no-clobber
Success

Source: /usr/share/doc/akamai-connector/akamai.vcl
Destination: /etc/varnish
Arguments: --no-clobber
Success

Source: /usr/share/doc/akamai-connector/akamai-connector.conf.example
Destination: /etc/akamai-connector.conf
Arguments: --no-clobber
Success
```

Add this to the default vcl - /etc/varnish/default.vcl
```perl
import std;
import akamai;
include "akamai_auto.vcl";
```

After reloading, test if [Sureroute](https://developer.akamai.com/learn/Optimization/SureRoute.html) test object is returned.
```bash
curl -v localhost/akamai/testobject.html  -H "Via:akamai.net(ghost) (AkamaiGHost)" -o /dev/null -s
* About to connect() to localhost port 80 (#0)
*   Trying ::1...
* Connected to localhost (::1) port 80 (#0)
> GET /akamai/testobject.html HTTP/1.1
> User-Agent: curl/7.29.0
> Host: localhost
> Accept: */*
> Via:akamai.net(ghost) (AkamaiGHost)
> 
< HTTP/1.1 200 OK
< Content-Length: 20480
< Date: Fri, 12 May 2017 22:40:06 GMT
< X-Varnish: 2
< Edge-Control: max-age=70
< Cache-Control: post-check=60
< Via: 1.1 varnish-v4, Akamai Connector/1.0.2
< Accept-Ranges: bytes
< Connection: keep-alive
```

#### Gotchas
If Varnish connector is _NOT_ configured to purge Akamai, it will return with a 200 response code and an empty JSON _{}_.

Varnish connector will tell downstream caches to cache for TTL. Akamai will cache for TTL+Grace.

	post-check
	o Defines an interval in seconds after which an entity must be checked for freshness. The check may happen after the user is shown the resource but ensures that on the next roundtrip the cached copy will be up-to-date.