---
title: Today I Learned
---

<Block>

# Today I Learned

머리에 가장 오래, 인상적으로 남은 일을 기록합니다.

<Example>

Ground Rule
- 하루에 하나씩 기록한다.
    - 개발에 국한되지 않아도 된다.
- 단, 너무 길어지지 않게 쓴다. 
    - 작은 Tip 위주로 또는 Insights 위주로
- 길어지는 내용 또는 보충이 필요한 내용이 있다면 다른 글을 링크한다.
    - 출처는 반드시 분명하게 적는다.

</Example>


[[TOC]]

</Block>
<Block>

## 2022

### 디지털치료제의 솔루션 (5/10)
- 디지털 치료기기 Digital Theraputics: 의학적 장애나 질병을 예방, 관리, 치료하기 위해 환자에게 근거 기반의 치료적 개입을 제공하는 소프트웨어 의료기기 (SaMD)
    - 소프트웨어 의료기기 Software as a Medical Devices SaMD: 하드웨어에 종속되지 않고 의료 기기의 사용 목적에 부합하는 기능을 가지며 독립적인 형태의 소프트웨어만으로 이루어진 의료기기

디지털 치료제의 contents를 어떻게 채워넣을 것인가? TEU MED 강연 이후 생각이 많아졌는데, 솔루션은 연구 기반으로 설계하고 `임상 시험` 결과를 빨리 뽑아내는게 중요하다. 허교수님께 들은 조언도 비슷했다. 수치로 결과를 증명할 수 있다면 사용자들의 인식은 달라진다.   
[디지털치료기기 허가·심사 가이드라인](https://www.mfds.go.kr/brd/m_1060/view.do?seq=14596&srchFr=&srchTo=&srchWord=&srchTp=0&itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&company_cd=&company_nm=&Data_stts_gubun=C1004&page=1)에 의하면 디지털 치료기기에 해당될 수 있는 제품은 예방 및 관리 기기와 치료 기기 두가지로 나뉘는데 두 분류 모두 
또한 `치료 작용 기전의 과학적/임상적 근거에 해당하는 자료`가 있어야 디지털 치료기기로 인정된다.  
MVP를 최대한 빨리 만들어서 사용자들의 반응을 보는 것이 중요할 것이고, 특정 기관과 협업하는것이 중요할텐데 질병/환자를 관리하는 단체가 없을 때엔 어떻게 접근해야 할 지... 이건 좀 더 생각해봐야 할 문제다.

</Block>
<Block>

### 웰니스 서비스? 디지털 치료제? (5/10)
의료 산업에 인공지능을 도입하는건 결코 쉽지 않다. 금일 TEU 강연에서 거듭 강조하셨듯 기술 개발과 사업화는 별개의 영역이다. 가능성이 보였다면 잠시 멈춰두고 판단을 해야한다.

1. 식약처 등급이 필요한 아이디어인가.
    - 몇 등급을 받아야 할 지, 구체적인 계획을 세울 것
2. 등급이 필요하지 않은 간단한 아이디어인가.
    - 창의적인 아이디어로 남기고 외주로 돈을 벌면 된다.
3. 어느 시장을 목표로 할 것인가.
    - 국내 시장은 작은 수준이 아니라 협소하다. 가능하면 멀리 내다 볼 것.

의공학 사업을 시작할 생각이라면 인허가, 성능평가, 수가 등의 전체적인 로드맵을 그려야 한다. 기술 개발이 끝났을때 이 모든것을 하려면 못해도 3여년은 걸리는 것 같다. (2차 강연에서 3년을 내다본다고 하셨으니)  
당연히 사업화를 위해서는 이 험난한 길을 선택한 이유를 분명하게 정의해야 할 것이고, (개발 목적) 이를 통해 회사가 얻고자 하는 이득이 무엇인지 수립해야 프로덕트가 견고해진다. 프로덕트의 견고함은 곧 회사의 견고함이다.

<Example>

reference

- [[기획] 제1호 국산 디지털치료제 등장 위한 필수전략은?](https://www.docdocdoc.co.kr/news/articleView.html?idxno=2018630)
- ['레드필 숨튼'으로 엿본 디지털치료기기 임상평가기준](http://www.hitnews.co.kr/news/articleView.html?idxno=35801)

</Example>

</Block>
<Block>

### 소리 데이터를 다뤄보기 (5/11)
현재 음성, 신호처리에 있어 가장 많은 portion을 차지하는건 MATLAB이다. 신호 데이터 처리를 위해서는 전처리 (noise 제거), 변환, 특징추출 등의 과정이 필요하므로 이미지 데이터 처리보다 복잡하고 dataset 생성이 어렵다. 현재 신호 데이터 처리는 딥러닝의 영역에서 진가를 발휘하고 있는데 이미지 처리에 비해 도메인 지식에 큰 영향을 받는다. 전처리된 데이터는 일반적으로 사전학습된 CNN을 이용해 전이학습에 사용된다. 

<img alt="MARLAB waveform example" src="https://user-images.githubusercontent.com/60145951/167857457-0bdfb59d-07d9-43ac-bef2-ee596a397765.png" width=500>

<small>*출처: [신호처리 분야를 위한 딥러닝](https://m.blog.naver.com/matlablove/221572734634)*</small>

이 때 신호 데이터를 시각화하고 직관적으로 보기 위해서 MATLAB이 동원된다. 이 때 MATLAB의 다양한 기능이 진가를 발휘한다. 안타깝게도 MATLAB을 지금부터 사용하기엔 무리가 있어 Python으로 소리데이터를 다룰 방법을 찾아보았고, `librosa` 를 알았다.

- `librosa`
    - 오디오와 음악 분석을 위해 사용되는 파이썬 패키지로 음원이나 소리 파일을 불러와 waveform을 시각화하거나 다른 형태로 변환할 수 있는 기능을 제공한다.
    - 설치: `pip install librosa`
    - 시각화는 다른 데이터 시각화와 동일하게 `matplotlib` 을 사용하면 된다.

수치 데이터, 자연어 데이터, 이미지 데이터를 모두 다뤄봤는데 이 김에 소리 데이터까지 한번 다뤄보면 재밌겠다는 생각이다.

<Example>

reference

- [신호처리 분야를 위한 딥러닝](https://m.blog.naver.com/matlablove/221572734634)
- [MATLAB/장단기 기억 신경망을 사용하여 심전도 신호 분류하기](https://kr.mathworks.com/help/signal/ug/classify-ecg-signals-using-long-short-term-memory-networks.html)
- [[KR] ML/DL을 위한 소리 데이터 이해하기(3) - 파이썬으로 음악 데이터 읽어오기](https://lucaseo.github.io/posts/2021-01-22-hands-on-preprocess-audio-data/)

</Example>

</Block>
<Block>

### Github Token, Authentication error (5/11)


vuepress 블로그 만들 때부터 지금까지 키체인에서 없애도 없어지지 않는 좀비 토큰과 이주째 싸웠는데 어느날 갑자기 되더니... 어젯밤에 이상하게 배포가 됐는데 오늘 다시 push 하려니까 똑같은 에러가 뜨더라. 이럴리가 없는데... 하고 user/settings 갔더니 어제 멀쩡히 만들어뒀던 토큰이 흔적도 없이 사라져 있었다.

우선 우측 코드 블럭과 같은 상황에서는

1. personal token 생성 한다. 잃어버리지 않도록 따로 적어두어야 하며, 이후에도 regenerate만 할 수 있지 동일한 코드를 발급받을 수는 없다.
2. `command + space` 로 spotlight 를 열어 `키체인 접근` 을 열고
3. 검색창에 git 또는 github 을 입력해 나오는 암호에 미리 생성해둔 personal token을 입력한다.
    - 이 때 VSC에 github을 연결해뒀다면 연필모양과 함께 잡다한 토큰들이 보일텐데 이건 git 키체인에서 받아오는 값이므로 바꾸지 않아도 된다.
4. Github Action: 또, 내 오류가 Github Action deploy 문제이니 해당 repository의 settings에서 secret key를 관리해줘야 한다. (나의 경우 `ACCESS_TOKEN`)
    - personal token을 재발급 받은 경우에도 이 값을 바꿔주는 것을 잊지 말자.

일단 토큰 재발급해서 재배포는 했는데... 내일도 이러면 어쩔지 생각해봐야겠다. 로컬 세팅의 문제면 환경변수문제인지 확인이라도 해보겠는데 (맥에서 환경변수라니...) 아예 github 웹에서 발급받아둔 토큰이 흔적도 없이 삭제된 일이라 문제가 뭔지 짐작도 안간다. expired 되었다면 그렇다고 써있을텐데 그것도 아니고. 아니 토큰이 그냥 일회용이 되어버렸는데 왜... 이러지? 우선 오늘은 이쯤해서 마무리한다.

<Example>

> OS: Mac Monterey  
> 2022.05 Github Token  
> IDE: Visual Studio Code

```bash
# Github Action : 배포 실패한 커밋은 덮어버려서 로그가 남지 않았으나 하단 링크와 동일한 상황
# https://github.com/4923/vuepress/runs/6373567306?check_suite_focus=true
remote: Invalid username or password.
fatal: Authentication failed for '***github.com/4923/vuepress.git/'
```
</Example>


</Block>
<Block>

### Jekyll 기반 blog template, fastpages 적용기: Github Action Token으로 인한 실패 (5/12)

fast.ai 에서 만든 블로그 템플릿으로 ([github repo](https://github.com/fastai/fastpages#writing-blog-posts-with-jupyter)) LaTeX, Jupyter Notebook, docx 까지 HTML로 변환해주는 깔끔한 템플릿이다. vuepress 죽어라고 만들어서 그거 쓰려고 했는데 아무래도 인공지능쪽 일을 하고, 하게 될 것이다보니 이 강점을 거부할 수 없었다. 사용방법은 해당 repo의 README에 적힌 바와 같다. `use template` 을 이용해서 fork 떠오듯 본인 깃허브에 옮기면 자동으로 github action이 initial setting을 진행한 후 PR 하나가 올라오는데 어제 토큰에 문제가 있어서 그런지 나는 그 간단한 과정에서 계속 403 에러가 뜨더라...

workflow가 체계적으로 설계되어 있어 이후에 좀 복잡한 프로젝트를 진행할 때 참고해야 겠다는 생각을 했다. Github Token을 자동으로 받아오지 못하면 vuepress에서처럼 `GITUB_TOKEN` 을 전부 repository secret으로 별도 관리 하면 된다고 생각했는데 생각보다 너무 많더라...

우선 [다른 사람](https://lucaseo.github.io/posts/2020-11-29-fastpages/)의 초기 PR 을 확인하고 repo key를 설정한 후 [fastpages/.github/workflows/](https://github.com/fastai/fastpages/tree/master/.github/workflows) 의 setup.yaml, gh-pages.yaml 을 수정해봤는데 배포가 멀쩡히 되기는 돼도 CSS가 적용되지 않는 문제가 발생했다. github personal token을 자동으로 받아와야 한다는건데 결국... 왜 안되는지 일단 모르겠다. 안 될 시 workflows/ 에 있는 모든 GITHUB_TOKEN을 repo secret으로 변경하는 방법 뿐이란 생각이다.

<Example>


</Example>


</Block>
