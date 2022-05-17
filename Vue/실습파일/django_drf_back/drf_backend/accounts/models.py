from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

# AbstackbaseUser : 기본적으로 거의 없어서 custom 편리
class User(AbstractUser):
    pass