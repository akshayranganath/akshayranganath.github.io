# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based static blog hosted on GitHub Pages (`akshayranganath.github.io`), built on the "Jekyll Now" theme. There is no build tooling checked into the repo (no `Gemfile`, `package.json`, or `node_modules` — they're gitignored), so GitHub Pages builds the site remotely using its standard Jekyll pipeline. Content is almost entirely long-form blog posts in `_posts/`.

## Common commands

There is no local Gemfile/package.json committed, so these need to be set up ad hoc if testing locally:

```bash
# One-time local setup (mirrors GitHub Pages' Jekyll/Sass/plugins)
gem install github-pages

# Serve locally with live rebuild
jekyll serve
# site available at http://127.0.0.1:4000/
```

There are no tests, linters, or CI in this repo. The only "build" is GitHub Pages regenerating the site on push to `master`.

`gulpfile.js` defines two gulp tasks (`add`, `commit`) that watch `_posts/*.md` and auto git-add/commit/force-push on change. These are legacy convenience tasks, not part of any required workflow — don't assume gulp is installed or run these unless the user asks.

## Architecture

- **`_config.yml`** — site-wide settings (title, nav, pagination, plugins, permalinks). Uses `permalink: /:title/` (no date in the URL path) and pagination via `jekyll-paginate` at `/blog/page:num`.
- **`_layouts/`** — three layouts: `default.html` (page shell: head, header/nav, footer, analytics include), `page.html` (wraps `default`, adds Schema.org `Blog` JSON-LD), `post.html` (wraps `default`, renders title/date/content, includes Disqus).
- **`_includes/`** — `meta.html` (SEO/meta tags), `analytics.html` (Google Analytics), `disqus.html` (comments), `svg-icons.html` (footer social icons).
- **`_posts/`** — one Markdown file per post, named `YYYY-MM-DD-Post-Title.md`. Required front matter:
  ```yaml
  ---
  layout: post
  title: ...
  comment: true
  description: ...
  image: /images/blog/<file>.png        # or an {path, width, height} map for OG images
  tags: tag1, tag2, tag3
  ---
  ```
  Categories/tags pages (`categories.html`, `tags.html`) are auto-generated from post front matter via Liquid — no need to maintain them manually.
- **`images/blog/`** — image assets for posts published from ~2019 onward (earlier posts reference images directly under `images/`). Follow this convention for new posts' images.
- **`_sass/`** and **`style.scss`** — Sass partials compiled by Jekyll (`sass: style: :compressed` in `_config.yml`); no separate CSS build step needed.
- Root-level `.md`/`.html` files (`about.md`, `resume.md`, `404.md`, `sitemap.md`, `categories.html`, `tags.html`, `index.html`) are standalone pages, most using `layout: page` or `layout: default`.

## Content conventions

- New blog posts go in `_posts/` following the filename and front-matter pattern above; Jekyll derives the post date and URL slug from the filename.
- Keep front matter `tags` as a comma-separated string (not a YAML list) to match existing posts.
- Some posts are written in Devanagari/Kannada script (e.g. Vedanta-related posts) — preserve non-Latin filenames/content as-is when editing.
