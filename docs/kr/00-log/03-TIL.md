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

<Block>

### tensorflow에서의 경량화: TFLite (5/17)

tensorflow lite 는 모바일 디바이스 기기를 위한 ML Tool이다. 기기 내에서 머신러닝을 돌리기 위해서는 아래 다섯가지 핵심사항을 만족시켜야한다.

하나, 서버까지의 왕복시간을 필요로 하지 않는 `지연시간 0`

둘, 기기에 개인정보를 남기지 않는 `개인정보 보호`

셋, 인터넷 연결이 필요하지 않은 `연결성`

넷, 모델 및 바이너리 크기가 작은 `휴대성`

다섯, 네트워크 연결이 불필요하고 효율적으로 추론하여 `전력소비`를 최소화

TFLite는 Android 및 iOS, Linux와 마이크로 컨트롤러를 포함한 다양한 플랫폼을 지원하며 Java, Swift, Objective-C, CPP, Python 등 다양한 언어를 지원한다. 

대부분 Tensorflow 모델을 만든 후 이를 Tensorflow Lite모델로 변환하는 과정을 거친다. 변환 중에 양자화를 포함한 최적화를 적용하여 정확성을 유지하고 모델 크기와 지연시간을 줄이는 방식을 취한다. 서버를 필요로 하지 않으므로 일반적으로 ML용 서버를 두는 것과 다르게 TFLite는 서버를 구축하지 않은 상태로 개발에 착수한다.

<Example>

