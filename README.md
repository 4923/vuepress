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

아무것도 하지 않고 build할 경우 생성되는 것은 config, guide 내용이다.  
앞으로도 html로 렌더링 된 결과값은 `./docs/.vuepress/dist` 에서 확인할 수 있다.

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
- 여기의 actionaLink를 docs 하위에 생성한 intro 로 변경하자
- html 암만 수정해봐야 의미 없다. build 할 때 자동으로 만들어지기 때문.

### 9. build, dev
유의: build 전에 파일들을 다 저장 할 것

quick start 눌렀을 때 좌측의 사이드바 제대로 나오면 성공
<details>
<summary>성공!</summary>

![Mar-28-2022 22-37-40](https://user-images.githubusercontent.com/60145951/160409967-1d2dbc55-ae99-4a6f-a52e-4efea8bb40ec.gif)

- [issue track: sidebar에 시작 페이지명을 추가했었는데 그러지 말아야 했다.](https://github.com/4923/vuepress/commit/7b847f5c490142ac112d08c1a9316610de8f6274)

</details>

### 10. 레포를 새로 팠을때 base 링크를 따로 설정
: 안했을 경우 github.io 그 페이지로 이동하기 때문에 css적용이 안된다.
```js
// config.js
title: "~~~~",
description: description,
base: "/<repository name>/",      // 이 부분을 추가, 양쪽에 슬래쉬 추가
```

### 11. 배포
```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build commands
yarn build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m "deploy with vuepress script"
git push -f https://github.com/<Username>/<Repository>.git main:gh-pages

cd -
```
build한 결과물만 배포하면 되므로 `build` 하고 
터미널에서 경로를 이동
`git init` 으로 git 저장소 초기화
변경사항만 초기화 하는게 아니라 전체 내용을 올리는 force push 방식
- `git push -f https://github.com/<Username>/<Repository>.git main:gh-pages`
- gh-pages 라는 브랜치를 생성해서 forced push 하겠다는 이야기
- 이렇게 되면 자동으로 배포를 진행한다.

이제 이 deploy 파일을 실행하면 되는데, 그 방법은 아래와 같다.
- 1. cd docs로 docs에 이동
- 2. sh deploy.sh 로 shell 파일 실행

<img width="1460" alt="image" src="https://user-images.githubusercontent.com/60145951/160418929-ffb5e471-169a-4b59-b15e-9a48c00bbba6.png">

`gh-pages` branch에 가면 실제로 배포에 필요한 html 파일들만 올라간 것을 확인 할 수 있다. 우측의 `github-pages` 에서 github action 의 현재 상태를 볼 수 있는데 상단 이미지는 올라가고있는 상태! 를 말한다.


