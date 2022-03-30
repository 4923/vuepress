- [vuepress](#vuepress)
    * [2. CI/CD: Github Action으로 배포 자동화하기](#2-cicd-github-action으로-배포-자동화하기)
        + [2.1 root에 .github/workflows/ 폴더를 생성한다.](#21-root에-githubworkflows-폴더를-생성한다)
        + [2.2 배포를 자동화해주는 main.yml 파일을 생성한다.](#22-배포를-자동화해주는-mainyml-파일을-생성한다)
        + [2.3 Workflows 설정을 위한 Personal Token을 발급받는다.](#23-workflows-설정을-위한-personal-token을-발급받는다)
        + [2.4 발급받은 토큰을 repo에 입력한다.](#24-발급받은-토큰을-repo에-입력한다)
        + [2.5 이제 add commit push로 배포 가능해졌다.](#25-이제-add-commit-push로-배포-가능해졌다)

# vuepress
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