# vuepress

## 시작부터 배포까지
> [@Parkjju와 함께하는 Vuepress 시작하기](https://parkjju.github.io/vue-TIL/vuepress/start.html#static-site-generator)

### 1. `yarn create vuepress-site`
NOTE: 중간에 프로젝트 명은 관습에 따라 docs로 설정

### 2. `yarn add -D vuepress`
NOTE: 현재 위치에 package.json이 있어야 인식 가능
- `-D` 옵션은?
    - vuepress가 완전히 독립적인 패키지가 아니라 vuepress 패키지를 설치하면 다른 패키지들도 설치 됨. 그 설치가 된 결과물이 dependencies로 정리된다.
    - `-D` 옵션은 개발자를 위한 옵션 (-dev) : 개발자가 효율적으로 개발할 수 있게 하는 옵션. 이거 없이 하는건 사용자에게 편리하게!

### 3. yarn build
build는 docs 폴더 안의 마크다운을 html로 변환하는 작업을 vuepress 패키지에서 자동으로 작업하는 것. 그 결과물은 .vuepress 에 dist로 저장된다. 링크도 자동으로 연결되니 편하다.

### 4. yarn dev
build를 통해 dist하위에 생성된 html 파일들이 local host에서 실행된다.
<img width="588" alt="image" src="https://user-images.githubusercontent.com/60145951/160387857-d7aebb15-6283-4b36-a219-5b09633bdee7.png">
이곳에서 localhost로 이동하면 디폴트 문서들이 모인 Start page가 보인다.
<img width="1624" alt="image" src="https://user-images.githubusercontent.com/60145951/160387904-24edbe9e-1cdf-456c-a127-42b8fcd3be65.png">
dist 안의 config, guide 내용이다.

### 5. 이제꾸며보자
index.md 부터 꾸미면 된다. 폴더를 만들어서 마크다운을 만들어보자.

```markdown
--- 
title: blahblahblah
---

## 제목은 # 두개
> 기본 md 처럼 # 하나만 붙이면 좌측 사이드바에서 인식을 못하므로 두개를 붙여주자.
```

### 6. .vuepress/config.js에서 '내가 이런 파일을 만들었다' 는걸 vuepress에 알려주자
```js
{
    title: 'CS',
    collapsable: true,
    children: ['CS/intro']
}
```
collapsable을 false로 하면 하위 값이 열린 채로 보여지고, true로 하면 닫힌채로 보여진다.   
children에서 배열으로 각 파일 목록을 관리할 수 있다.

### 7. docs 하위에 첫 페이지가 될 md를 생성한다.
예시: `intro.md` 
내용은 아무거나

### 8. quick start에서 링크를 생성해서 관리하자.
```md
// intro.md
actionLink: /intro
```
여기의 actionaLink를 docs 하위에 생성한 intro 로 변경하자
- html 암만 수정해봐야 의미 없다. build 할 때 자동으로 만들어지기 때문.
- 확장자를 뗀 파일명으로만 주소를 설정하기 때문에 actionLink 를 /intro 로 해야지 /intro/ 로 하면 intro/ 폴더를 찾게 된다.
    - 그런데? 문제없이 열리는것 같다.

### 9. build, dev
- 유의: build 전에 파일들을 다 저장 할 것
quick start 눌렀을 때 좌측의 사이드바 제대로 나오면 성공

