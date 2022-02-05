## Web 2022.02.03

- __mdn__ : HTML, CSS 검색할 때 mdn을 붙여서 검색하면 맨 위에 mdn문서가 나올 것 

- __w3school__ : 많은 레퍼런스같은 걸 배울 수 있다.
- 너무 많아서 개발자들도 구글링하면서 한다.
- 시맨틱 태그 : div, span,  p를 제외한 모든 애들 : 너무너무 중요하다



- `<form>`요소의 __action__과 __method__가 중요하다
- 체크박스 / 싱글박스 : name 시험에 잘 나온다
- !+탭
- 



- css 적용 우선순위 : 2. 우선순위 __암기__ : 인라인 > id > class, 속성 ~~ > 요소

- rem 문제내기 좋당



- box model 구성 __시험__
  - 2개 : 십자가 +
  - 3개 : 나누기 % 위 아래 좌우
  - 4개 : 시계방향



__DOM 중요__



+++

# HTML

## HTML 기본구조

- Hyper Text Markup Language

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link href="style.css" rel = "stylesheet">
  <script src = "javascript.js"></script>
  <style>
    p{
        color : black;
      }
    </style>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

- DOM 트리 (Document Object Model)
  - 텍스트 파일인 HTML 문서를 브라우저에서 렌더링 하기 위한 구조
    - HTML 문서에 대한 모델을 구성
    - 문서 내의 각 요소에 접근 / 수정에 필요한 프로퍼티와 메서드 제공

- element 요소
  - HTML의 요소는 __태그__와 __내용__으로 구성되어 있다.
- attribute 속성
  - 태그의 부가적인 정보 설정
  - 요소는 속성을 가질 수 있으며, 경로나 크기와 같은 추가적인 정보 제공
  - 태그와 상관없이 사용 가능한 속성들 : HTML Global Attribute
    - id : 문서 전체에서 유일한 고유 식별자 지정
    - class : 공백으로 구분된 해당 요소들의 클래스 목록
    - style : inline 스타일
    - title : 요소에 대한 추가 정보 지정
    - tabindex : 요소에 대한 탭 순서
- 시맨틱 태그
  - header / nav / aside / section / article / footer



# HTML 문서 구조화

