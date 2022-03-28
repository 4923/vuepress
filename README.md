# vuepress

## 시작부터 배포까지
> [@Parkjju](https://github.com/Parkjju)와 함께하는 [Vuepress 시작하기](https://parkjju.github.io/vue-TIL/vuepress/start.html#static-site-generator)

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

<img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/160387904-24edbe9e-1cdf-456c-a127-42b8fcd3be65.png">

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

<img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/160418929-ffb5e471-169a-4b59-b15e-9a48c00bbba6.png">

`gh-pages` branch에 가면 실제로 배포에 필요한 html 파일들만 올라간 것을 확인 할 수 있다. 우측의 `github-pages` 에서 github action 의 현재 상태를 볼 수 있는데 상단 이미지는 올라가고있는 상태! 를 말한다.

> [https://4923.github.io/vuepress/](https://4923.github.io/vuepress/) 에서 배포된 결과를 확인할 수 있다.


## 신기하고 재미있는 것들

### 배포 자동화: github action
> [@Parkjju](https://github.com/Parkjju)와 함께하는 [Github Action 활용하기](https://parkjju.github.io/vue-TIL/git/GA.html#github-action%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%A6-%E1%84%83%E1%85%AC%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2)

1. root에 `.github/workflows/` 폴더를 생성
2. 이름은 별 관계 없지만 `main.yml` 파일 생성 후 아래 내용 복붙 ([source code](https://github.com/4923/vuepress/blob/30ec39f1e4c9572ceaae67ecd50c0ae38086be37/.github/workflows/main.yml)) 
    ```yml
    '''
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
                uses: jenkey2011/vuepress-deploy@master   # '그' repo
                env:      # github action에 사용되는 환경변수
                    ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
                    TARGET_BRANCH: gh-pages
                    BUILD_SCRIPT: yarn && yarn build
                    BUILD_DIR: docs/.vuepress/dist
    ```
3. Workflow 설정을 위한 Personal Token을 발급받는다.
    - github -> settings -> developer settings -> personal access tokens -> generate new token
    - 두번째 항목 `workflow`에 체크하고 발급받을 것
    - 만료기한은 따로 정해두지 않아도 된다. (잘 관리한다면)
4. 발급받은 토큰을 repo에 입력한다.
    - repo settings -> secrets/actions -> new repository secrets -> value에 발급받은 토큰 입력
5. 이제 add commit push로 배포 가능해졌다. 이전에 설정해 둔 `deploy.sh` 는 쓰지 않아도 된다!

- 발생할 수 있는 이슈
    - [macos 에서 login용 token을 발급해서 쓰고 있는데 remote reject 오류가 발생한다면](https://github.com/4923/vuepress/issues/3)


### plugin: PWA, Progressive Web App
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


1. pwa를 위한 plugin 설치
    ```sh
    yarn add -D @vuepress/plugin-pwa
    ```
2. config.json에 plugin 등록
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
    - `.vuepress/public/` 생성
3. `manifest.json` 추가
    - 설치 경로: `.vuepress/public/manifest.json`
    - 간단한 설명
        - name: 앱 이름
        - short name: 최초 실행시 2초정도 보여주는 splash view에서 pavicon과 함께 보여주는 화면의 이름
        - (중요) start_url: 시작 위치!
        - icons: 다양한 환경에 맞춰 여러가지를 정의
    - process
        1. `manifest.json` 안에 코드 입력 ([source code](https://github.com/4923/vuepress/blob/main/docs/.vuepress/public/manifest.json))
        2. 이미지가 실제로 있어야 하므로: publics/images/ 생성 후 이미지 추가
            - publics에 이미지를 모은다.
            - 이미지 형식은 `png` 여야 한다. (<s>NOT jpg</s>)
        3. (중요) `config.js` 의 head에 manifest.json을 입력
            - module.exports가 중괄호로 감싸져있는데, 이 때 head가 html의 head 태그와 비슷하다.
            - <details><summary>source code</summary>

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

                </details>

### CMS & forestry
1. 가입  
NOTE: branch는 gh-pages가 아니라 `main` 으로!

    <img width="200" alt="image" src="https://user-images.githubusercontent.com/60145951/160414667-d6d7f289-c237-468c-aa73-e35e4b9b8252.png">

2. local에서 `.forestry` 폴더 생성
3. pull: forestry가 연결되면 자동으로 default configuration 파일을 생성하므로 pull
4. `.forestry/settings.yml` 수정
    - 복사, 붙여넣기 하는데 이 때 'sections' 수정 할 것
    - 작성하는 문서 폴더를 sections에 설정해두면 생성한 이걸 API로 가져와서 forestry에서 보여준다.
    - path: 경로 주의
    - label: 사이드바에 '어떻게 표시 할 것인지'를 결정하므로 굳이 똑같지 않아도 된다.
4.  add - commit - push
    

### GA
> Google Analytics 적용하기

`추가 예정`