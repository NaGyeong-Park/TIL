API 서버를 임시로 만들어 테스트 해보고 싶을 때 사용되는 도구가 json-server이다. 이를 이용하면 아직 서버가 구축되어 있지 않아도 요청을 주고 받는 정도의 간단한 API 통신을 테스트 해볼 수 있다. 물론 FireBase를 이용해 연습해볼까 했지만 급하게 만들어야 할 때를 대비해 공부해보도록 한다! 



# 데이터 적기

`[원하는 이름].json`파일을 만든다. 물론 json 형식이여야 한다.

```json
{
  "users": [
    {
      "id": "test_login",
      "password": "1234"
    }
  ]
}
```

나는 login을 연습해보기 위해서 login관련 데이터를 설정해주었다.



# 서버 열기

`$ npx json-server ./data.json --port 8090`

아마 나처럼 처음 하는 사람이면 packages를 설치하라고 뜨는데 y를 누르면 된다. `json-serve`을 설치하여 서버를 열어준다

```bash
$ npx json-server ./db.json --watch --port 8090
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Need to install the following packages:
  json-server
Ok to proceed? (y) y

  \{^_^}/ hi!

  Loading ./db.json
  Done

  Resources
  http://localhost:8090/users

  Home
  http://localhost:8090

  Type s + enter at any time to create a snapshot of the database
  Watching...

GET /%PUBLIC_URL%/favicon.ico 404 3.813 ms - 2
```

그렇다면 짜자잔! localhost의 8090번 포트에 우리의 간이 서버가 생긴다.