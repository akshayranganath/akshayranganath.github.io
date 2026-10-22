# akshayranganath.github.io

Source for Akshay Ranganath's blog at <https://akshayranganath.github.io>, built with Jekyll on GitHub Pages and based on the Jekyll Now theme.

## Writing a post

Name posts `_posts/YYYY-MM-DD-Title.md` and use this front matter:

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

Put post images in `images/blog/`. Before committing, run `pngquant` on PNGs larger than 500 KB and replace the original with the smaller output.

Drafts live in `_drafts/` and are included only when Jekyll is run with `--drafts`; move a draft to `_posts/` to publish it.

## Supported Markdown extras

- GitHub alerts use blockquote markers such as `> [!NOTE]` and `> [!TIP]`.
- Mermaid diagrams use fenced blocks labeled `mermaid`.
- MathJax renders inline and display math delimited with `$$...$$`.
- Emoji shortcodes such as `:smile:` render as emoji.
- GitHub @mentions such as `@username` link to profile pages.

## Local development

Install dependencies and serve the site:

```sh
bundle install
bundle exec jekyll serve
```

Add `--drafts` to include drafts. Use `bundle exec jekyll build` for a static build.

On Ruby 4, Liquid may raise `undefined method 'tainted?'`, and Jekyll may need the `csv` and `bigdecimal` gems loaded before Bundler. Create `~/.jekyll-ruby4-compat.rb` with this shim:

```ruby
require 'csv'
require 'bigdecimal'

class Object
  def tainted?
    false
  end
end
```

Run commands with `RUBYOPT="-r$HOME/.jekyll-ruby4-compat.rb" bundle exec jekyll serve` (or replace `serve` with `build`).

## Deploy

Push to `master`; GitHub Pages builds and publishes the site. There is no CI or test suite.
