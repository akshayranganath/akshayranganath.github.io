---
layout: post
title: Mutual auth and Certificate Revocation
comment: true
---

Over the last few days, I have been working on mutual authentication / client certificates. While working on it, I learnt a few concepts around Certificate authentication and tools used to achive it. I thought it could be useful to others and wanted to share the same.

![Vault](/images/vault.png)

## What is Mutual Authentication?
According to the <cite>[Microsoft TechNet](https://technet.microsoft.com/en-us/library/cc961730.aspx)</cite>,
<blockquote>Mutual Authentication is a security feature in which a client process must prove its identity to a server, and the server must prove its identity to the client, before any application traffic is sent over the client-to-server connection.</blockquote>
Basically, it is a process where the client and server both have to present a certificate and both have to be verified for the TLS handshake to complete before the request/response to begin.
## Why is it different?
In the normal TLS handshake (like regular HTTPS websites), the burden of proof is on the server. That is, when I connect to my travel site, I need to be sure that I am actually talking to the travel website's server and not somebody else. I will gain my access by providing credentials. This is fine for most situations.

However, imagine I am an agent can can do bulk bookings. I may want lines of credit and confirmed bookings before my payment goes through. In such scenario, the travel site would go through extra verifications and ask for some deposit. Finally, they may give me a client certificate to ensure that they know that is actually me doing the booking.

As another use case, when your phone tries to talk to app store, it would need to prove that is indeed an Apple / Android device before proceeding with the app updates. The device manufacturer can embed the client certificate when the phone is manufactured so that it can be trusted.

[CodeProject](https://www.codeproject.com/Articles/326574/An-Introduction-to-Mutual-SSL-Authentication) has an excellent article on setting up and testing this kind of a setup.
## Certificate Verification challenge
In a normal TLS handshake, the server presents it's certificate and intermediaries. Browsers have pre-loaded "Root" certificates. Using the root, the browser builds a trust chain and decides if it can trust or not trust the certificate.

A problem with this approach is that servers may be compromised. If a TLS cerificate is revoked by a CA, the browser will never know. To work-around this, 2 techniques are in use. These techniques try to ensure that when a server sends a certificate, the browser can query the certificate authority (CA) to see if the certificate is still valid.

- <strong>Certificate Revocation List (CRL)</strong>: In this approach, the Certificate Authority (CA) publishes a list of certificates it has issued and it's status. The list is published at a fixed period or right after a certificate is revoked. The primary challenge with this approach is this CRL list keeps growing and overtime can get unwieldy.
- <strong>Online Certificate Status Protocol (OCSP)</strong>: In this case, the TLS certificate will list an OCSP domain. The client can send a request to this OCSP server with the cert that it is trying to verify. The OCSP responder then says if the certificate is valid or invalid. In this case, the response is of fixed length. Request is not unwieldy as well.

Both CRL and OCSP response can be digitally signed. OCSP provides a way to send a nonce value to reduce the risk of replay attacks. Unfortunately, not many responders support it and hence it is not very effective.
## Browser support for Certificate revocation
There is an excellent but dated article on browser support at Spiderlabs titled ["Defective by Design? - Certificate Design in modern browsers"](https://www.trustwave.com/Resources/SpiderLabs-Blog/Defective-By-Design----Certificate-Revocation-Behavior-In-Modern-Browsers/).

According to Wikipedia and a [blog post by Maikel](https://www.maikel.pro/blog/current-state-certificate-revocation-crls-ocsp/), here's the status:

- Safari supports OCSP checking
- IE, Opera and Firefox support CRL and OCSP. They do a soft-fail. That is, if the CRL/OCSP server is not reachable, the cert is loaded normally.
- Chrome does not perform OCSP/CRL checks directly. It can be enabled if required. Chrome believes that all methods are currently not very effective and they follow a strategy outlined in their [CRLSets](https://dev.chromium.org/Home/chromium-security/crlsets) page.

 
## Command Line check for OCSP
Finally, if you do need to run check for an OCSP responder, Openssl has the commands to troubleshoot. [Checking OCSP revocation using OpenSSL](https://twitter.com/ivanristic?lang=en">Ivan Ristic</a>'s excellent blog post, <a href="https://blog.ivanristic.com/2014/02/checking-ocsp-revocation-using-openssl.html) explains the process.