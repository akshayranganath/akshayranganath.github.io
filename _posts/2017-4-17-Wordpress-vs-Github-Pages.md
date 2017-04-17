---
layout: post
title: Blogs on Wordpress.com vs Gihub Pages
comment: true
description: Wordpress.com gets a lot of attention about its bloat and slowness. While moving to Github pages, I ran a comparison and wanted to show the magnitude of difference across the 2 platforms.
---

Wordpress.com gets a lot of attention about its bloat and slowness. While moving to Github pages, I ran a comparison and wanted to show the magnitude of difference across the 2 platforms.

## Background
On the WebPagetest forums, there are a lot of questions about slowness and issues with Wordpress. For example, sample these 3 top results for my search query 
	
	wordpress slow site:www.webpagetest.org

* wordpress extremely slow, even on empty page
* very slow load times
* variable wordpress time to first byte
<cite><a href="https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enUS705US705&ion=1&espv=2&ie=UTF-8#q=wordpress+slow+site:www.webpagetest.org">Google search result</a></cite>

During last month, I moved my blog from Wordpress to Githubpages. I wrote about it in the reason and the steps in earlier post, __[Migrating Wordpress Blogs to GitHub Pages](https://akshayranganath.github.io/Migrating-Wordpress-Blogs-to-Github-Pages/)__. While I was migrating, I captured some metrics from WebPageTest to measure the magnitude of the reduction I could derive from this migration.

For the purpose of the comparison, I used the blog post, [Useful SEO Tags - Part 1](https://akshayranganath.github.io/Useful-SEO-tags-part-1/). At the time of migration, both the posts had the exact same content and same set of embedded images within the post. 

## Blog performance compared

Before comparing all the metrics, it is important to note that both the platforms use a CDN underneath. So the CDN can help in reducing the response times through various caching and routing optimization. For the purpose of the test, I used the following settings:

* WebPageTest agent in Dulles - Thinkpad,VA
* User-Agent Chrome 
* 9 test runs for each test

With the test, here's the results I get. The numbers are from the [WPT comparison page](https://www.webpagetest.org/video/compare.php?tests=170325_8H_PX2%2C170325_XY_PCF&thumbSize=200&ival=100&end=full).

| WPT Test | First byte | Start render | Visually Complete | Speed Index | Doc Complete | Fully loaded | # Req | Bytes |
| ---- | ---------- | ------------ | ----------------- | ----------- | ------------ | ------------ | ----- | ----- |
| [Github](https://www.webpagetest.org/result/170325_8H_PX2/7/details/) | 0.208s | 0.892s | 0.9s | 900 | 1.576s | 4.223 s | 44 | 569 KB |
| [Wordpress](https://www.webpagetest.org/result/170325_XY_PCF/8/details/) | 0.202s| 2.078s | 2.7s | 2205 | 3.617s | 7.876s | 84 | 1026 KB |
| _Reduction_ | _-3%_ | _57%_ | _67%_ | _59%_ | _56%_ | _46%_ | _48%_ | _45%_ | 

Across the board, I see a huge reduction. SpeedIndex reduced by almost 60% indicating above the fold content was available within a second. The dramatic improvement is better visualized in this visual progress image.
![github vs wordpress - visual progress](/images/github_vs_wordpress_visual_progress.png)

Here's a graphic on the reduction in each performance metric.
![github vs wordpress - timing metrics](/images/github_vs_wordpress_timing_metrics.png)

Finally, here's the side-by-side video of the websites loading the content.
![comparison video](/images/github_vs_wordpress_video.mp4)

## Github Pages FTW!
Based on the numbers, Githubpages shaved off more almost half the bytes resulting in a much more peformant website. Wordpress did add a lot of scripts that were not necessary for rendering and I had no control over its use. With Github pages, I do have 2 external scripts in the form of Google Analytics and Disqus. Since I know the scripts, I can easily control. If at some point say Disqus misbehaves, I can very easily remove it when building the page and performance will improve. I had no such freedom on Wordpress blog.

And a final thought: Despite the fact that a CDN was in play in both cases, creating a simpler and optimal page page made a huge impact to performance. So please don't consider your CDN vendor as a magician who can pull out performant website from a hat! Good performance needs to be carefully designed and implemented!

