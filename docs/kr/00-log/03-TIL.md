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
