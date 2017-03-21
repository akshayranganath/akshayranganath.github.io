---
layout: post
title: Migrating Wordpress Blogs to GitHub Pages
comment: true
---
Over last 3 weeks, I learnt how to create and fix issues on the [github pages](https://pages.github.com/). I wanted to share the steps involved in migrating [my wordpress blog](https://akshayrangananth.wordpress.com/) to a github blog post. 

![Banner of word blog](/images/blog_banner.jpg)

## Why give up Wordpress blog?
I have been using Wordpress blogs for some time now. Wordpress blogs are free, easy to use and very easy to administer. However, the free edition of Wordpress does have these issues:

* not allow the use of external analytics like Google Analytics
* no flexibility in using / turning off plugins
* bloat caused by auto-added plugins
* no ability to edit the page metadata

Due to these factors, I was looking at a platform that was easier to use and administer.


## GitHub Pages
While checking at alternatives, I came across [GitHub Pages](https://pages.github.com/). The offering was very straight-forward. You can host a static website under the domain *&lt;gihubuser&gt;.github.io*. Any content that is published in the HEAD branch is automatically published.

This sounded quite interesting tool to play. However, its appeal shot up when I discovered [Barry Clark's Smashing Magazine article](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/). In very simple steps, he explained a method to create a well designed and Jekyll integrated website that could be published to the Github pages. This sounded too good to be true - so I started to test it out.

## Why I like GitHub pages?
Apart from the fact that it is free, I love GitHub pages for the following factors:

* easy to use!
* complete freedom in styling and templating the pages
* much faster performance
* lack of ads and bloat introduced by 3rd parties
* acceleration over Fastly's CDN
* integration with my build process. I can now auto-optimize images before uploading and save some bytes and improve performance!
* Potential to [CNAME to any hostname](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/) that I want.

### Migraton steps
![Migration of birds](/images/migration.jpg)

The migration process is quite simple for me:

1. Create an empty Jekyll based github page.
2. Copy each blog's HTML to an editor
3. Re-write the post in Markdown. I use [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
4. Save the file
5. Git add, git commit and git push! 
6. Voila! The blog post is out in the world.


### Migration process
Wordpress offers a mechanism to export all the blogs as an XML file. I did not explore this option in great detail since I had a few blog posts and it was easier for me to directly copy the HTML and create the mardown templates. For serious bloggers, there are tools out there but, be do check the output. For example, I tried the [HTML2Markdown tool](https://github.com/thephpleague/html-to-markdown). However, it missed handling *&lt;span&gt;* tags properly. Since my wordrpress blog was structured to use these tags, I could not use the tool.

Barry does mention a plugin for Wordpress that can convert your blog to markdown. However, it would need admin access to your wordpress account and that will not work on the free Wordpress.com account.

### Gotchas during migration
While migrating the blog, I found a few things that would be interest to others too:

#### Gotcha&#35; 1: Title won't support the __':'__ characater.
In the default jekyll template, there is this header:
<pre>
	layout: post
	title: My first github page!
	comment: true
</pre>

The __title__ tag will be used to generate the HTML &lt;title&gt; tag. If the title has a ':' in it, the parser appeared to fail detecting the correcting end-point. So these kind of title tags will fail.
<pre>
 title: Book Review: The Phoenix Project
</pre>

The praser doesn't know if the word is _title_ followed by everything of it is _title: Book Review__ followed by everything. Unfortunately, the error message will be very unhelpful. If you run into a parser issue, here's how to debug:

* Update and publish your post.
* After 5 mins, check if the post is shown or the updates appear on the website.
* If updates don't show up, check for error messages. To see the error message, do the following:
	- Go to your github project.
 	- Click on the project settings tag
 		![Project settings](/images/github_project_settings.png)
 	- Scroll down to the section *GhitHub Pages*. If parsing was successful, you should see a message like this:
 		![Parser success message](/images/github_parser_success.png)
 	- If you see an error about time stamp or any kind of parsing error, it means that your latest push has broken the parser. The simplest way to debug it is to revert back the change and start tweaking the latet post.

#### Gotcha&#35; 2: Post name should not contain an '&amp;' character
When saving the blog post, ensure that you avoid using the &amp; character. This character is treated literally and copied to sitemap.xml file. This makes your sitemap.xml file invalid and bots like Google will ignore it. This is not a good position to be in. So ensure that you eliminate any special characters from the blog post file name.

I am still learning this new tool. I'll keep updating the post as I found more issues.

## Conclusion
At this point in time, I am pretty happy with the GitHub pages. I've started the process of migration and indicating to the SEO bots that my individual blog posts have moved. Hopefully, I'll be able to see the traffic movement and that would be a topic for an upcoming blog post!
