---
emoji: "✋"
title: "1. 개요"
date: 2025-01-18 13:54:00
update: 2025-01-18 13:54:00
tags:
  - rundevelrun
  - overview
series: "Gatsby 블로그 시작하기"
---

## 🎬 시작

Gatsby를 사용하기 전에는 Jetbrains의 [Writerside↗](https://www.jetbrains.com/help/writerside/discover-writerside.html)를 이용해서 개인 블로그를 운영하면서 디자인적인 요소들은 상당히 만족스러웠지만 
문서의 목적으로 만들어진 도구이기 때문에 블로그 운영에는 적합하지 않은 부분이 많이 있었습니다. (RSS Feed 미지원, 사용자화의 어려움, GraphQL 미지원 등)

그러던 중 정말 감사하게도 아주 깔끔하게 제작된 소스를 Github에 공개해주신 [devHudi↗](https://github.com/devHudi/gatsby-starter-hoodie)님 덕분에 Gatsby에 입문할 수 있었고, 제가 필요한 부분을 일부 수정하는 과정을 거쳤지만 대부분의 소스는 원본소스를 바탕으로 제작되었습니다.

깊은 감사의 말씀을 전해드립니다.

## ▶️️ Live Demo

> [https://6developer.com](https://6developer.com)

## ✅ 주요 기능

주요한 기능은 [devHudi↗](https://github.com/devHudi/gatsby-starter-hoodie)님이 작성하신 내용을 가지고 왔습니다.
> - 마크다운
> - 코드 하이라이팅
> - Katex 문법
> - 다크모드 (OS 환경설정과 연동)
> - 태그 분류
> - 시리즈 분류
> - 반응형 웹
> - SEO
> - Giscus

## ✍️ 수정된 내용

### 2025.01.19
1. SEO에 사용되는 title 외 headerTitle, headerSubTitle이 추가되었습니다. 
   - headerTitle, headerSubTitle은 Html 태그를 지원합니다.
   - headerSubTitle이 있는 경우 5초에 한번 Title 영역을 변경합니다.
2. Frontmatter에 'emoji' 추가
   - SEO Title에 Emoji가 포함되지 않은 제목만 표시하기 위함
3. SEO 수정
   - 게시글의 제목 뒤에 블로그의 제목이 추가되었습니다. <br/> e.g. 'Overview | YOUR:BLOG:NAME'
   - '/' 페이지에서는 블로그의 제목만 표시합니다. <br/> e.g. 'YOUR:BLOG:NAME'
4. '/' 페이지에 검색기능을 추가했습니다.
5. '/' 및 '/search' 페이지에 검색된 게시글의 수를 Badge로 표시합니다
6. title과 copyright를 구분했습니다. 
7. 일부 UI 요소 변경

## 👋 마치며

기능 추가에 대한 내용이나 불편 사항은 [Discussions↗](https://github.com/rundevelrun/gatsby-starter-rundevelrun/discussions/categories/-gatsby-starter-rundevelrun)에 남겨주세요.
사용자 입장에서 직접 블로그를 운영하면서 필요한 부분의 업데이트를 진행하겠습니다.