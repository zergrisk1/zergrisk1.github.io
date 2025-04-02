# 블로그 포스트 작성법

이 스타터는 Gatsby의 파일 기반 라우팅을 활용하여, `content/blog/` 폴더에 Markdown 파일을 추가하면 자동으로 포스트가 생성됩니다.

## 📁 기본 구조

```
contents/
  posts/
    hello-world/
      index.md
```

## 📝 필수 Frontmatter

```md
---
title: "Hello World"
date: "2025-04-01"
description: "처음 작성하는 블로그 포스트"
tags: ["gatsby", "starter"]
thumbnail: "./thumbnail.jpg"
---
```

## ✍️ 콘텐츠 작성

Markdown 문법을 사용하여 본문을 작성하세요. 코드 블록, 이미지, 표 등도 모두 지원합니다.

예시:

```md
## 서론

이 블로그는 Gatsby와 Markdown을 기반으로 만들어졌습니다.

```js
console.log("Hello Gatsby!");
```
```