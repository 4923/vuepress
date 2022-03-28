# vuepress


1. yarn create vuepress-site
    - 중간에 프로젝트 명은 관습에 따라 docs로 설정

2. yarn add -D vuepress
현재 위치에 package.json이 있어야 인식 가능

vuepress가 완전히 독립적인 패키지가 아니라 그 패키지들을 서로서로 이용하게 된다?
vuepress 패키지를 설치하면 다른 패키지들도 설치 됨.
그 설치가 된 결과물이 dependencies로 정리된다.
-D 옵션은 개발자를 위한 옵션 (-dev) : 개발자가 효율적으로 개발할 수 있게 하는 옵션
이거 없이 하는건 사용자에게 편리하게!

3. yarn build
docs 폴더 안의 마크다운을 html로 변환하는 작업을 vuepress 패키지에서 자동으로 작업
그 결과물은 .vuepress 에 dist로 저장된다.
링크도 자동으로 연결된다

4. yarn dev
build를 통해 dist하위에 생성된 html 파일들이 local host에서 실행된다.
<img width="588" alt="image" src="https://user-images.githubusercontent.com/60145951/160387857-d7aebb15-6283-4b36-a219-5b09633bdee7.png">
이곳에서 localhost로 이동하면 디폴트 문서들이 모인 Start page가 보인다.
<img width="1624" alt="image" src="https://user-images.githubusercontent.com/60145951/160387904-24edbe9e-1cdf-456c-a127-42b8fcd3be65.png">
- dist 안의 config, guide 내용이다.

5. 이제꾸며보자
index.md 부터 꾸미면 된다.