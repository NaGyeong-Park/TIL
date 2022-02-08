# CCS Layout

- id와 class 차이 : id는 딱 한 개에만, class는 여러개 
- Selaction과 심화가 시험에 잘나옴



- div.box>div*3#hello{hola}
  - `>`  태그를 만들고 들여쓰기
  - `*n` 반복
  - `+` 줄바꿈 + 다음 태그 추가
  - `.` class 지정
  - `#` id 지정
  - `{content}` 내용 입력
  - 이 elem의 마진과 패딩을 구하는 것이 나온다(개발자도구 못씀)



# float

- 뉴스 레이아웃 : 인라인 요소로 블럭 요소를 감쌀 때 사용
- 실무에서 많이 쓴다
- Normal flow를 벗어난다
- lorem(num) : 출판이나 그래픽분야에서 넣을 것이 없을 때 시각적 연출을 보여줘야 할 때 표준 텍스트 채우기
- float : left;
- clear : left; : 다시 제정렬로
- ::after
  - .content::after {content: ""; display: block; clear: both;}
- :: 의사요소(가상요소) : 의사 클래스(가상 클래스)

# flex

- container - item으로 이뤄져있음
- .container { display : flex }
  - `display` - Flex Container를 정의
  - `flex-flow` - `flex-direction` 과 `flex-wrap` 을 줄여서 쓸 수 있음
  - `flex-direction` - item들의 주 축(main-axis) 설정
    - row / row-reverse / column / column-reverse
  - `flex-wrap` - item들의 줄 바꿈 설정
  - `justify-content` - 주 축(main-axis)의 정렬  방법 설정
  - `align-content` - 교차 축(cross-axis)의 정렬 방법 설정 (2줄 이상)
    - 기본값 : stretch / flex-start / flex-end / centor / space-between / space-aound
  - `align-items` - 교차 축(cross-axis)의 정렬 방법 설정 (1줄)
- Flex Item을 위한 속성들
  - `order` - Item의 순서를 설정
  - `flex` - `flex-grow` , `flex-shrink` , `flex-basis` 에 대한 단축 속성!
  - `flex-grow` - Item의 너비 증가(grow) 비율 설정
  - `flex-shrink` - Item의 너비 감소(shrink) 비율 설정
  - `flex-basis` - Item의 기본 너비 설정
  - `align-self` - 교차축을 기준으로 item을 정렬하는 방법을 설정
  - `align-content` - 두 줄 이상만 효과를 발휘

- spacing 종합 : t, b, e, x, y
- flex의 방향이 column일 경우, `justify-content`의 방향이 세로로, `align-items`의 방향이 가로로 바뀜



# Grid system

(에서도 문제가 많이 나온다. 짜잘하게 말구)



- container row column 알아야한다
- container
  - container : 
  - container-fluid : 
  - container-BRP(BreakingPoint) :
    - html 따라하기 시험에 나옴! 
- __반드시 기억해야 할 2가지!__
  - 12개의 column
    - col-A-B : A grid point
  - 6개의 grid breakingpoint
