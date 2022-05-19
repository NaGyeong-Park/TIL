## dj-rest-auth와 django-allauth 라이브러리

[dj-rest-auth 가이드](https://dj-rest-auth.readthedocs.io/en/latest/)

[django-allauth 가이드](https://django-allauth.readthedocs.io/en/latest/installation.html)

## install

```bash
$ pip install django-allauth
$ pip install dj-rest-auth
```

## settings.py

```python
# settings.py

INSTALLED_APPS = [
    ...,
    'rest_framework',
    'rest_framework.authtoken',
    ...,
    'dj_rest_auth',
    'dj_rest_auth.registration',
    ...,
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
]

# DRF 설정
REST_FRAMEWORK = {

    # 기본 인증을 TokenAuthentication을 사용하도록 설정
    'DEFAULT_AUTHENTICATION_CLASSES':[
        'rest_framework.authentication.TokenAuthentication',
    ],

    # 인증받은 사용자만 요청하도록 설정하는 곳
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny', # 모두 허용
        'rest_framework.permissions.IsAuthenticated', # 로그인 하면 허용
    ],
}

```



## urls.py

```python
# urls.py
urlpatterns = [
    ...
    path('accounts/', include('allauth.urls')),
    ...
]


urlpatterns = [
    ...,
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
]
```

