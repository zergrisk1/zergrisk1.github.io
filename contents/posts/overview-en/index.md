---
emoji: "✋"
title: "1. Overview"
date: 2025-01-19 13:54:00
update: 2025-01-19 13:54:00
tags:
   - rundevelrun
   - overview
series: "Getting Started with Gatsby Blog"
---


> ⚠️ Since a translator was used, there may be inaccuracies.

## 🎬 Introduction

Before using Gatsby, I managed a personal blog with Jetbrains' [Writerside↗](https://www.jetbrains.com/help/writerside/discover-writerside.html). While I was quite satisfied with the design elements, the tool, being primarily intended for document purposes, had many shortcomings for blog management (such as lack of RSS Feed support, difficulty in customization, and no GraphQL support).

Fortunately, I was able to get started with Gatsby thanks to [devHudi↗](https://github.com/devHudi/gatsby-starter-hoodie), who generously shared a very well-crafted source on GitHub. Although I made some modifications to suit my needs, most of the source was created based on the original.

I extend my deep gratitude.

## ▶️️ Live Demo

> [https://6developer.com](https://6developer.com)

## ✅ Key Features

The key features are derived from the contributions of [devHudi↗](https://github.com/devHudi/gatsby-starter-hoodie):
> - Markdown
> - Code highlighting
> - Katex syntax
> - Dark mode (integrated with OS settings)
> - Tag classification
> - Series classification
> - Responsive web design
> - SEO
> - Giscus

## ✍️ Modified Content

### 2025.01.19
1. In addition to the title used for SEO, headerTitle and headerSubTitle have been added.
   - headerTitle and headerSubTitle support HTML tags.
   - If headerSubTitle is present, the Title area changes every 5 seconds.
2. Added 'emoji' to the Frontmatter
   - This is to ensure that only titles without emojis are displayed in the SEO Title.
3. SEO modifications
   - The blog title has been added after the post title. <br/> e.g. 'Overview | YOUR:BLOG:NAME'
   - On the '/' page, only the blog title is displayed. <br/> e.g. 'YOUR:BLOG:NAME'
4. A search function has been added to the '/' page.
5. The number of posts found is displayed as a Badge on the '/' and '/search' pages.
6. The title and copyright have been separated.
7. Some UI elements have been changed.

## 👋 Conclusion

For suggestions on feature additions or any inconveniences, please visit [Discussions↗](https://github.com/rundevelrun).