
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
