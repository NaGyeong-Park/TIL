CREATE TABLE classmates (
name TEXT NOT NULL,
age INT NOT NULL,
address TEXT NOT NULL
);

INSERT INTO classmates VALUES ('홍길동', 30, '서울');
INSERT INTO classmates VALUES ('김철수', 30, '대전');
INSERT INTO classmates VALUES ('이싸피', 26, '광주');
INSERT INTO classmates VALUES ('박삼성', 29, '구미');
INSERT INTO classmates VALUES ('최전자', 28, '부산');


SELECT rowid, * FROM classmates;

SELECT rowid, name FROM classmates WHERE address='서울';

SELECT DISTINCT age FROM classmates;

DELETE FROM classmates WHERE rowid=5;

INSERT INTO classmates VALUES ('최전자', 28, '부산');

UPDATE classmates SET name='홍길동', address='제주' WHERE rowid='5';