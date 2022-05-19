# Authentication & Authorization



## Authentication  : 인증, 입증

사용자가 누구인지 확인하는 행위 : 내가 누구지?

__모든 보안 프로세스의 첫 번째 단계(가장 기본 요소)__

__401 Unauthorized__ : HTTP 표준에서는 미인증(unauthorized), 하지만 의미상 이 응답은 비인증(unauthenticated)

## Authorization : 권한 부여, 허가

사용자에게 특정 리소스 또는 기능에 대한 액세스 권한을 부여하는 과정(절차)

보안 환경에서 권한 부여는 항상 인증을 따라야 한다 : 엑세스 권한을 부여받기 전에, 먼저 자기 ID가 찐인지 확인

인증이 되었어도 모든 권한을 부여받지 않는다

__403 Forbidden__ : 401과 다른점은 서버는 클라이언트가 누군지 알고있다! 권한이 없는거지~

## Authentication and authorization work together

회원 가입을 하고 로그인을 하면 할 수 있는 권한 생성 : 인증 이후에 권한이 따라오는 경우가 많다

단, 모든 인증을 거쳐도 권한이 동일하게 부여되는 것이 아니다!

세션, 토큰, 제 3자를 활용하는 등의 다양한 인증 방식이 존재



# DRF Authentication

다양한 인증 방식 : Session Based / Token Based(Basic Token, JWT) / Oauth(google, facebook, github ...) ...

## Basic Token Authentication

클라이언트가 정보 주기 => 서버에서 User DB에 등록, token 발급/테이블에 저장 => 서버에서 클라이언트에게 토큰 넘겨주기 => 클라이언트가 로컬스토리지에 토큰 저장하기

=> 클라이언트가 서버 측에 요청시 Header에 Authorizations에 Token을 담아서 넘겨준다. => 서버 token Table에서 확인 => 응답

## JWT : Json Web Token

JSON 포맷을 활용해 요소 간의 안전하게 정보를 교환하기 위한 표준 포맷

암호화 알고리즘에 의한 디지털 서명이 되어있어 JWT 자체로 검증이 가능하다.

JWT  자체가 필요한 정보를 모두 갖기 때문에(self-contained) 이를 검증 하기 위한 다른 검증수단(table..)이 필요 없다.

사용처 : Authentication, Information Exchange

##### 특징 

- 기본 토큰 인증 체계와 달리 JWT 인증 확인은 __DB에서 유효성 검사가 필요없다!__: JWT 자체가 self-contained
- 세션 혹은 기본 토큰을 기반으로 한 인증과의 핵심 차이점!
- __토큰 탈취시 서버 측에서 토큰 무효화 안된다..(블랙리스팅 테이블 활용)__
- 매우 짧은 유효기간(5min)과 Refresh 토큰을 활용하여 구현
- MSA(Micro Server Architecture) 구조에서 서버간 인증에 활용
- One Source(JWT) Multi Use 가능