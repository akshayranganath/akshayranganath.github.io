---
layout: post
title: OCSP Validation with OpenSSL
comment: true
description: OCSP Stapling is becoming pervelant across browsers for validating certificates. Here I show how to run this validation manually with OpenSSL.
image: https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/tls-validation.png
tags: [ocsp, tls, openssl, security]
---

>Edit June 19,2020: Added details to support OCSP request to servers that don't support HTTP 1.0. 

I had been working on understanding and troubleshooting an OCSP implementation and learnt a few things and thought I could share them on the blog.

## What is OCSP?

Online Certificate Status Protocol (OCSP) defined in [RFC 2560](https://www.ietf.org/rfc/rfc2560.txt) is a protocol that:
>enables applications to determine the (revocation) state of an identified certificate. OCSP may be used to satisfy some of the operational requirements of providing more timely revocation information than is possible with CRLs and may also be used to obtain additional status information. An OCSP client issues a status request to an OCSP responder and suspends acceptance of the certificate in question until the responder provides a response.

Basically, OCSP is a mechanism where a client can ask the CA if a certificate is valid. This method is better than Certificate Revocation List (CRL). In the CRL method, the CA publishes a list of all the certificates that it has issues and that has now been revoked. Instead of processing this whole bunch, the client can check the status of just one certificate with OCSP.

Here's the steps of OCSP, as explained in the [OCSP Stapling blog by Mozilla](https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/).

![OCSP request](https://blog.mozilla.org/security/files/2013/08/p4.png)

## What is OCSP Stapling?

With OCSP, the client is responsible to make a call to the CA (OCSP responder) to verify the status of a server certificate. This can cause additional round-trip delays. So an alternate solution was designed where the server could help. When the client initiates the TLS hand-shake, the server can include the OCSP validation message along with its certificate. By "stapling" the verification information, the client can complete the hand-shake faster.  

OCSP stapling was originally defined as Transport Layer Extension in [RFC 6066](https://www.ietf.org/rfc/rfc6066.txt). Specifically, the RFC calls out this functionality:
>Allow TLS clients and servers to negotiate that the server sends the client certificate status information (e.g., an Online Certificate Status Protocol (OCSP) [RFC2560] response) during a TLS handshake.  This functionality is desirable in order to avoid sending a Certificate Revocation List (CRL) over a constrained access network and therefore saving bandwidth.

Again, here's the working of OCSP stapling from [OCSP Stapling blog by Mozilla](https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/).

![OCSP stapling](https://blog.mozilla.org/security/files/2013/08/p6.png)   
OCSP verification has been around for some time and OCSP stapling has been baked into the browsers for the past few years now. It is now gaining more widespread use as IoT devices are started to implement mutual authentication schemes.


## Testing OCSP with Openssl
I had been working on an implementation that uses this OCSP Stapled response. The use case was that connected device makes a request to server over TLS. The device presents a client cert to authenticate itself to the server. The server verifies and then responds back with its certificate and the stapled OCSP response for the client to authenticate.

We ran into issues over the stapling and we had to verify the result. For this purpose, I am showing a request/response that does not include client certificates. This just makes the discussion a little bit simple.

To work on this aspect, I started to use Openssl and here's the steps to achieve it:

### Step 1: Get the server certificate
First, make a request to get the server certificate. When using ```openssl s_client -connect``` command, this is the stuff between the ```------BEGIN CERTIFICATE-----``` and ```-----END CERTIFICATE-----```. I am using [www.akamai.com](www.akamai.com) as the server.

```bash
openssl s_client -connect www.akamai.com:443 < /dev/null 2>&1 |  sed -n '/-----BEGIN/,/-----END/p' > certificate.pem
```

The server certificate is saved as _certificate.pem_.

### Step 2: Get the intermediate certificate
Normally, a CA does not sign a certificate directly. They use intermediaries and we need to this make the openssl command work. So, make a request to get all the intermediaries.

To view the list of intermediate certs, use the following command.

```bash
openssl s_client -showcerts -connect www.akamai.com:443 < /dev/null 2>&1 |  sed -n '/-----BEGIN/,/-----END/p'
```

The very first certificate is the server certificate we saved in step 2. For all the certificates below it, copy and save to a file named _chain.pem_.

### Step 3: Get the OCSP responder for server certificate
The next step is to get the OCSP responder information. There are two ways to do this:

#### OCSP Responder with a command
We can use the server certificate _certificate.pem_ and run a command to extract just the OCSP responder field:

```bash
$ openssl x509 -noout -ocsp_uri -in certificate.pem 
http://ss.symcd.com
```

So here, [http://ss.symcd.com](http://ss.symcd.com) is the OCSP responder.

#### OCSP Responder by examination
We can use the openssl command to print all the server certificate information using this command:

```bash
openssl x509 -text -noout -in certificate.pem 
```

In the response, look for the section named _Authority Information Access_. This will hold the OCSP responder URL. In this case, here's what I see:

```bash
 Authority Information Access: 
                OCSP - URI:http://ss.symcd.com
                CA Issuers - URI:http://ss.symcb.com/ss.crt
```

### Step 4: Make the OCSP request

Now that we have the server certificate, CA certificate chain and the OCSP responder URL, we can make the actual verification call.                

```bash
openssl ocsp -issuer chain.pem -cert certificate.pem -text -url http://ss.symcd.com
```

Here's the relevant part of the response.
```bash
OCSP Request Data:
    Version: 1 (0x0)
    Requestor List:
        Certificate ID:
          Hash Algorithm: sha1
          Issuer Name Hash: D1B1648B8C9F0DD16BA38ACD2B5017D5F9CFC064
          Issuer Key Hash: 5F60CF619055DF8443148A602AB2F57AF44318EF
          Serial Number: 7E34F9C3D2D21D999B668CC6C80EA4A8
    Request Extensions:
        OCSP Nonce: 
            0410AE9A77D9FBDE8F7EC1F0C3305183BAEC
OCSP Response Data:
    OCSP Response Status: successful (0x0)
    Response Type: Basic OCSP Response
    Version: 1 (0x0)
    Responder Id: A2117BB82AC97305A9CCC170F80F82442BBF509A
    Produced At: Sep 12 16:58:10 2017 GMT
    Responses:
    Certificate ID:
      Hash Algorithm: sha1
      Issuer Name Hash: D1B1648B8C9F0DD16BA38ACD2B5017D5F9CFC064
      Issuer Key Hash: 5F60CF619055DF8443148A602AB2F57AF44318EF
      Serial Number: 7E34F9C3D2D21D999B668CC6C80EA4A8
    Cert Status: good
    This Update: Sep 12 16:58:10 2017 GMT
    Next Update: Sep 19 16:58:10 2017 GMT

```

The most important part is the __Cert Status: good__ line. This indicates that everything is kosher and the client can trust the certificate. The other part of interest is the details __Next Update__. This indicates the OCSP stapling response can be cached until the time so that we don't overload the OCSP responder.

### Handling newer OCSP validators

Many new OCPS validation endpoints like `ocsp2.globalsign.com` don't support HTTP 1.0 requests. OCSP by default uses HTTP 1.0 which does not mandate the `Host` header. When this happens you may see a `400` error like this:

```
OCSP Request Data:
    Version: 1 (0x0)
    Requestor List:
        Certificate ID:
          Hash Algorithm: sha1
          Issuer Name Hash: 12EADF46CC0880387360B65A691601CC0CB5E9E2
          Issuer Key Hash: A92B87E1CE24473B1BBFCF853702559D0D9458E6
          Serial Number: 5625521AFA513B6D970FFAC1
    Request Extensions:
        OCSP Nonce:
            0410C43AA490D8782F80C2D0751C417B6486
Error querying OCSP responder
4732960364:error:27FFF072:OCSP routines:CRYPTO_internal:server response error:/AppleInternal/BuildRoot/Library/Caches/com.apple.xbs/Sources/libressl/libressl-47.120.1/libressl-2.8/crypto/ocsp/ocsp_ht.c:251:Code=400,Reason=Bad Request
```

To fix this mismatch, we will need to add the Host header. This can be achieved by adding the option `-header` followed by the header information.

Here's an example command:

```
openssl ocsp -issuer chain.pem -cert certificate.pem -text -url http://ocsp2.globalsign.com/cloudsslsha2g3 -header "HOST" "ocsp2.globalsign.com"
```

Thanks to [Jim Carter's explanation](http://www.jfcarter.net/~jimc/documents/bugfix/21-openssl-ocsp.html) for explaining this issue.

## Bonus: Dissecting OCSP request
I was curious to see on what actually happens during the OCSP request and ran a wireshark trace. When we make the OCSP request, this is submitted as a HTTP POST. In this case, the headers looked like this:

![wireshark trace](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/ocsp_wireshark.png)

```bash
POST / HTTP/1.0
Content-Type: application/ocsp-request
Content-Length: 120

0v0t0M0K0I0	..+..........d...
.k...+P.....d.._`.a.U..C..`*..z.C....~4.......f.......#0!0..	+.....0........w....~...0Q...

HTTP/1.0 200 OK
Server: nginx/1.10.2
Content-Type: application/ocsp-response
Content-Length: 1609
content-transfer-encoding: binary
Cache-Control: max-age=329052, public, no-transform, must-revalidate
Last-Modified: Tue, 12 Sep 2017 16:58:10 GMT
Expires: Tue, 19 Sep 2017 16:58:10 GMT
Date: Fri, 15 Sep 2017 21:33:58 GMT
Connection: close
```
If you notice, the "Cache-Control: max-age=329052" will be equal to the same as telling the client to cache the response until the __Next Update__ time period. So the POST request can be cached.

## Conclusion
OCSP request/response sounds a bit complex but, ultimately it is just HTTP request / response and can be tested with simple command line tools. 

