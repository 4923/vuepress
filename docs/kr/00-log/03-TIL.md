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

- [동일한 issue report 발견 / Initial commit Setup #1 [The requested URL returned error: 403]](https://github.com/fastai/fastpages/issues/640)

<Example>


</Example>


</Block>
<Block>

### Jekyll 기반 blog template, fastpages 적용기: Github Action 정책이슈 확인, PR 생성 (5/13)

22년 1월부터 github pages resource 관리를 위해 action이 자동으로 action을 생성하고 contents를 생성하게 하지 않도록 `github-action[bot]`이 제한했다고 했는데 이 때문에 현재 fastpages의 강점인 initial set이 불가능해졌다.   
이를 해결하기 위해선 PAT (Personal Access Token)을 사용하거나 repo settings/Actiona/general 에서 workflows permisssion을 수동으로 허가해줘야 하는데 이는 fastpages의 강점을 살리지 못하는 방법 같아 contents 추가는 `setup.yaml` 에서 permissions 를 추가했고, Action이 PR을 생성하게 하는 권한을 yaml으로 주고 싶었는데 도저히 거기까진 해결이 안됐다. 우선 구글링 한 결과 여기까지가 한계고, 배경지식이 좀 부족한 것 같아 개선안만 PR에 작성해 올렸다.


<Example>

작성한 PR

- [fastpages/Suggest setup instruction by changed Github Action Policy](https://github.com/fastai/fastpages/pull/642)

</Example>


</Block>
<Block>

### PPG란? Desk Research (5/14)
> Photo Plethysmo Graphy
> 빛으로 변화를 기록한다.

네덜란드에 있을 때부터 사용해 온 수면 질 측정 앱 (Sleep Time Free) 은 자고 일어났을 때 스마트폰 카메라를 통해 맥박을 측정한다. 플래쉬가 켜지고 손가락을 대면 맥박을 측정하는 형태다. 처음 봤을 때엔 신기하기도 하고, 무료 앱에서 제공하는 기능이라 사실 별 신뢰를 가지지 않았는데 생각보다 이 기술의 근거가 탄탄했다.

사람의 피부는 투명하기 때문에 강한 빛을 비추면 그 안의 혈관이 보인다. 심장은 수축과 팽창을 통해 피를 온몸으로 흘려보내는데 이 때 미세한 변화가 생긴다. 심장이 손가락 끝까지 피를 흘려보내는 일반적인 시간을 알고 있다면 이를 기준으로 세우고 변화를 관측할 수 있다. 다시말해, PPG는 심박수를 측정해서 심혈관계 및 스트레스 상태를 파악하는 기술이 아니라 그 반대였던 것이다. 이 기술은 현재 Google Fit을 비롯한 다양한 스크리닝 서비스에서 사용되고 있다.

병원에서 혈압을 매번 측정하는것도, 혈압 측정 결과에서 혈압의 고저 뿐 아니라 다양한 정보를 알아낼 수 있었음을 알았다. 

<Example>


![wikipedia, Micatlan PPG](https://news.samsungdisplay.com/wp-content/uploads/2021/12/1221_4.gif)

</Example>


</Block>
<Block>

### HRV를 이용한 교감신경 활성 지표: ECG, PPG (5/16)

스트레스는 자율신경계의 변화를 야기하는데 HRV (Heart Rate Variability, 심박변이율) 는 이를 파악하는 좋은 생체징후 지표가 된다. 이를 파악하는 지표는 심장의 전기 활동을 측정하는 ECG (Electrocardiogram) 와 광혈류측정방식인 PPG (Photoplethysmography) 가 있다. ECG는 가슴에 센서 등을 부착하여 측정하는 반면 PPG는 손가락에 집게 형태의 센서를 끼워 측정했다.

> 광학적 혈량 변화 검출방식은 광 원 나온 빛이 손가락을 조사하면, 일부 광은 신체조직, 즉 혈액, 뼈, 피부조직에서 흡수가 되고, 일부 광은 투과되거나 반사가 된 다. 이러한 일부 광들이 광수신기도 도달하면, 변동되지 않는 조 직, 피부, 뼈 이외에 변동이 되는 혈액에 의해 광량이 달라진다. 이러한 광량을 측정하여 심장박동과 동기화된 혈당변화와 파형을 알 수 있게 되며, 이것을 광전용적맥파, 즉 PPG(Photoplethysmo Graph)라고 한다.

건강한 사람의 HRV 변동성은 크고 복잡하지만 질병상태, 또는 스트레스 상황에서는 복잡도가 감소한다. HRV는 심장박동수를 시계열로 분석하여 유추하며 심전도에서 얻어지는 `RR(R-R Interval) 간격` 또는 `NN(N-N Interval) 간격` 분석이 가능하다. 가장 유용하다고 평가받고 있는 변이도 측정 지표는 `SDNN`으로, 측정된 전체 NN간격의 표준편차를 구하는 방식이다. 이를 통해 심장 박동의 변화 수준을 가늠할 수 있다. (그림6 참고)


- 참고 1 [정원식. "스마트폰에서 PPG를 이용한 스트레스 분석 시스템 개발." 국내석사학위논문 高麗大學校 醫用科學大學院, 2014. 서울](http://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=7f4e87849831fc4effe0bdc3ef48d419&outLink=K)
- 참고 2 [김대열, 김진수 and 이광기. (2021). 안면 이미지 데이터를 이용한 실시간 생체징후 측정시스템. 방송공학회 논문지, 26(2), 132-142.](https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002699582)


<Example>

<img width="500" alt="피부의 빛 반사 모델" src="https://user-images.githubusercontent.com/60145951/168598223-6d723ca3-f6bc-4d10-9284-13c8b333ead8.png">

참고 2, 피부의 빛 반사 모델

<img width="500" alt="image" src="https://user-images.githubusercontent.com/60145951/168598459-fadb5013-5aeb-4142-87d2-57fe6f3e21f9.png">

참고 2, 심박변이도 시간영역 분석 지표

</Example>


</Block>
