Django 02(admin x), DB1, DB2



# Django 02



## Django Model

### Model : Wep APP의 DB를 구조화하고 조작하기 위한 도구

단일한 데이터에 대한 정보 가짐 / 사용자가 저장하는 데이터들의 필수적인 필드들과 동작들 포함

저장된 데이터베이스의 구조(layout)

Django는 model을 통해 데이터에 접속하고 관리

일반적으로 각각의 model은 하나의 데이터베이스 테이블에 매핑



### Database

- DB : 체계화된 데이터의 모임
- Query : 데이터 조회 명령어 / 조건에 맞는 데이터를 추출하거나 조작하는 명령어 / Query 날린다 => DB 조작

#### 기본구조

- 스키마 : 데이터베이스에서 자료의 구조, 표현방법, 관계 등을 정의한 구조 : 명세 기술
- 테이블 : 데이터 요소들의 집합 : SQL DB에서는 관계라고도 함
  - 열 :  field or 속성
  - 행 :  레코드 or 튜플
  - PK : 각 레코드의 고유값 / Primary Key / 반드시 설정 / DB 관리 및 관계 설정시 주요하게 활용
  - 



### ORM : Object-Relational-Mapping

객체 지향 프로그래밍 언어를 사용하여 호환되지 않는 유형의 시스템 간에 데이터를 변환하는 프로그래밍 기술

- 장점 : SQL 잘 몰라도 DB 조작 가능 / SQL의 절차적 접근 X 객체 지향적 접근으로 인한 높은 생산성
- 단점 : ORM만으로 완전히 서비스를 구현하기 어려운 경우가 있음
- __현대 Web Framework의 요점은 Web 개발의 속도를 높이는 것! 생산성!!__
- 우리는 DB를 객체(object)로 조작하기 위해 ORM을 사용!!

### models.py 작성

`django.models.Model` 클래스의 서브 클래스로 표현 : django.db.models 모듈의 Model 클래스 상속

models 모듈을 통해 어떠한 타입의 DB 컬럼 정의할 것인지 정의 



## Migrations

_' django가 model에 생긴 변화를 반영하는 방법'_

- `makemigrations` : model 변경한 것에 기반한 새로운 마이그래이션(like 설게도)을 만들 때 사용
- `migrate` : 마이그레이션을 DB에 반영하기 위해 사용,  설계도를 실제 DB에 반영하는 과정, 모델 변경사항들과 DB의 스키마가 동기화를 이룸
- `sqlmigrate` : 마이그레이션에 대한 SQL 구문을 보기위해 사용 / 마이그레이션이 SQL 문으로 어떻게 해석되어서 동작할지 미리 확인 할 수 있음
- `showmigrations` : 프로젝트 전체의 마이그레이션 상태 확인 



## DB API

_'DB를 조작하기 위한 도구`_

Django가 기본적으로 ORM을 제공함에 따른 것으로 DB를 편하게 조작할 수 있게 도움

Model을 만들면 Django는 객체들을 CRUD있는 DB API 자동으로 만듬

database-abstract API or database-access API

`Article.objects.all()` : className.Manager.QuerySet API

- Manager : Django 모델에 DB query 작업이 제공되는 인터페이스 / 기본적으로 모든 Django 모델 클래스에 objects라는 Manger를 추가
- QuerySet : DB로부터 전달받은 객체 목록 / queryset 안의 객체는 0개,1개, 여러개일 수 있다 / 조회, 필터, 정렬 등을 수행 할 수 있음

## CRUD

```python
#READ
Articles.objects.all()
Articles.objects.get(pk=1)
Articles.objects.filter(title="a")

#CREATE
# 1. 특정 테이블에 새로운 행을 추가해서 데이터 추가
article = Article()
article.title = "a"
article.save()
# 2.
article = Article(title="b")
article.save()
# 3. 쿼리 표현식 리턴
Article.object.create(title="c")

#UPDATE : article 인스턴스 객체의 인스턴스 변수 값을 변경 후 저장
article = Article=.objects.get(pk=1)
article.title = "d"
article.save()

#DELETE
article = Article.objects.get(pk=1)
article.delete() # QuerySet의 모든 행에 대해 SQL 삭제 쿼리 수행하고 삭제된 객체 수와 객체유형당 삭제 수가 포함된 딕셔너리 반환
```

save() method : saving objects / 객체를 DB에 저장 / 데이터 생성시 save()호출 전에 객체의 ID 값이 무엇인지 알 수 없다(ID는 DB에서 계산해서)  / 단순히 모델을 인스턴스화 하는 것은 DB에 영향을 미치지 않기 때문에 반드시 save()가 필요하다.

