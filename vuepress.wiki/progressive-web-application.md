- [vuepress](#vuepress)  
  * [3. Plugin: PWA, Progressive Web App](#3-plugin-pwa-progressive-web-app)
    + [3.1 pwa를 위한 plugin 설치](#31-pwa를-위한-plugin-설치)
    + [3.2 config.json에 plugin 등록](#32-configjson에-plugin-등록)
    + [3.3 이미지를 추가하기 위해 .vuepress/public/ 생성](#33-이미지를-추가하기-위해-vuepresspublic-생성)
    + [3.4 manifest.json 추가](#34-manifestjson-추가)

# vuepress
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


