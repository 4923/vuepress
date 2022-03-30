- [vuepress](#vuepress)
  * [4. CMS & forestry](#4-cms--forestry)
    + [4.1 가입](#41-가입)
    + [4.2 local에서 .forestry 폴더 생성](#42-local에서-forestry-폴더-생성)
    + [4.3 pull: forestry가 연결되면 자동으로 default configuration 파일을 생성하므로 pull](#43-pull-forestry가-연결되면-자동으로-default-configuration-파일을-생성하므로-pull)
    + [4.4 .forestry/settings.yml 수정](#44-forestrysettingsyml-수정)
    + [4.5 add - commit - push 로 배포](#45-add---commit---push-로-배포)

# vuepress
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