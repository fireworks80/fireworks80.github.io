


## Work


### Vue

[** 폭스바겐 아테온 마이크로 사이트 **](https://arteon.vwkr.co.kr/studio)

````
- 사용언어: html, css, javascript
- Plugin: anime.js, jquery, rangeslider, clipboard.js
- JSFramework: Vue(CDN)
- Api: swagger
- 설명:
    - 마우스 좌우 드래그 하여 파노라아 이미지 효과 구현
    - ios에서 touch move시 스프라이트 애니메이션이 되지 않아 각각 이미지 교체 방식으로 모션 구현
    - 이미지 교체 방식이다 보니 drag할경우 계속 request되는 이슈가 있어 해당 색상 클릭시 이미지를 다운받아 놓는 형식으로 변경
    - 컬러 박스 클릭시 fade animation 이용하여 색상전환

````

[**U+ 그림그리기 이벤트**](http://fireworks80.dothome.co.kr/uplus/drawing/)
- [source](https://github.com/fireworks80/fireworks80.github.io/tree/master/personal/portfolio/Uplus-drawing)

````
- 사용언어: html, css, javascript
- Plugin: drawing board, jquery,
- JSFramework: Vue(CDN)
- Api: swagger
- 설명:
    - 개인 인증 후 9가지 주제선택 후 canvas에 그림그린 후 바로 그림 응모하기
    - mobile only
    - canvas 이미지 저장 시 용량 문제로 인해 그려진 canvas의 반만한 크기의 캔버스에 다시 이미지를 그려서 저장
````

[**U+ 이벤트**](https://events.uplus.co.kr/note9_store)
- [source](https://github.com/fireworks80/fireworks80.github.io/tree/master/personal/portfolio/Uplus-reservation)

````
- 사용언어: html, css, javascript
- Plugin: clipboard, jquery,
- JSFramework: Vue(CDN)
- Api: swagger
- 설명:
    - 사용자 정보 입력, 매장찾기 시 주소 검색명으로 해당 검색명에 관련된 내용으로 리스트 다시 보여주기
    - clipboard library를 Vue안에 넣어 이벤트로 호출 수 클릭 수대로 clipboard가 생성되어 Vue외부로 뺌
````

[**샘소나이트 이벤트 카운트다운 효과 작업**](/personal/portfolio/countdown/)
- [source](https://github.com/fireworks80/fireworks80.github.io/tree/master/personal/portfolio/countdown)

````
- 사용언어: html, css, javascript
- Plugin: jquery, jquery.counter
- 설명:
    - 샘소나이트 이벤트 페이지 작업 중 d-day기능 요망
    - jquery.counter 플러그인으로 카운트 다운 효과 적용
    - 페이지 새로고침시 현재 시간에서 시작하지 않는 이슈로 인해
    - time.js util을 만들어 expired 시간과 현재시간 차이를 구함
    - countdown.js에서 time.js유틸을 이용해 페이지 새로고침시 처음 부터 시작하는 이슈 해결
````

[**연락처 관리 앱**](https://github.com/fireworks80/quick-start-vue/tree/contactapp-vuex)

````
- vuex, vue-router, axios
- quick start vue event-bus를 이용한 연락처 관리앱 예제를 vuex, vue-router로 변경
````

## animation

[**Kinder crispy event**](http://test.www.kinderschoko-bonscrispy.co.kr/event/ksbc-launching)

````
- 사용언어: html, css, javascript, jquery
- 설명:
    - 스크롤시 제품이 나타나는 모션 작업
````

<del>[**네스카페 이태원 ms**](http://www.nescafe-itaewon.co.kr/)</del>

````
- 사용언어: html, css, javascript, jquery
- 설명:
    - pc, mobile
    - full page 4단 형식으로 된 마이크로 사이트
    - 거리위에 사람들이 다니는 듯 한 효과를 내기 위해 생성자 함수를 이용
      각각의 요소들에게 상속하여 중복 최소화
    - 1920px디자인으로 작업 후 디자이너의 말디자인으로 2560px 브라우저까지 대응
    - 기획자의 해당도 1440 브라우저 및 툴바 2개가 붙어있는 브라우저에
      대응 해달라고 하여 높이 반응형 구현
````

[**Kinder joy micro site**](https://www.kinderjoy.co.kr/?type=main)

````
- 사용언어: html, css, javascript, jquery
- 설명:
    - 달걀모양의 이미지가 클릭시 열리는 모션 (스프라이트 이미지를 이용하여 frame animation 으로 구현)
    - 대부분의 모션은 css3로 구현 class toggle이나 javascript 모션은
      IIFE패턴으로 각각의 모션을 scope화 함
````

### response

[**캡슐투도어 ms**](https://capsuletodoor.dolce-gusto.co.kr/)

````
- 사용언어: html, css, javascript, jquery
- 설명:
    - 반응형 이벤트 페이지
    - service, capsule to door, membership, lounge,
      event 페이지 반응형 작업
````

**링컨자동차 코리아 technology**
- [github](https://github.com/fireworks80/fireworks80.github.io/tree/master/personal/rwd/lincoln)
- [link](https://fireworks80.github.io/personal/rwd/lincoln/)

````
- 설명: 개인 반응형 포트폴리오
````

### etc

[**크리스 마스 이벤트**](https://www.kinderjoy.co.kr/event/2015-christmas)

````
- 사용언어: html, css, javascript, jquery
- 설명:
    - 크리스 마스 트리 이미지 위에 슬라이드로 구현된 장난감 이미지들을 올려
     canvas 로 이미지 합성 구현
    - 슬라이드에서 이미지 드래그는 jquery.ui 의 drag 로 구현
    - 슬라이드에서 트리 이미지로 드래그 드롭후 이미지의 좌표값이 변경되어 이미지
      드롭시 캔버스레이어 위에 새로운 &lt;img&gt;이미지 생성하여
      해당 장난감이미지를 동적으로 생성하여 좌표값 문제 해결
````

[**네이쳐 컬렉션**](http://www.naturecollection.co.kr/event/171127/index.jsp)

````
- 사용언어: html, css, javascript, jquery
- 설명:
    - 네이쳐 컬랙션 내에 들어가는 이벤트
    - pc / mobile
    - 하루 한명씩 클릭링크가 열리고 링크 클릭시 모달팝업으로 youtube 영상노출
    - 영상 시청 후 화면 캡쳐 모션
    - 모션 후 하단 맴버 이미지 위에 스탬프 표시 모션
    - 모바일 작업시 네이쳐컬랙션 사이트가 %로 되어있어 css 로 이미지 변경을
      컨트롤 할 수 없게되어 맴버 이미지 60 여개를 직접 슬라이스 함.
````

<del>[**네스카페 돌체구스토 ms**](https://ndg-event.pentacle.co.kr/Splashparty)</del>

````
- 사용언어: html, css, jquery
- 설명:
    - pc, mobile
    - 초대 게스트의 데이터를 json으로 만들어 하나의 모달에 데이터만 변경하여
      게스트 변경시 json데이터만 수정하여 유지 보수 용이 하도록 구현
````

**newsletter generator**
- [github](https://github.com/fireworks80/newsletter/tree/master)
- [link](http://fireworks80.github.io/newsLetter/)

````
- 사용언어: html, css, javascript, php
- 설명:
    - 클라이언트 뉴스레터 페이지 제작을 효율적으로 하기위해 이미지의 갯수,
      이미지 확장자 선택 후 미리보기로 뉴스레터 페이지 레이어 생성
    - 레이어의 이미지 선택 시 이미지의 바로가기 링크 삽입 가능
    - 링크 삽입 후 최종본의 html파일 생성 됨
````

[**제노덤**](http://www.genoderm.net/)

````
- 사용언어: html, css, javascript, php
- 설명:
    - 그누보드를 사용하여 제작한 사이트
````
