> 여기서부터는 개인적으로 추가하는 보충 내용이므로 starter kit의 넘버링에 포함하지 않는다.

# vuepress
## github style comment

### 1. intro: 이런게 탐이 났다.
기술 블로그를 돌아보다 보면 꼭 익숙한 스타일의 댓글 기능이 보인다. Github Issue에서 댓글을 달 때 보이는 그 스타일의 댓글 기능. 그게 탐이 났다. 그래서 내 블로그에 붙여보기로 했다.

| 기술블로그 댓글 | Github Issue comment |
| :-: | :-: |
| ![blog](https://user-images.githubusercontent.com/60145951/164206248-d6ea8eb0-652d-46ee-a5e0-6cb503c4a283.png) | ![issue](https://user-images.githubusercontent.com/60145951/164206474-838e9605-9650-4e90-97d5-6d45a54566a7.png)|

제법 비슷하지 않은가?

### 2. 원리는 이렇다: `utterances` 와 `github issue`

> 1. `utterances` 를 이용한다.  
> 2. 게시글마다 github issue를 발행한다.

`utterances` 를 이용해 구현하는 방식과 `disqus` 를 이용해 구현하는 방식 두가지가 있는데, 우선 먼저 눈에 띈 `utterances` 방식으로 구현하겠다.

1. [utterances](https://github.com/apps/utterances) 에 가서 본인 github 계정으로 로그인하고 install한다.  
    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164210449-adc312fd-d882-418d-a1ef-4126233312df.png">
    1. utterances 는 github app의 일종이다.
    2. 본인이 속한 organization이 있다면 그 항목까지 이후 페이지에 보여질텐데, 댓글 기능 추가를 원하는 블로그 repo가 개설된 계정을 선택하면 된다.
    3. 이후 모든 repo / 특정 repo 를 선택하여 읽고 쓸 권한을 부여하게 되는데 원하는대로 하면 된다.
2. 게시글마다 issue를 발행하는 방식이므로 comment를 모을 repo의 주소를 마련한다.
    - 참고 자료에서는 따로 repo를 생성하여 블로그의 comment들을 모으는 방식을 제안하지만 내 블로그 repo의 주소를 담기로 했다.
        1. 블로그 게시글과 필연적으로 관계가 있을 것이고
        2. 이 블로그의 목적은 기록이지 소통이 아니기 때문에 댓글이 많이 달리지 않을 것이라고 판단했기 때문이다.
        3. 또, 개발 issue와 혼선이 있다면 github의 filter 기능을 이용하면 된다.
    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164211592-71ab34d1-1c61-45cd-96ba-8b169d1fd1c3.png">
3. 설정 항목에서 issue 제목을 어떻게 할 것인지, 태그는 또 어떻게 할 것인지 상세하게 물으니 호불호에 따라 설정하도록 하자.
    - 설정 가능 항목
        <img width="1000" alt="image" src="https://user-images.githubusercontent.com/60145951/164211750-f6f45507-62f4-42ac-95fd-d6c124c2e0f4.png">
        1. post <-> issue mapping
            > 적고보니 기본세팅인 페이지 경로를 포함한 issue 이름이 가장 무난한 것 같다.
            - issue 이름이 페이지 경로를 포함하게 하도록 (기본세팅)
            - issue 이름이 페이지 URL을 포함하게 하도록
            - issue 이름이 페이지 이름을 포함하게 하도록
            - issue 이름이 open graph 라는 제목 형식을 따르게 하도록
            - issue 이름에 특정한 번호를 부여하도록: 현재 issue, PR에 고유 번호를 붙이는것과 유사한 것 같다.
            - issue 이름이 특정 용어를 포함하게 하도록
        2. Issue Label
            > 현재 저장소에 존재하는 label 이름을 사용해야 하며 .✨💬✨ 이모지를 사용 가능하고 대소문자를 구분한다. 
4. 모든 세팅을 끝내면 아래와 같이 `<script>` 코드가 나온다.
    ```js
    <script src="https://utteranc.es/client.js"
        repo="https://github.com/4923/vuepress"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
    </script>
    ```

### 3. 댓글 컴포넌트 삽입
> [주요 참고: 기억보다 기록을 blog](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/)

그런데 2.4에서 작성된 코드를 그대로 적으면 문제가 생기는지 참고 블로그에서는 조금 다른 코드를 제시했다. vue에 대한 이해를 쌓은 후 다시 이유를 파악해보자.

```vue
<!-- vuepress/docs/.vuepress/components/Comment.vue 생성 -->
<template>
  <div ref="comment"></div>
</template>
<script>
// https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/#댓글-컴포넌트-추가
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";

    utterances.setAttribute("issue-term", "pathname"); // pathname|url|title|og:title 중 택 1
    utterances.setAttribute("theme", "github-light"); // theme 설정 (github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
    utterances.setAttribute("repo", `4923/vuepress`); // 주의!! 사용할 repository

    this.$refs.comment.appendChild(utterances);
  },
};
</script>
```

이제 게시글을 작성하고 포스팅의 마지막에 `<Comment />` 를 추가하면 댓글이 생긴다.

```markdown
## 제목은 # 두개로 작성한다고 했다.

깃허브 스타일 댓글을 추가해보자.

<Comment />
```


### 4. 댓글 컴포넌트 삽입 (2) 모든 곳에 댓글을 넣고 싶을 때
> Layout.vue를 사용한다.

```js
// .vuepress/theme/Layout.vue 생성
<template>
  <ParentLayout>
    <Comment />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Comment from "../components/Comment";
export default {
  components: {
    ParentLayout,
    Comment
  }
};
</script>

```