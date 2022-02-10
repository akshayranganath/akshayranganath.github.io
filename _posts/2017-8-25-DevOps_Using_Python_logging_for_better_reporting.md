---
layout: post
title: Using Logging in Python for better reporting
comment: true
description: By using a multi-level logging built into the code can help in making it more DevOps friendly. Python's logging frame-work is a good way to start.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/satellite.jpg
tags: [devops, automation, automated unit test, logging]
---

When moving into an agile / DevOps model of code production, one of the core concepts is building in enough monitoring and telemetry. To enable this, most programming languages come with bundled libraries for logging. There is log4J in Java and [logging](https://docs.python.org/3/library/logging.html) library in python. In this (short) post, I walk through a use case of how it helped.

![satellite telemetry](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/satellite.jpg)

## Nikon RAW Images
I am trying to be a better digital photographer and the first step was to enable shooting in RAW mode. Since I am still new, I shoot in a combined mode. My camera produces a raw _(.NEF)_ and a jpeg _(.jpg)_ image for every shot. When I open the images, it's easy to view the photos and I delete the obviously bad ones from within the tool. So this has a challenge of deleted .JPG files but orphaned .NEF files.

So I wrote to script to clean up such files. Here's the code: [https://github.com/akshayranganath/FileCleaner](https://github.com/akshayranganath/FileCleaner).

However, in my first version of the code, I wasn't sure on how best to display the messages. For example:

- Should I print the name of all the files that would be deleted?
- Should I hide everything and just say "Done"?
- How to signal there is an error as against a message?

## Enter logging
This is when I realized that logging would be a better solution. It offers varying level of verbosity and an ability to express a message _and tell the kind of message_. So I can have an *informational* message or a *debug* message or an *error* message. {For the full list, refer to [Logging Levels](https://docs.python.org/2/library/logging.html#levels)}. When a user fires the code with a specific verbosity level, I can fine tune the amount of chattiness of the code.

So if I just want to get the work done, I can invoke this command:
```bash
python file_cleaner.py --folder /some/folder
```

If I want to see all the messages including each file being deleted, I can use:
```bash
python file_cleaner.py --folder /some/folder -v
```

I could even start to accept specific verbosity level as a number between 0-100 and the messages would vary.

## Why is it useful?
Here's why I think this is super-cool:

- As a developer, we often put in print statements. We either comment or delete them as time goes by. However, we'd put this in because we'd been stuck at this point for some reason. By remove the comment, we take away this ability to debug. Instead of using a print, what-if there was a logging.debug() message? This way, the message is never displayed in normal operation but printed out when necessary.
- Logging level could be externalized through an environment variable. This way, when code is deployed, the automation deploying the code could set the verbosity level depending on the complexity of the change and then tweak it over time. So all new code could start at DEBUG level and then move to INFO and then to ERROR. 

I am still learning the usage. So if you have other use cases, do put in a note!