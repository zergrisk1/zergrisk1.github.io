# Writing Blog Posts

This starter uses file-based routing. All posts live in the `content/blog/` directory. Each post is a folder with an `index.md` inside.

## 📁 Basic Structure

```
contents/
  posts/
    hello-world/
      index.md
```

## 📝 Required Frontmatter

```md
---
title: "Hello World"
date: "2025-04-01"
description: "My first blog post"
tags: ["gatsby", "starter"]
thumbnail: "./thumbnail.jpg"
---
```

## ✍️ Writing Content

Use standard Markdown syntax. Code blocks, images, and tables are all supported.

Example:

````md
## Introduction

This blog is powered by Gatsby and Markdown.

```js
console.log("Hello Gatsby!");
```
````