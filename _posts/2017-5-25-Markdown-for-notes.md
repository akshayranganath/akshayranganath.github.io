---
layout: post
title: Markdown for notes and setting it up on SublimeText2
comment: true
description: Learn why Markdown is a good for taking notes during trainings and meetings and plugins for Sublime Text2+Markdown integration. It's very good for converting to blog posts with Github pages as well.
---

Over the past few months, I have realized that Markdown is a very good way to take notes, especially if the end goal is to quickly format and convert it to a blog post as well. 
![i love markdown](/images/markdown.png)

## What is Markdown?
[Markdown](https://daringfireball.net/projects/markdown/) is a syntax that was introduced by John Gruber as an easy way to convert plain-text to (X)HTML. Among other this is the default format used for publishing [GitHub pages](https://pages.github.com/). So all the blog posts on this website is written using Markdown.

As I started to use this format and got a hang of it, I realized that it is a very useful format for taking notes as well. It is this habit that lead me to easily publish my blog posts on the AWS Summit [here](https://akshayranganath.github.io/AWSSummit-SFO-Day1-Notes/) and [here](https://akshayranganath.github.io/AWSSummit-SFO-Day2-Keynote-Notes/).

## Markdown for taking notes
When attending meetings or training, we invariably take notes. In most cases, it is as some plain-text file or a word document. Typically, I don't like Word document since there is time spent on getting the right formating. Plain-text is a bit boring to read since it is so plain-in-text!

Enter Markdown! I can now take notes in simple plain text and just add the formating within in. In most cases, I need to use the following formating tools:

* Headings
* Images
* Links
* Occasionally - tables
* Code formating and unformatted text

Once you use Markdown for a few months, the syntax just becomes a second habit. While learning, one of the best resource I found was Adam Pritchard's [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Previewing Markdown page
Markdown doesn't need a lot of resources to be converted to HTML. There are [CLI tools](https://github.com/showdownjs/showdown), [online editors](http://dillinger.io/) and more. In my case, I use Sublime Text. So the logical option was to find the best way to get this done.

I followed the steps outlined in the article [How to Set Up Sublime Text for Markdown Editing](http://plaintext-productivity.net/2-04-how-to-set-up-sublime-text-for-markdown-editing.html). At the end of it, I had installed a package named "Markdown Extended" and added a key-binding to show Markdown pages as a HTML on my browser. Here's my key binding file after the changes

```javascript
[
{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} }
]
```

Once I had this done, there was no stopping back! Every note taken at every meeting became a markdown file that could be checked in to repository, or converted to a blog post and start a conversation!

Hope you find this useful too.