- [TFLite](https://www.tensorflow.org/lite/guide?hl=ko)

</Example>
</Block>

<Block>

### WSGI, 위스키란? (5/18)

- Web Server : 웹 서버는 정적이다. 클라이언트의 요청에 따라 리소스를 *그대로* 전달하는 역할을 하며, NGNIX와 Apatch 가 속한다. 
- CGI (Common Gateway Interface) : 정적인 웹서버를 동적으로 동작하게 하기 위한 규칙/인터페이스다. 

WSGI도 CGI와 비슷하다. WSGI Server에서 Python Web Framework를 중개하며 CGI의 디자인 패턴을 업그레이드 한 프로토콜/인터페이스다.
- WSGI Server : middleware라고 부르며 gunicorn 등이 포함됨
- Python Web Framework: Django, flask 등 WSGI를 지원하는 Web Application

<Example>

- [https://brownbears.tistory.com/350](https://brownbears.tistory.com/350)


</Example>
</Block>

<Block>

### 전략적 사고와 문제해결, TEU MED (5/19)

*퀀텀인사이트 대표, TEU Co-president 황성현님 강연*

> 문제란?
현재 상태와 되고 싶은 것의 GAP이다.

TEU MED OT 에서도 말씀하셨지만, 문제는 크기가 작을수록 부정적이고 불편한 것으로 인식되지만 오히려 키워버리면 희망적인 개념이 된다. 이 떄 우리가 유념해야 할 것은 두가지다.

하나, 문제를 키울 수 있을 정도의 사고를 하고 있는가?
둘, 문제를 키운만큼 해결할 수 있는 능력이 있는가?


두 가지를 유념한 후 할 수 있다고 판단했다면 `전략적 사고`를 할 때다. 기계적 사고는 일반적인 사고이니 넘어가고, 직감적 사고는 한 사람의 머리 속에서만 이루어지는 일이므로 전체를 분석하지 않는다. 분석했기 때문에 문제 해결로 가는 빠른 길이 보였겠지만, '직관, 직감'이기 때문에 다른 사람을 설득할 수 없으며 다른 사람을 설득할 수 없기 때문에 **검증이 불가능하다.** 따라서 도 아니면 모의 결과를 낸다.

- 직관적 사고를 하는 사람으로써, 직관적 사고의 마법같은 효능을 알고 있지만 사업에서 불필요한 위험부담은 짊어질 필요가 없다. 따라서 직관적 사고로 해답을 보았다면 검증할 수 있다면 검증하고, 검증하는 과정에서 더 좋은 해결책이 나오기도 하니 성향에 따라 다르게 접근하는 것이 좋겠다.

중점인 `전략적 사고`는 쪼개고, 분류하고, 연관성을 찾으며 `본질을 찾는 작업`이다. 

<Example>

<img width="600" alt="image" src="https://user-images.githubusercontent.com/60145951/169290317-8ec1eb2b-8a4a-4590-b14f-b193818fc14c.png">

</Example>
</Block>
<Block>


> 전략적 사고를 위해 해야 할 것은?


내 식으로 표현하자면, 전략적 사고는 **논리력에서 시작하여 분석력으로 한계를 발견하고 창조력으로 한계를 넘어서며 통합력으로 설명할 수 있는 해답을 완성하는 일련의 과정**이다.

- 논리력 : 문제를 나열할 수 있는 능력. 경험과 지식이 많아야 한다.
- 분석력 : 문제가 있다고 치자. okay. so what? 을 해결하기 위한 과정. 여기서 사람의 깊이가 드러난다. TEU의 5ways 5questions 가 이 과정에 적합하다. 치밀한 질문 살인마 다섯을 해치운다면 무적이 될 수 있다! :spoon: 물론 그러기 위해서는 누구도 던지지 못할 질문 다섯개를 던져야 할 것이다.
    - 조직을 보면 넓고 얕은사람, 좁고 깊은사람으로 나뉜다. 상호보완이 중요하다. 
- 창조력 : 이 때 해결방법을 찾는 능력이 창조력이다. 많은 해법을 찾지만 아직 정답은 아니다.
- 통합력 : 아이디어를 섞어 새로운 아이디어를 만들고, 통합하여 정답을 찾는다.

<Example>


<img width="600" alt="image" src="https://user-images.githubusercontent.com/60145951/169290506-17c7dd99-31e6-464f-b959-570148d89023.png">

</Example>
</Block>

<Block>

### 주피터노트북의 자동 줄 바꿈 설정(5/20)

Notion의 코드블럭에서도 볼수 있는 `Wrapping Cell` 기능은 코드블럭 안의 내용이 화면의 Width를 넘을 경우 자동으로 줄바꿈하는 기능이다.  Notion은 버튼 하나로 설정과 해제가 가능하지만 주피터 노트북에서는 `json`파일을 수정해줘야 한다. 늘 그렇듯이 말이다.

이전에 주피터 설정을 커스텀 한 적 없다면 `touch nbconfig/notebook.json` 명령어를 통해 notebook.json을 생성한다.

그리고 생성된 notebook.json에서 우측 예제코드처럼 `"lineWrapping": true`가 포함된 코드를 입력한 후 주피터 커널을 재시작하면 마크다운 및 코드에서 자동으로 줄바꿈 기능이 적용될 것이다.


<Example>

```json
{
     "MarkdownCell": {
       "cm_config": {
         "lineWrapping": true
       }
     },
     "CodeCell": {
       "cm_config": {
         "lineWrapping": true
       }
     }
}
```

</Example>
</Block>

<Block>

### SSRI 작용에 영향을 미치는 biomarker가 있다?

CYP2C19 와 CYP450; (polymorphisms of CYP2D6, 2C19, 2C8, 2C9, and 1A1.)
- CYP2C19: cytochrome P450, family 2
- polymorphism: 다형


> The CYP2C19 gene is a member of the cytochrome P450 gene family. Enzymes produced from cytochrome P450 genes are involved in the formation and breakdown (metabolism) of various molecules and chemicals within cells. The CYP2C19 gene provides instructions for making an enzyme that is found primarily in liver cells in a cell structure called the endoplasmic reticulum, which is involved in protein processing and transport.
https://medlineplus.gov/genetics/gene/cyp2c19/

- [Impact of CYP2C19 metaboliser status on SSRI response: a retrospective study of 9500 participants of the Australian Genetics of Depression Study](https://www.nature.com/articles/s41397-022-00267-7)
- [Review of evidence for genetic testing for CYP450 polymorphisms in management of patients with nonpsychotic depression with selective serotonin reuptake inhibitors](https://www.nature.com/articles/gim2007123)

논문을 전부 읽어 볼 수는 없었지만, CYP2C19가 SSRI의 대사과정에 영향을 미치는 표지자이며 CYP450와 SSRI의 연관성은 검토된 바 있으나 증거로 채택되기엔 부족한 수준인 것으로 보인다. 결론적으로, SSRI 작용에 영향을 미치는 biomarker를 의학계에서 찾아내는 중이며 이를 활용할 때 지금까지 의사의 경험에 의존했던 항우울제 선택에 도움이 될 가능성이 있다.

- [GENOME-BASED THERAPEUTIC DRUGS FOR DEPRESSION (GENDEP): 적합한 항우울제 선택의 중요성, 2008.01](https://cordis.europa.eu/project/id/503428/reporting)

<Example>

<img alt="metabolism and treatment reponse inferred by genetics" src=https://user-images.githubusercontent.com/60145951/169667161-3d35c76d-056f-4648-b59f-687242a02531.png width = 800>

metabolism and treatment reponse inferred by genetics

</Example>
</Block>

<Block>

### SSRI 부작용 건수가 가장 많은 질환군 (issue of efficacy vs adverse side effects)

- Major depression disorder
- OCD
- Panic disorder

<Example>

</Example>
</Block>

<Block>

### Python Web Framework: django, flask, fastapi, sanic (5/22)

||django|flask|Fastapi|
|:-|:-|:-|:-|
|종류|Full Stack|Micro Framework (WSGI)|Micro Framework (ASGI)|
|장점|high-level, 무조건 쉽고 편하게| 가볍다, 개발속도가 빠르다. | '지각변동을 일으킬 수 있는' framework: vs Node.js |
||모든 기본기능이 준비되어있고, 공식문서가 자세하다| |빠르고, 개발하고 배우기 쉽고, 적용이 쉽게|
||DB에 CRUD를 적용할 수 있는 기본 `admin panel`| | ASGI, FastAPI 안에서의 비동기 처리 가능|
|| | | 뛰어난 문서로 커버 가능한 생태계 |
|단점|속도와 볼륨 (Pyramid가 대안이 될 수 있음)| 구조적으로 한번에 많은 트래픽 처리 불가, Gunicorn이 대안이었으나 한계가 있음.| 2020년 전후, 신생 framework, 얕은 생태계|
| | | 가파른 러닝커브, 하나부터 열까지 만들어야한다.|

- [ref: python 웹프레임워크 끝판왕 가리기 django flask fastapi sanic](https://dingrr.com/blog/post/python-웹프레임워크-끝판왕-가리기-django-flask-fastapi-sanic)

<Example>

<img src="https://user-images.githubusercontent.com/60145951/169692944-35d7d55f-d0fd-48ef-a55c-574db85b8ead.png" width=600>

</Example>
</Block>


<Block>

### ASGI와 WSGI의 차이점과 특징 (5/23)

CGI는 정적인 웹서버와 외부 프로그램을 연결하는 표준 프로토콜이었다. 웹서버는 정적 파일을 사용자에게 다운로드 방식으로 제공했지만, 웹 서비스의 발전에 따라 클라이언트의 요청을 웹서버가 처리할 수 없는 때가 발생하기 때문이다. 현대의 웹 서비스는 REST API가 수시로 호출되고 요청과 응답이 반복되므로 더더욱 CGI로 감당하기는 어려워졌다. 이에 FastCGI가 개발된다.

하지만 Python 에는 WAS가 없는데, 이를 대체하기 위해 WSGI가 개발되었다. Python App이 웹서버와 통신할 때 사용되며 CGI는 매 요청마다 프로세스를 생성한다면 WSGI는 프로세스에서 모든 요청을 받는다는 점이 다르다.

하지만 WSGI는 동기 함수 처리만 지원한다는 한계가 있는데, Python에서 asyncio, coroutine 등의 비동기 처리를 지원하기 때문에 비동기 처리에 대한 요구가 커졌다. 이에 ASGI 인터페이스가 Django 3.0 및 FastAPI에서 적용되기 시작했다.

ASGI는 WSGI와 운영 아키텍처는 크게 다르지 않지만, 요청이 기본적으로 비동기로 처리된다는 점이 가장 큰 차이이자 특징이라고 할 수 있겠다.

- [ref:REST API 개발로 알아보는 WSGI, ASGI](https://blog.neonkid.xyz/249)
- django projcet를 생성하면 실제로 `wsgi.py` `asgi.py`가 생성된다.

<Example>


</Example>
</Block>
<Block>

### PR을 local에서 돌려보기 (5/24)

```bash
git fetch upstream pull/ID/head:BRANCHNAME
git checkout BRANCHNAME
# 이후 작업
```

- fetch: 가져오다
- upstream: 원본 repo, 등록되어있어야 한다.
    - git add upstream {URL}
- pull: fetch + merge
- ID: issue 및 PR을 생성할 때 생기는 고유 ID (#)
- head: 향하다
- BRANCHNAME: 새로운 분기점, branch 생성

> PR 생성시 github는 PR내용을 원격으로 저장하기 때문에 (issue에 임시로 이미지 올리고, 링크 따오는것과 유사) PR merge가 되지 않아도 불러올 수 있다.

- [ref: GITHUB DOCS](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)


<Example>

</Example>
</Block>

<Block>

### 조현병과 반복염기다형성 Copy Number Varient (5/25)

> >분자유전학연구의 방법론은 기본적으로 1) 유전형 genotyping, 2) 표현형 phenotyping, 통계학 statics의 세가지 기본 골격을 틀로 한다. 유전형의 대상에는 단일염기다형성 Single Nucleotide Polymorphism: SNP 이나 반복염기다형성 Copy number Variant: CNV를 포함하는 표시자, 염기서열규명 등이 있다.

정신과 진단이 현상학적인 이유 중  하나는 질병과 원인이 1:1 관계가 아닌 1:N 관계에 있기 때문이다. biomarker 또는 유전체를 기반으로 진단 혹은 예측하는 방법이 시도되었지만 유전체는 정신과 임상에서 거의 사용할 수 없다. 대상군을 현상학적으로 모으는 과정에서 발생한 다양성을 모두 고려할 수 없기 때문이다.

조현병의 경우, 특정 유전자가 유전자 복제수 변이 CNV 를 일으키는 경우 발생할 가능성이 높아지는데 이마저도 전체 조현병의 0.n%에 불과하다. 다시 말해, 조현병의 CNV는 유전자가 major하게 영향을 미치는 경우라고 할 수 있고 나머지는 minor라고 할 수 있다.

- GWAS (Genome Wide Assosiation study): 한동안 학계에 반향을 불러일으켰지만 여파는 미미한 이론.
    >  이 초기적 시도에서도 뚜렷한 후보유전자(p<5× 10-8)를 제시하는데는 미흡한 결과가 도출되었다.2 

- [ref: 조현병에 대한 유전학연구의 최신현황, 2013](https://synapse.koreamed.org/upload/synapsedata/pdfdata/0198kjsr/kjsr-16-5.pdf)

<Example>

</Example>
</Block>

<Block>

### PWA/Service Worker (5/26)

vuepress에서 PWA 플러그인을 설치할 때 PWA에는 Service Worker가 있어 오프라인에서도 사용할 수 있다는 설명을 들었다. 

> 서비스 워커는 웹 응용 프로그램, 브라우저, 그리고 (사용 가능한 경우) 네트워크 사이의 프록시 서버 역할을 합니다.

> 서비스 워커의 개발 의도는 여러가지가 있지만, 그 중에서도 효과적인 오프라인 경험을 생성하고, 네트워크 요청을 가로채서 네트워크 사용 가능 여부에 따라 적절한 행동을 취하고, 서버의 자산을 업데이트할 수 있습니다. 또한 푸시 알림과 백그라운드 동기화 API로의 접근도 제공합니다.

출처와 경로를 등록하는 event 기반 worker로 JS파일 형태를 가지고 있다. 오프라인에서 사용할 수 있으려면 페이지 내용이 제대로 캐싱되어야하는데 서비스워커는 연관된 웹 페이지와 그 리소스를 세부적으로 캐싱할 수 있게 한다. 웹앱으로 작동하기 위한 기본 요건이다.
- [Worker](https://developer.mozilla.org/ko/docs/Web/API/Worker) : Web Worker API의 Worker 인터페이스를 말하며, 스크립트로 생성하고 생성자와 메시지로 통신하는 `백그라운드 작업`이다. 
- 이 때 네트워크 요청을 수정하므로 HTTPS 에서만 작동한다. 

서비스워커의 생명주기는 1. 다운로드 2. 설치 3. 활성화다. 서비스 워커가 제어하는 페이지에 사용자가 접근하면 서비스워커가 즉시 `다운로드` 된다. 다운로드 후 설치하고 활성화 하는 과정은 자동으로 이루어지는데 조건은 다음과 같다. 1) 범위 내 페이지로의 탐색 발생 또는 2) 서비스 워커에서 이벤트가 발생했지만 24시간 안에 서비스워커를 다운로드 하지 않은 경우.

- [ref: MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)

<Example>

</Example>
</Block>

<Block>

### 안드로이드 수명주기 (5/28)

앱개발 기획서를 작성하면서 생명주기가 중요하다는 말을 들었다. SDLC, 소프트웨어 생명주기는 기획부터 개발, 사용까지 드는 시간과 경과를 말하는데 이 외에도 생명주기, 수명주기라는 용어는 다양한 분야에서 사용되고 있는 것 같았다. 

안드로이드에서 활동 수명주기를 이해하기 위해서는 활동 (`Activity` 인스턴스) 개념을 알아야한다. Activity 인스턴스는 사용자가 앱을 사용하고 나가고, 다시 돌아오는 동안 변화한다. (활동 생성, 중단, 재시작 등) 따라서 Activity 클래스는 상태를 파악할 수 있는 여러 콜백을 제공한다.

수명주기는 단계간 전환을 위해 6가지 콜백을 제공한다. 사용자가 활동을 벗어날 때 (아마도 리소스를 절약하기 위해) 활동을 해체하는 메서드를 호출하는데, 활동 내역은 메모리 안에 남아있고 (백그라운드에서 돌아가는 앱처럼) 상태만 변경된다. 시스템은 그 활동상태에 따라 활동을 종료할지 말지 결정하며 이것을 활동 복잡도에 따라 설계하는 것이 수명주기 메서드 구현이다. 
- onCreate(), onStart(), onResume(), onPause(), onStop(), onDestroy()


- [ref: 안드로이드 개발자 문서 / 활동 수명 주기에 관한 이해](https://developer.android.com/guide/components/activities/activity-lifecycle?hl=ko)

<Example>

![image](https://developer.android.com/guide/components/images/activity_lifecycle.png?hl=ko)

</Example>
</Block>

<Block>

### DB Schema  (5/29)

스키마란?
- 데이터베이스의 구조 및  제약조건을 전반적으로 기록한 명세서; 메타데이터의 집ㅏ
- 데이터 개체: Entity, 속성 Attribute, 관계 Relationship 로 구성된다.
- 사용자 관점에 따라 외부스키마, 개념스키마, 내부스키마로 나뉜다.

스키마의 3계층
> 외부 스키마에 명시된 `사용자의 요구`를 개념 스키마에 적합하게 변경하고 이를 내부스키마로 옮긴다.
- 외부스키마 : External Schema == 사용자 View
    - 한 데이터베이스 시스템에는 여러 외부 스키마가 존재할 수 있다.
    - 일반 사용자는 SQL를 이용해 DB를 사용한다.
- 개념 스키마 Conceptual Schema == 전체적인 View
    - 기관이나 조직체 관점에서의 데이터베이스다.
    - 논리적인 구조로, 데이터베이스 당 하나만 존재한다.
    - 개체간 관계 및 제약조건을 나타내며 권한, 보안, 규칙에 대한 명세를 정의한다.
    - 일반적으로 `스키마`라고 하면 개념 스키마를 나타낸다.
    - DBA (데이터베이스 관리자) 에 의해 구성된다.
- 내부스키마 Internal Schema == 저장스키마 Storage Schema
    - 물리 저장장치 입장에서의 데이터베이스 구조다.
    - 저장 데이터 항목의 표현방법, 내부 레코드의 물리적 순서를 나타낸다.
    - *시스템 프로그래머* 관점에서의 스키마다.

- [ref: DB기초, 스키마란 무엇인가?](https://coding-factory.tistory.com/216)

<Example>



</Example>
</Block>

<Block>

###  BeReal : 진정성, 즉흥성을 중심으로 한 새로운 SNS (5/30)

기존 소셜미디어 규칙을 따르지 않는 SNS, 진정성과 즉흥성에 집중한 BeReal이 화제다. 2021년 6월 실리콘밸리 유명 VC 에서 3000만달러 (약 374억원) 를 투자받았다. 사용 방식은 다음과 같다.

- 1 매일 하나의 알림이 모든 사용자에게 발송된다
- 2 2분 내로 현재 상황을 촬영하여 공유한다.
    - `셀카와 정면사진을 동시에` 찍게 된다.
    - 인스타와 달리 편집 및 필터 기능이 없다.
    - 본인 사진을 올린 후에야 다른 사람의 사진을 볼 수 있다.
- 3 친구들이 동시에 글을 올리게 되고 댓글을 달며 반응할 수 있다.
    - 홈화면에서 친구들의 이모지와 댓글을 확인할 수 있다.
    - 독특한 챌린지들이 있으며 위젯으로 BeReal에 반응할 때 친구가 이미지로 떠오른다.
    - 나만의 이모티콘 RealMoji를 제공한다.

현재 한국 vudwja 4.7을 유지하고 있으며 소셜 네트워킹 차트 53위다. 미국 및 영국, 프랑스에서는 인스타그램, 스냅챗, 핀터레스트에 이어 가장 많이 다운로드 된 앱 4위에 올랐다.

가입 절차 UI가 깔끔하고 한번에 하나씩 입력할 수 있게, 큰 글씨를 활용하여 직관적으로 이해할 수 있다. 가입 절차는 다음과 같다: 풀네임 입력, 생년월일, 휴대폰인증, 유저네임 생성, 사용자 연락처 연동을 통한 친구찾기, 튜토리얼 (포스트 게시하기)
- 유저네임 생성 단계에서 한글은 입력되지 않는데 일시적 오류인지 방침인지 모르겠다.



<Example>
앱 설명

<img alt="example screenshot" src="https://user-images.githubusercontent.com/60145951/171029860-f3796ea5-42f7-4610-9432-19815400dc2e.png" width=400>


</Example>
</Block>

<Block>

#### BeReal 간단 사용기

> UX가 전반적으로 직관적이고 편리하다.

알림 허용 방법도 화면을 터치하면 팝업이 뜨도록 설정해뒀다.

<Example>

<img alt="example screenshot" src="https://user-images.githubusercontent.com/60145951/171030827-ca6eeabd-4ac6-458c-bc4c-f3ca2a5ac63b.png" width=400>

</Example>
</Block>

<Block>

#### 팝업 가이드

팝업 안내도 화살표와 큰 글씨를 이용해서 한눈에 들어온다. 

<Example>

<img alt="example screenshot" src="https://user-images.githubusercontent.com/60145951/171031370-1f81ec73-a579-4334-a922-2fd652a35e95.png" width=400>


</Example>
</Block>

<Block>

#### Time to BeReal

카메라 앱을 켜는게 아니라 앱 안에서 사진을 찍는데 셀카모드를 찍는동안 확인할 수 없다. 시간차가 있는 것으로 보아 전후면 각각 한장씩 총 두장의 사진을 연속으로 찍어 합성하는 모양이다. 그리고 찍을때마다 문구가 다르게 출력되는데 (좋은 하루 되세요 등) 얼굴이 인식되지 않으면 '친구들은 당신의 얼굴을 보는 것을 좋아할거예요' 문구를 출력하는 것 같다. 

<Example>

<img alt="example screenshot" src="https://user-images.githubusercontent.com/60145951/171031505-0466417f-ebdf-4999-9141-cce3a30642fb.png" width=400>


</Example>
</Block>

<Block>

#### 발견
애석하게도 연락처에서 비리얼 유저를 찾지 못했는데, `발견`탭을 제공한다. 

<Example>

<img alt="example screenshot" src="https://user-images.githubusercontent.com/60145951/171031797-a991ad81-e5f4-4d5f-bef3-88f2a3d8a1b2.png" width=400>

</Example>
</Block>

<Block>

#### 총평
> 잘 만든 앱이지만 유명인들 중심으로 운영되는 인스타그램에 비해 내 주변사람만 볼 수 있다는 점에서 유저층이 확실히 갈릴 것 같다. 앞으로의 운영 방향을 주시하자.


- [ref: 스여일삶 인스타그램](https://www.instagram.com/p/CeLfxqCjxyW/?igshid=YmMyMTA2M2Y=)
- [ref: 중앙일보](https://www.joongang.co.kr/article/25066295#home)

</Block>


<Block>

####  얼리반젤리스트 earlyvangelist 를 찾아라 (lean startup korea) (5/31)

MVP는 린스타트업 기법에서 고객 검증을 위한 최소한의 모델이다. 린스타트업의 철학을 실천하기 위해 지켜야 할 원칙은 첫째, MVP 를 만들 것. 둘째, 얼리반젤리스트를 찾을 것. 셋째, Build Measure Learn의 반복; 아이디어가 완벽하지 않아도 빨리 상품으로 만들고 고객으로부터 배울 것.

얼리반젤리스트는 모험적인 고객으로 초기 사업 단계에서 가장 중요한 고객층이다. 조금 부족하더라도 제품에 내재된 가치를 보고 기꺼이 구입하는 사람들이며, 이들이 주위 사람들에게 좋은 소식을 전파하기도 한다.
제품의 비전을 보고 구입하는 사람들이니, 반드시 이들을 위한 할인 및 혜택을 준비해야 한다.

- [ref: 스여일삶 인스타그램](https://www.instagram.com/p/CeLfxqCjxyW/?igshid=YmMyMTA2M2Y=)
- [ref: LeanStartup Korea Blog](http://leanstartupkorea.com/?p=79)

<Example>


일반적인 고객 유형 특성 (LeanStartup Korea)

1. 초기 혁신가 : 기술 기반으로 무료 사용을 좋아하며, 필요하다면 구매를 시도한다.
2. 얼리벤젤리스트 : 제품/서비스의 비전을 보고, 이를 이해하며 자신의 문제를 해결하기 위해 구매한다. 필요에 따라 제품/서비스를 구매하나 그들을 위해 반드시 할인/프로모션/프리미엄을 제공해야 한다.
3. 확장성 있는 고객 : 제품/서비스에 관심이 있으며, 문제 해결을 위해 구매를 한다. 정가 구매하고 대량 구매시 할인/협상이 필요할 수 있다. 모든 제품/서비스의 구매가 가능하며 표준화된 세일즈 프로세스가 필요하다. 또한 경쟁사에 대비해야 한다.
4. 주 고객: 완전한 제품을 구매한다.(MVP나 프로토타입을 구매하지 않는다) 정가로 구매하고, 대량 구매시 할인/협상이 필요할 수 있다. 모든 제품/서비스의 구매가 가능하며 표준화된 세일즈 프로세스가 필요하다. 또한 경쟁사에 대비해야 한다.
(From Steve Blank)

</Example>
</Block>


<Block>

###  JS 토막상식 (6/8)

<Example>
</Example>
</Block>

<Block>

#### helper function
함수의 설명서 (python의 help) 를 확인하고 싶어서 helper function을 검색해보았는데, JS에서 헬퍼함수는 함수 안에서 호출되는 또다른 함수라고 한다. [[출처](https://velog.io/@sungjun-jin/JavaScript-Functions#:~:text=Stranger-,Helper%20Functions,%EB%A5%BC%20Helper%20Function%EC%9D%B4%EB%9D%BC%EA%B3%A0%20%ED%95%9C%EB%8B%A4.)]

<Example>
</Example>
</Block>

<Block>

#### Function.prototype
console에 `{함수명}.prototype` 을 실행하면 함수의 method를 비롯한 구성요소를 확인할 수 있다.

<Example>

<img width="477" alt="image" src="https://user-images.githubusercontent.com/60145951/172458086-85bb6171-635b-46ea-8216-ea91f6476372.png">

</Example>
</Block>

<Block>

#### === 과 ==의 차이 : 자료형
`===`는 자료형이 같은지까지 판별하며 `==`는 값이 같은지 판별한다.

<Example>

<img width="233" alt="image" src="https://user-images.githubusercontent.com/60145951/172463812-ab825b5e-09aa-4899-b526-d69809bb3251.png">

</Example>
</Block>