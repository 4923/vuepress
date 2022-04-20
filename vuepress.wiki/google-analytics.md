- [vuepress](#vuepress)
  * [5. Plugin: GA](#5-plugin-ga)
    + [5.1 plugin 설치](#51-plugin-설치)
    + [5.2 GA 코드 발급](#52-ga-코드-발급)
    + [5.3 플러그인 등록 (GA4)](#53-플러그인-등록-ga4)
    + [5.4 GA 확인](#54-ga-확인)

# vuepress
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