AUTH_USER_MODEL = 'auth.User' : 따옴표, U는 대문자

rest_framework : pip에서 djangorestframework

django_seed : `$ python manage.py seed api --number=15` 

그냥 `serializers.Serializer`가 아닌 `serializers.ModelSerializer`

put 에서 `serializer(가져온 pk정보, data=request.data, partial=True)`

serialiizers : `artist = ArtistSerializer(read_only=True)` / `read_only_fields = ('artist',)`