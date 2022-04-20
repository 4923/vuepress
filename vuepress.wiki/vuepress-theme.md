> 약식으로 먼저 메모

1. github에 `vuepress-theme` 로 검색
    - vuepress theme는 `vuepress-theme-<name>` 형식으로 이름을 짓는다.
2. 원하는 테마를 하나 선정한 후 설치
    - README를 참조하면 되나 대개 `yarn add` 명령어를 이용한다.
3. `.vuepress/config.js` 에서 적용한다.
    - 원래 theme를 따로 설정해주지 않으면 기본 테마 (우리가 처음 본 그 테마) 가 기본으로 설정된다.
    ```js
    module.exports = {
        // title, description ... ...
        theme: 'theme name'
    }
    ```
    - 위와 같이 입력해주면 되는데, 2항에서 적었듯 vuepress theme의 이름에는 일반적인 형식이 있어서 테마 이름이 `vuepress-theme-XXX` 라면 `theme: 'XXX'` 만 적어줘도 무방하다.
4. 테마에서 요구하는대로 config.js 를 설정해주자. 제공하는 기능이 다를 수도 있고, 형식이 다를 때도 있어서 기본 세팅으로 빌드하면 렌더링 오류가 나는 경우가 있다. ([빙빙 돌아갔던 기록](https://github.com/4923/vuepress/issues/7))