### READ

- all() : 현재 queryset의 복사본을 반환
- get(): 주어진 lookup 매개변수와 일치하는 객체를 반환 : 없으면 DoesNotExist 예외 발생 / 둘 이상 객체면 MultipleObjectsReturned 예외 : PK같이 고유성 보장하는 조회에서 사용해야한다.
- filter(): 주어진 lookup 매개변수와 일치하는 객체를 포함하는 새 QuerySet 반환

### Field lookups 

- 조회 시 특정 검색 조건을 지정
- filter(), exclude(), get(), order_by('-pk',)



## CRUD with views

### HTTP method

GET

- 특정 리소스를 가져오도록 요청할 때 사용
- 반드시 데이터를 가져올 때만 사용
- DB에 변화 X / CRUD의 R

POST

- 서버로 데이터 전송
- 리소스를 생성/변경하기 위해 데이터를 HTTP body에 담아 전송
- 서버에 변경사항을 만듬 / CRUD에서 C U D

Cross-site request forgery - 사이트 간 요청 위조

- CSRF에 대항해 middleware와 template tag를 제공 : Token 사용
  - 사용자 데이터에 임의의 난수 값 부여해 매 요청마다 해당 난수 값 포함시켜 전송시키도록 함
  - 서버 요청 받을 때마다 전달된 token 값이 유효한지 검증
- Django : input type이 hidden으로 작성 / value는 django에서 생성한 hash 값 => 태그 없이 요청 보내면 403



- redirect 쓰는 이유 : URL 여전히 view함수 링크 / 넘겨주는 data는 view 함수에서 다루고 있는 데이터
- redirect : 새 URL로 요청 다시 보냄



# DB01

DB : 체계화된 데이터의 모임 

장점 : 데이터 중복 최소화 / 무결성 / 일관성 / 독립성 / 표준화 / 보안 유지



## RDB 관계형 데이터벵스

key와 value들의 간단한 관게를 표로 정리한 DB

- 스키마 : 전반적인 명세서 기술한 것
- 테이블 : 열과 행의 모델을 사용해 조직된 데이터 요소들의 집합
- 열 : 컬럼 : 필드 : 고유한 데이터 형식 지정
- 헹 : 로우 : 레코드 : 실제 데이터가 저장되는 형태
- Primary Key : 각 행의 고유 값 

## RDBMS

### SQLite 

서버 형태가 아닌 파일 형식으로 응용 프로그램에 넣어서 사용하는 비교적 가벼운 DB, 로컬에서 간단한 DB 구성 가능

#### Data type

1. NULL
2. INTEGER
3. REAL
4. TEXT
5. BLOB

## SQL

 RDMS의 데이터 관리를 위해 설계된 특수 목적으로 프로그래밍 언어

- DDL : 데이터 정의 언어 : CREATE DROP ALTER
- DML : 데이터 조작 언어 : INSERT SELECT UPDATE DELETE
- DCM : 데이터 제어 언어 : GRANT REVOKE COMMIT ROLLBACK

### CRUD

```sqlite
INSERT INTO 테이블 이름(컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);
SELECT rowid, * FROM 테이블 이름;
DROP TABLE 테이블 이름;
SELECT DISTINCT 필드 FROM 테이블 이름;

id 재사용이 싫으면
CREATE시 PRIMARY KEY AUTOINCREMENT 설정

UPDATE 테이블 이름 SET 컬럼1=값1, 컬럼2=값2 WHERE 조건;
```

```sqlite
Aggregate Functions

SELECT AVG(컬럼) FROM 테이블이름;
SELECT MAX(컬럼) FROM 테이블이름;
SELECT MIN(컬럼) FROM 테이블이름;
SELECT SUM(컬럼) FROM 테이블이름;

LIKE
SELECT * FROM 테이블 WHRER 컬럼 LIKE '와일드카드 패턴'; (_2, %2)

ORDER BY
SELECT * FROM 테이블 ORDER BY 컬럼 ASC LIMIT 10;

GROUP BY
SELECT 컬럼1, aggregate_function(컬럼2) AS 바꿔부를 컬럼이름 FROM 테이블 GROUP BY 컬럼1, 컬럼2;

ALTER TABLE 테이블 이름 RENAME COLUMN 현재 이름 TO 새 이름;
ALTER TABLE 테이블 이름 ADD COLUMN 컬럼 이름 데이터타입설정(NOT NULL없게 or 기본 값 설정);

```


