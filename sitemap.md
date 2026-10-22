---
layout: page
title: Sitemap
permalink: /sitemap/
description: Collated list of my blogs on topics related to DevOps core concepts, DevOps tools, Web Performance, front-end performance optimization and Search Engine Optimization
---

{% assign by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in by_year %}
## {{ year.name }}
{% for post in year.items %}
- [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) <small>{{ post.date | date: "%b %e" }}</small>
{% endfor %}
{% endfor %}
