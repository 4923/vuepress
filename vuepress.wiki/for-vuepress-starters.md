- [vuepress](#vuepress)
  * [1. 시작부터 배포까지](#1-시작부터-배포까지)
    + [1.1 yarn create vuepress-site](#11-yarn-create-vuepress-site)
    + [1.2 yarn add -D vuepress](#12-yarn-add--d-vuepress)
    + [1.3 yarn build: markdown으로 html을 생성한다.](#13-yarn-build-markdown으로-html을-생성한다)
    + [1.4 yarn dev: local server를 실행한다.](#14-yarn-dev-local-server를-실행한다)
    + [1.5 게시글을 작성하고 블로그를 꾸민다.](#15-게시글을-작성하고-블로그를-꾸민다)
    + [1.6 .vuepress/config.js에서 '내가 이런 파일을 만들었다' 는걸 vuepress에 알려준다.](#16-vuepressconfigjs-에서-내가-이런-파일을-만들었다-는걸-vuepress에-알려준다)
    + [1.7 docs 하위에 첫 페이지가 될 md를 생성한다.](#17-docs-하위에-첫-페이지가-될-md를-생성한다)
    + [1.8 landing page와 blog page를 연결한다](#18-landing-page와-blog-page를-연결한다)
    + [1.9 배포할 파일을 만든다. (build, dev)](#19-배포할-파일을-만든다-build-dev)
    + [1.10 landing page URL인 base 링크를 설정한다.](#110-landing-page-url인-base-링크를-설정한다)
    + [1.11 배포한다.](#111-배포한다)
  * [신기하고 재미있는 것들](#신기하고-재미있는-것들)
  * [2. CI/CD: Github Action으로 배포 자동화하기](#2-cicd-github-action으로-배포-자동화하기)
    + [2.1 root에 .github/workflows/ 폴더를 생성한다.](#21-root에-githubworkflows-폴더를-생성한다)
    + [2.2 배포를 자동화해주는 main.yml 파일을 생성한다.](#22-배포를-자동화해주는-mainyml-파일을-생성한다)
    + [2.3 Workflows 설정을 위한 Personal Token을 발급받는다.](#23-workflows-설정을-위한-personal-token을-발급받는다)
    + [2.4 발급받은 토큰을 repo에 입력한다.](#24-발급받은-토큰을-repo에-입력한다)
    + [2.5 이제 add commit push로 배포 가능해졌다.](#25-이제-add-commit-push로-배포-가능해졌다)
  * [여기까지 발생할 수 있는 이슈](#여기까지-발생할-수-있는-이슈)
  * [3. Plugin: PWA, Progressive Web App](#3-plugin-pwa-progressive-web-app)
    + [3.1 pwa를 위한 plugin 설치](#31-pwa를-위한-plugin-설치)
    + [3.2 config.json에 plugin 등록](#32-configjson에-plugin-등록)
    + [3.3 이미지를 추가하기 위해 .vuepress/public/ 생성](#33-이미지를-추가하기-위해-vuepresspublic-생성)
    + [3.4 manifest.json 추가](#34-manifestjson-추가)
  * [4. CMS & forestry](#4-cms--forestry)
    + [4.1 가입](#41-가입)
    + [4.2 local에서 .forestry 폴더 생성](#42-local에서-forestry-폴더-생성)
    + [4.3 pull: forestry가 연결되면 자동으로 default configuration 파일을 생성하므로 pull](#43-pull-forestry가-연결되면-자동으로-default-configuration-파일을-생성하므로-pull)
    + [4.4 .forestry/settings.yml 수정](#44-forestrysettingsyml-수정)
    + [4.5 add - commit - push 로 배포](#45-add---commit---push-로-배포)
  * [5. Plugin: GA](#5-plugin-ga)
    + [5.1 plugin 설치](#51-plugin-설치)
    + [5.2 GA 코드 발급](#52-ga-코드-발급)
    + [5.3 플러그인 등록 (GA4)](#53-플러그인-등록-ga4)
    + [5.4 GA 확인](#54-ga-확인)

# vuepress
## 1. 시작부터 배포까지
> [@Parkjju](https://github.com/Parkjju)와 함께하는 [Vuepress 시작하기](https://parkjju.github.io/vue-TIL/vuepress/start.html#static-site-generator)

### 1.1 yarn create vuepress-site
NOTE: 중간에 프로젝트 명은 관습에 따라 docs로 설정

### 1.2 yarn add -D vuepress
NOTE: 현재 위치에 `package.json`이 있어야 인식 가능
- `-D` 옵션은?
    - vuepress가 완전히 독립적인 패키지가 아니라 vuepress 패키지를 설치하면 다른 패키지들도 설치 됨. 그 설치가 된 결과물이 dependencies로 정리된다.
    - `-D` 옵션은 개발자를 위한 옵션 (-dev) : 개발자가 효율적으로 개발할 수 있게 하는 옵션. 이거 없이 하는건 사용자에게 편리하게!

### 1.3 yarn build: markdown으로 html을 생성한다.
build는 docs 폴더 안의 마크다운을 html로 변환하는 작업을 vuepress 패키지에서 자동으로 작업하는 것. 그 결과물은 .vuepress 에 dist로 저장된다. 링크도 자동으로 연결되니 편하다.
- 실제로 배포되는 파일은 이 `/dist/` 하위에 모여있다.

### 1.4 yarn dev: local server를 실행한다.
build를 통해 dist하위에 생성된 html 파일들이 local host에서 실행된다. django의 runserver처럼 localhost로 이동하면 디폴트 문서들이 모인 Start page가 보인다.  
  

| yarn dev | landing page |
| :-: | :-: |
|![yarn dev](https://user-images.githubusercontent.com/60145951/160387857-d7aebb15-6283-4b36-a219-5b09633bdee7.png) | ![landing page](https://user-images.githubusercontent.com/60145951/160387904-24edbe9e-1cdf-456c-a127-42b8fcd3be65.png) |

아무것도 하지 않고 build할 경우 생성되는 것은 config, guide 내용이다.  
앞으로도 html로 렌더링 된 결과값은 `./docs/.vuepress/dist` 에서 확인할 수 있다.

### 1.5 게시글을 작성하고 블로그를 꾸민다.
index.md 부터 꾸미면 된다. 폴더를 만들어서 마크다운을 만들어보자.

```markdown
--- 
title: blahblahblah
---

## 제목은 # 두개
> 기본 md 처럼 # 하나만 붙이면 좌측 사이드바에서 인식을 못하므로 두개를 붙여주자.
```

### 1.6 .vuepress/config.js 에서 '내가 이런 파일을 만들었다' 는걸 vuepress에 알려준다.
```js
{
    title: 'CS',
    collapsable: true,
    children: ['CS/intro']
}
```
- `collapsable`을 false로 하면 하위 값이 열린 채로 보여지고, true로 하면 닫힌채로 보여진다.
- `children`에서 배열으로 각 파일 목록을 관리할 수 있다. 새 파일을 생성했을 시 반드시 children에 파일명을 추가 하자.

### 1.7 docs 하위에 첫 페이지가 될 md를 생성한다.
landing page에서 quick start로 이동했을때 가장 먼저 보일 페이지, sidebar의 최상단에 위치할 페이지를 만드는 단계다. 파일명은 intro 또는 introduction으로 설정하는것이 직관적이며 제목이나 내용은 무엇으로 써도 관계없다. 원하는대로 작성하자.

### 1.8 landing page와 blog page를 연결한다
NOTE: quick start에 링크를 추가한다.
```md
// index.md
actionLink: /intro
```
- 여기의 actionaLink를 docs 하위에 생성한 intro 로 변경하자
- html 암만 수정해봐야 의미 없다. build 할 때 자동으로 만들어지기 때문.

### 1.9 배포할 파일을 만든다. (build, dev)
NOTE: build 전에 파일들을 다 저장 할 것

quick start 눌렀을 때 좌측의 사이드바 제대로 나오면 성공
<details>
<summary>성공!</summary>

![Mar-28-2022 22-37-40](https://user-images.githubusercontent.com/60145951/160409967-1d2dbc55-ae99-4a6f-a52e-4efea8bb40ec.gif)

- [issue track: sidebar에 시작 페이지명을 추가했었는데 그러지 말아야 했다.](https://github.com/4923/vuepress/commit/7b847f5c490142ac112d08c1a9316610de8f6274)

</details>

### 1.10 landing page URL인 base 링크를 설정한다.
NOTE : repository명이 github-id.github.io가 아닐 경우, 다시 말해 vuepress를 위한 repository를 새로 생성했을 경우 base 링크를 만들어야 한다.
- 예전에는 이랬다.
    - github에서는 각 계정당 하나의 github.io 도메인을 할당하는데 (@4923의 경우 4923.github.io) 이전에는 `github-id.github.io` 이름으로 생성한 repository 하나만 배포할 수 있었던 것에 반해 최근에는 repository를 따로따로 배포할 수 있게 되었다.
- base링크를 지정하지 않으면 CSS 적용이 안된다.
    - `github-id.github.io` 가 아닌 다른 이름으로 repository를 생성했을 경우 해당 repository의 시작점이 되는 링크를 지정해줘야 한다. 그러지 않았을 경우 github.io로 바로 이동하기 때문에 CSS 적용이 안되는 문제가 발생할 수 있다.  
- 나의 경우 
    - github-id 가 4923이니 개인 도메인은 4923.github.io이고, repository 이름을 vuepress로 지정했으니 baselink를 vuepress로 지정하면, 이 repository의 공개 링크는 `4923.github.io/vuepress` 가 된다.

적용방법은 아래와 같다. 경로를 지정할때 양쪽에 `/` 를 추가하는 것을 잊지 말자.
```js
// config.js
title: "~~~~",
description: description,
base: "/<repository name>/",      // 이 부분을 추가, 양쪽에 슬래쉬 추가
```

### 1.11 배포한다.
`vuepress/docs/deploy.sh` docs 하위에 deploy.sh 파일을 생성한 후 아래 source code를 붙여넣는다. 이 때 `<Username>`, `<Repository>` 는 본인의 깃허브 계정명과 repository 이름으로 바꾸자.  
NOTE: 기본 branch 이름이 main이 맞는지 확인. 아니라면 main:gh-pages가 아니라 master:gh-pages로 변경해야 한다.

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

`.sh` 확장자는 shell script다. 우리가 터미널에 명령어를 입력하고, 기다리는 과정을 코드로 자동화 하는 셈이다. 자세히 살펴보면 내용은 어렵지 않다. 이 커밋방식이 변경사항만 초기화 하는게 아니라 전체 내용을 올리는 force push 방식이란 것만 알면 된다. (`git push -f` 에서 `-f` 가 바로 force push의 약자다.)

1. build한 결과물만 배포하면 되므로 `yarn build` 하여 html 파일들을 만들고
2. build한 결과인 dist로 경로를 이동한다. (: `cd`)
3. dist만 commit 하면 되므로, `git init` 으로 git 저장소를 초기화한다.
4. 익히 알고 있는 add, commit, push를 진행하는데 이 때 `main:gh-pages`는  gh-pages 라는 브랜치를 생성해서 force push 하겠다는 이야기다.

이제 이 deploy 파일을 실행하면 되는데, 그 방법은 아래와 같다.
1. (root directory에 있을 경우) `cd docs`로 docs에 이동
2. `sh deploy.sh` 로 shell 파일 실행

`gh-pages` branch에 가면 실제로 배포에 필요한 html 파일들만 올라간 것을 확인 할 수 있다. 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/160418929-ffb5e471-169a-4b59-b15e-9a48c00bbba6.png">

우측의 `github-pages` 에서 github action 의 현재 상태를 볼 수 있는데 상단 이미지는 올라가고있는 상태! 를 말한다.

[https://4923.github.io/vuepress/](https://4923.github.io/vuepress/) 에서 배포된 결과를 확인할 수 있다.

---

## 신기하고 재미있는 것들

## 2. CI/CD: Github Action으로 배포 자동화하기
> [@Parkjju](https://github.com/Parkjju)와 함께하는 [Github Action 활용하기](https://parkjju.github.io/vue-TIL/git/GA.html#github-action%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%A6-%E1%84%83%E1%85%AC%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2)

### 2.1 root에 .github/workflows/ 폴더를 생성한다.
- Github의 workflows 기능을 사용할 것이다.
- `workflows` 임에 주의하자. 오타는 항상 주의.
### 2.2 배포를 자동화해주는 main.yml 파일을 생성한다. 
생성 후 [source code](https://github.com/4923/vuepress/blob/30ec39f1e4c9572ceaae67ecd50c0ae38086be37/.github/workflows/main.yml)의 내용을 복사, 붙여넣기한다. 이 때 yml 파일 이름은 무엇으로 해도 관계없다.

```yml
'''
간단한 코드 설명
필요하다면 공식문서 참조 할 것
'''

name: Build and Deploy      # name: github action의 이름
on: [push]      # trigger가 되는 event: git의 여러 이벤트 중 (add, commit, push ...) github action을 발동시키는 조건은 무엇인가
jobs:       # github action 은 여러가지 job으로 이루어져 있는데, 그 내용은 아래와 같다.
    build-and-deploy:
        runs-on: ubuntu-latest      # jobs가 실행되는 환경
        steps:      # build 과정을 자동화 하고 싶은것이니, build를 하는 repo에서 기능을 가져온다
            - name: Checkout
            uses: actions/checkout@master

            - name: vuepress-deploy
            uses: jenkey2011/vuepress-deploy@master   # 배포를 대신해주는 '그' repo
            env:      # github action에 사용되는 환경변수
                ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
                TARGET_BRANCH: gh-pages
                BUILD_SCRIPT: yarn && yarn build
                BUILD_DIR: docs/.vuepress/dist
```

### 2.3 Workflows 설정을 위한 Personal Token을 발급받는다.
- github -> settings -> developer settings -> personal access tokens -> generate new token
- 두번째 항목 `workflow`에 체크하고 발급받을 것
- 만료기한은 따로 정해두지 않아도 된다. (잘 관리한다면)

### 2.4 발급받은 토큰을 repo에 입력한다.
- repo settings -> secrets/actions -> new repository secrets -> value에 발급받은 토큰 입력

### 2.5 이제 add commit push로 배포 가능해졌다. 
이전에 설정해 둔 `deploy.sh` 는 쓰지 않아도 된다!

## 여기까지 발생할 수 있는 이슈
- sh 파일 실행 시 error: failed to push some refs to 'https://github.com/4923/vuepress.git' 로그가 발견된다면: Hint를 따라 root-commit branch 변경할 것 ([#1](https://github.com/4923/vuepress/issues/1))
- MacOs 에서 login용 token을 발급해서 쓰고 있는데 remote reject 오류가 발생한다면 ([#3](https://github.com/4923/vuepress/issues/3))
- Github Action 배포가 실패한다면:
    - 로그에 No matching page found가 있을 때, 첫 페이지인 intro.md 경로 문제가 아닌지 확인 ([#4](https://github.com/4923/vuepress/issues/4))

## 3. Plugin: PWA, Progressive Web App
- 참고  
    - [pwa알아보기](https://parkjju.github.io/vue-TIL/vuepress/pwa.html)
    - [vuejs.org](https://vuepress.vuejs.org/plugin/official/plugin-pwa.html)
    - [Tutorial. 뷰프레스(Vuepress)로 기술문서 빠르게 만들어보자!](https://limdongjin.github.io/vuejs/vuepress/#config파일에-플러그인-등록)

PWA가 브라우저와 다른 점? == native만의 장점: offline에서도 돌아간다.
- `service worker`: background에서 돌아가면서 새로운 글이 올라왔을 때 팝업이 올라온다.
- 모바일에서도 네이티브처럼 작동하므로 맥북 런치패드에서도 앱처럼 추가된다: 다운로드 가능!

추가해보자
- Note 1 : root directory (./) 에서 작업할 것
- NOTE 2: PWA를 위한 `plugin`을 설치해야한다.
    - vuepress에는 다양한 plugin이 있다. 스크롤 부드럽게, 로딩바 (스크롤에 따른?), 맨 위로 올라가기 등 다양한 기능을 plugin으로 추가 할 수 있다.


### 3.1 pwa를 위한 plugin 설치
```sh
yarn add -D @vuepress/plugin-pwa
```

### 3.2 config.json에 plugin 등록
```js
// docs/.vuepress/config.js
module.exports = {
    // ...
    head: [
        ['link', { rel: 'icon', href: `/images/logo-144.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }]
    ]
}
```
### 3.3 이미지를 추가하기 위해 .vuepress/public/ 생성

### 3.4 manifest.json 추가
- 설치 경로: `.vuepress/public/manifest.json`
- 간단한 설명
    - name: 앱 이름
    - short name: 최초 실행시 2초정도 보여주는 splash view에서 pavicon과 함께 보여주는 화면의 이름
    - (중요) start_url: 시작 위치!
    - icons: 다양한 환경에 맞춰 여러가지를 정의
- process
    1. `manifest.json` 안에 코드 입력 ([source code](https://github.com/4923/vuepress/blob/main/docs/.vuepress/public/manifest.json))
    2. 이미지가 실제로 있어야 하므로: 생성한 publics 하위에 images 생성 후 `publics/images/` 이미지 추가
        - vuepress는 publics에 이미지를 모은다.
        - 이미지 형식은 `png` 여야 한다. (<s>NOT jpg</s>)
    3. (중요) `config.js` 의 head에 manifest.json을 입력
        - module.exports가 중괄호로 감싸져있는데, 이 때 head가 html의 head 태그와 비슷하다.
        ```js
        // config.js
        head: [
            ["link", { rel: "shortcut icon", href: "./favicon.ico" }],
            ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
            ["link", { rel: "manifest", href: "./manifest.json" }],
            [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "192x192",
                href: "images/maskable_icon_x192.png",
            },
            ],
            [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
            ],
        ],
        ```



## 4. CMS & forestry
### 4.1 가입  
NOTE: branch는 gh-pages가 아니라 `main` 으로!

    <img width="200" alt="image" src="https://user-images.githubusercontent.com/60145951/160414667-d6d7f289-c237-468c-aa73-e35e4b9b8252.png">

### 4.2 local에서 `.forestry` 폴더 생성
### 4.3 pull: forestry가 연결되면 자동으로 default configuration 파일을 생성하므로 pull
### 4.4 `.forestry/settings.yml` 수정
    - 복사, 붙여넣기 하는데 이 때 'sections' 수정 할 것
    - 작성하는 문서 폴더를 sections에 설정해두면 생성한 이걸 API로 가져와서 forestry에서 보여준다.
    - path: 경로 주의
    - label: 사이드바에 '어떻게 표시 할 것인지'를 결정하므로 굳이 똑같지 않아도 된다.
### 4.5 add - commit - push 로 배포
    
<img width="1492" alt="image" src="https://user-images.githubusercontent.com/60145951/160599469-a4466d8e-a46b-4a65-ba2a-66e0f902bd67.png">

## 5. Plugin: GA
> plugin으로 Google Analytics 적용하기

공식문서: [vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html#install) 를 참고하자. GA 도 PWA와 마찬가지로 vuepress에서 기본으로 제공하는 official plugin 이다.

### 5.1 plugin 설치
PWA plugin을 추가했던 것 처럼 아래 명령어로 플러그인을 설치한다.

```zsh
yarn add -D @vuepress/plugin-google-analytics
# OR npm install -D @vuepress/plugin-google-analytics
```

### 5.2 GA 코드 발급
> NOTE! GA 버전이 올라가며 발급되는 코드 앞자리가 달라졌다.   
UA-000000 와 GA- 로 시작하는 코드는 사용할 수 없다.

1. [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision) 에서 구글 계정으로 로그인하고, start measuring 으로 가입 절차로 진입한다.  
    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164174494-f5c4d3ee-988d-4f78-8a9a-732ce357579d.png">
2. 계정명을 등록한다. ([참고](https://62che.com/blog/vuepress/Google-Analytics-연동하기.html#google-analytics-가입하기))

    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164175158-567fb7a2-6b33-434d-8206-a7d468e1e197.png">

    > NOTE! 가능하면 계정명을 vuepress 블로그명 등, 페이지를 총칭하는 이름으로 짓도록 하자. 하위 페이지까지 `Account Name` 으로 묶여서 관리되기 때문.  

    > 이 repo의 경우 레포이름이 `vuepress` 이므로 `Account Name` 도 `vuepress` 로 지정했다.

    - :hand: 페이지명이 겹치지는 않나요?
        - 깃허브에서 레포 이름을 짓는 것과 같은 느낌으로 생각하면 될 것 같다.
        - 깃허브의 URL이 github.com/`USER ID`/`REPO NAME` 인 것과 같이 다른 계정에 동일한 이름의 원격저장소가 있어도 그 전에 사용자명으로 갈리니 괜찮다.
        - 4923의 원격저장소 이름의 awesome 라고 해도 github 안에는 수많은 동일한 이름의 저장소가 있다.

    - 불필요한 정보들을 구글에 전송하고 싶지 않으므로 처음 체크된 약관만 놔두고 `Next` 를 눌러 다음 단계로 진행한다.

3. Property 등록: 분석하고 싶은 웹페이지 주소 추가, 시간대 설정  
    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164178946-e2aa601c-c139-4c86-bee4-6d3d8a59ccca.png">

4. About your business: 개인용이므로 아래와 같이 설정 (선택)  
    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164179100-07503d36-3c9c-4043-9715-3af269a182dc.png">
5. Next 누르고 이용약관 동의 하면 아래와 같은 설정페이지가 나온다.  
    <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164179315-c896d589-4477-4c71-87eb-8482b4753d9a.png">
6. `Data Stream` 추가
    1. 좌측 햄버거 메뉴 하단에서 Data Stream 선택 후
    2. 우측에서 우리의 타겟인 Web 을 선택하고
    3. 이동된 페이지에서 추적을 원하는 웹페이지 주소를 입력한다.  
        <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164179616-85032a5e-437f-4fa9-96b1-50cac3f7643c.png">
    4. 이후 `Create Stream` 으로 Data Stream 을 추가한다.  
        <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164179733-db2ea032-8aa3-48f7-aded-7c1cef73b12f.png">
    5. 여기에서 나온 `MEASUREMENT ID` 를 잘 저장해둔다. 이후에 플러그인을 등록할 때 사용하게 될 것이다.  
        <img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/164180322-fd09bb05-dc22-4250-b0d0-0c4b3cff6758.png">



### 5.3 플러그인 등록 (GA4)

<details>
<summary>공식문서에 적힌 예전 방법</summary>

```js
// 더 이상 사용하지 않는다.

module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ]
}
```


공식문서는 아직 업데이트 되지 않아서 GA 인증번호를 입력하는 부분을 `'ga': '' // UA-00000000-0` 라고 적어두었는데 5.2 에서 기술한 바와 같이, 버전 업데이트로 인해 UA 로 시작하는 코드는 더이상 사용되지 않는다.

- 문제를 보고한 [issue](https://github.com/vuejs/vuepress/issues/2713)

</details>

따라서 우리는 `config.js`의 `head` 영역에 GA코드를 등록하게 되었다.

```js
// config.js
// https://kim-eun-ji.github.io/etc/2021-06-09-vuepress_ga/

module.exports = {
	head: [
	    [
	      "script",
	      {
	        async: true,
	        src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
	      },
	    ],
	    ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');"]],
	  ],
}

```

여기서 `G-XXXXXXXXXX` 부분을 본인의 코드로 변경하면 된다.

### 5.4 GA 확인

어떻게 확인하는가?
1. 개발자 도구를 열어
2. 콘솔에 `gtag` 를 검색한다.
3. 아래와 같은 설정이 나온다면 성공, 아니라면 코드가 제대로 발급되었는지 확인하는 절차를 거치자
    ```js
    input  > gtag
    output > ƒ gtag(){dataLayer.push(arguments);} // 함수 정의가 나오면 성공
    ```