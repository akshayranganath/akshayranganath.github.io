---
layout: post
title: 🪪 OAuth Notes
comment: true
description: Notes based on a YouTube video about OAuth
tags: notes
---

# OAuth 2.0
I was learning about OAuth and took some notes based on this excellent video:

[![Watch the video](https://img.youtube.com/vi/996OiexHze0/0.jpg)](https://www.youtube.com/watch?v=996OiexHze0)


### Delegated Authentication

>How can I let a website access my data w/o giving away my password? e.g. Logging in to ChatGPT using my Gmail id.

#### OAuth 2.0 terms

In the Youtube video of a user logging in to Yelp.com using their Gmail id so that Yelp can have my contacts, we have:

* resource owner - the user (me)
* client - yelp
* authorization server - accounts.google.com
* resource server - contacts.google.com
* authorization grant - proves that the user clicked "Yes" to share access
* redirect URL - where the user is taken once they click "Yes" to share
* access token - client will use this to get the authorized things (i.e. Yelp will get contacts)
* scope - what's allowed (only reading contact names and emails)
* consent - consent screen based on the scope (i.e. checkbox to show what is being shared and a final "Yes" button)
* Back-channel - server-to-server, highly secure, may use API secrets
* Front-channel - happening on the browser, so less secure
Authorization grant can be multiple things. Can be `code`, the most common item.

**During the exchange of code to token, we will need a secret key**

### 2 helpful tools
* [OAuth Debugger](https://oauthdebugger.com/)
* [Open ID Debugger](https://oidcdebugger.com/)

### Types of flow:

* *Implicit flow*: slip back-channel e.g. pure react app
* *Back-Channel only*: No front-end. Server-to-server. Can happen in 2 ways:
    * resource owner password (i.e. user name and password is needed)
    * client credentials, used for service communications (uses private-public key-pair.)

### Open Id
OAuth was originally designed for authorization and not for authentication i.e., only about permissions or scope.

| Protocol | Purpose | Use it for.. |
|----------|---------| ------|
| Open ID Connect | Authentication  |  * logging in users<br>* making your account accessible in other systems |
| OAuth 2.0 | Authorization | * granting access to your API <br>* getting access to user data |

Open ID Connect adds the following to OAuth:
- ID token
- a user info endpoint for getting user details
- standard set of scopes
- standardized implementation

