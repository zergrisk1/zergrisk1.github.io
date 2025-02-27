<h1 align="center">
  👋
</h1>
<h1 align="center">
  gatsby-starter-rundevelrun
</h1> 

> ⚠️ Since a translator was used, there may be inaccuracies.

> [한국어로 보기](https://github.com/rundevelrun/gatsby-starter-rundevelrun/blob/develop/README-kr.md)

## 🎬 Introduction

<img src="screen.png"/>

Based on the original source by [devHudi↗](https://github.com/devHudi/gatsby-starter-hoodie), some UI elements and features have been modified.
We will continue to update and fix any shortcomings.

Thank you for making the source available.

## ▶️️ Live Demo

> [https://6developer.com](https://6developer.com)

## ✅ Key Features

> - Adsense
> - SEO
> - Markdown
> - Code highlighting
> - Katex syntax
> - Mermaid syntax
> - Dark mode (integrated with OS settings)
> - Tag classification
> - Series classification
> - Responsive web design
> - Giscus

## 🧪 Test Environment
> NodeJS v22.13.0 <br/>
> yarn 1.22.22

## 🛠️ Environment Setup
1. Install [NodeJS↗](https://nodejs.org/en/download)
2. Install yarn
```shell
npm install -g yarn
```
3. Install gatsby-cli
```shell
yarn global add gatsby-cli
```
4. Create a Gatsby blog
```shell
gatsby new your-blog-name https://github.com/rundevelrun/gatsby-starter-rundevelrun.git
```

## 🚀 Running Development Environment
After completing the steps below, access `http://localhost:8000`
1. Install dependency packages
```shell
cd your-blog-name
yarn install
```
2. Start
```shell
yarn develop
```

## ☺️ Customization
Edit the contents of `blog-config.js`

```javascript
module.exports = {
   title: "YOUR:BLOG:NAME",    // SEO Blog title
   headerTitle: "YOUR:<em style='color:#ed6c02'>BLOG</em>:NAME", // Logo 1
   headerSubTitle: "<em style='color:#ed6c02'>YOUR</em>:BLOG:<em style='color:#ed6c02'>NAME</em>", // Logo 2
   copyright: "©YOUR:BLOG:NAME", // copyright in footer
   author: "YOUR:NAME",  // Your Name
   siteUrl: "https://6developer.com/", // Your Site URL
   description: "Hi, Nice to meet you !",  // Blog description
   links: {
      github: "https://github.com/rundevelrun",
      ...
   },
   giscus: {
      ...
   },
   adsense: {
      ...
   }
}
```

## 📝 Writing Posts
1. Create a post file in the `contents/posts` folder (two methods)
    1. Create a folder with the name to be used as the pathname and create an 'index.md' inside it
    2. Create a `*.md` file with the name to be used as the pathname
2. Write frontmatter
   ```yaml
   ---
   emoji: "🚀"
   title: "How do we get started?"
   date: 2025-01-19 13:53:00
   update: 2025-01-19 13:53:00
   tags:
      - rundevelrun
      - howto
   series: "Starting a Gatsby Blog"
   ---
   ```