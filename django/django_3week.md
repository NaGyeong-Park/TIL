# 2022-03-14



### 데이터베이스 생성

```bash
sqlite3

sqlite> .database # .은 sqlite 프로그램 기능 실행
sqlite> .import hellodb.csv examples
sqlite> .tables
sqlite> SELECT * FROM examples; # ;까지 하나의 명령 (SQL Query)로 간주
```

```
GIT_AUTHOR_DATE=2022-03-14T12:00:00 GIT_COMMITTER_DATE=2022-03-14T12:00:00 git commit -m "django"
```