# Server & Client

Server : 클라이언트에게 '정보', '서비스'를 제공하는 컴퓨터 시스템

Client : 서버에 그 서버가 맡는 서비스를 요청하고, 서비스 요청을 위해 필요한 인자를 서버가 요구하는 방식에 맞게 제공, 서버로부터 반환되는 응답을 사용자에게 적절한 방식으로 표현하는 기능을 가진 시스템

정보 & 서비스 : Django를 통해 응답한 template / DRF를 통해 응답한 JSON



# CORS

## Same-origin policy (SOP) : 동일 출처 정책

특정 출처(origin)에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용 하는 것을 제안하는 보안 방식

잠재적으로 해로울 수 있는 문서를 분리함으로써 공격 받을 수 있는 경로를 줄이기!



## Origin(출처)?

두 URL의 Protocol, Port, Host가 모두 같아야 동일한 출처라 할 수 있다.

![image-20220516134911480](CORS%20&%20DRF%20Authentication.assets/image-20220516134911480.png)

![image-20220516134838641](CORS%20&%20DRF%20Authentication.assets/image-20220516134838641.png)



## CORS : Cross-Origin Resource Sharing : 교차 출처 리소스(자원) 공유

__추가 HTTP header__을 사용해 특정 출처에서 실행중인 웹 애플리케이션이 다른 출처의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제

다른 출처의 리소스를 불러오려면 그 출처에서 올바른 __CORS header__를 포함한 응답(서버)을 받아야 한다.

### CORS Policy : 교차 출처 리소스 공유 정책

다른 출처에서 온 리소스를 공유하는 것에 대한 정책 <=> SOP

## 교차출처 접근 허용하기

CORS를 사용해  교차 출처 접근 허용하기

CORS는 HTTP 일부로, 어떤 호스트에서 자신의 컨텐츠를 불러갈 수 있는지 __서버에 지정할 수 있는 방법__



## WHY?

1. 브라우저 & 웹 App 보호
   - 악의적인 사이트의 데이터 안가져오게 차단
   - 응답으로 받는 자원에 대한 최소한의 검증
   - 서버는 정상적으로 응답하지만 브라우저에서 차단
2. Server의 자원 관리
   - 누가 해당 리소스에 접근 할 수 있는지 관리 기능

## HOW? 

CORS 표준에 의해 추가된 HTTP Header를 통해 이를 통제한다.

### Access-Control-Allow-Origin 응답 헤더 

이 응답이 주어진 출처(origin)로 부터 요청 코드와 공유될 수 있는지 나타냄.

_막는건 클라이언트지만 지정은 서버에 해야한다~_

![image-20220518010840192](03_CORS%20&%20DRF%20Authentication.assets/image-20220518010840192.png)

__서버는 CORS Policy와 직접적인 연관이 없고! 그저 요청에 응답한다 : ACAO에 특정한 origin을 포함시켜 응답__

브라우저는 응답에서 ACAO 확인 후 허용 여부 결정한다.

### django-cors-headers 라이브러리

응답에 CORS header를 추가해주는 라이브러리
