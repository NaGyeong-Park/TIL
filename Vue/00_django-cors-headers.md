# django-cors-headers 라이브러리 사용하기



참고 : [django-cors-headers 공식 github repository site](https://github.com/adamchainz/django-cors-headers)



## Install

```bash
$ pip install django-cors-headers
```



## settings.py 설정

```python
# settings.py

INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]

...

MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]

```

_[주의]_ CorsMiddleware는 가능한 위에 있는 것이 좋다. 특히! CommonMiddleware나 WhiteNoiseMiddleware보다는 위에 있어야 한다.

만약 CORS_REPLACE_HTTPS_REFERER를 쓸 일이 있다면 CsrfViewMiddleware보단 위에 있어야 한다.



## Configuration

- `CORS_ALLOWED_ORIGINS` : 교차 출처 자원 공유를 허용할 Domain을 리스트 형식으로 적으면 된다.
- `CORS_ALLOWED_ORIGIN_REGEXES` : 위와 같으나 Domain 정규식으로 나타낼 수 있다. 하위 도메인이 많을 때 쓰면 편리하다.
- `CORS_ALLOW_ALL_ORIGINS` : bool 형식, 모든 출처가 허용되는 방식이다.