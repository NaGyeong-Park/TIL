from django import forms
from .models import Movie, Review

class ReviewForm(forms.Form):
    WEATHER_A = 'Sn'
    WEATHER_B = 'Gm'
    WEATHER_C = 'Rn'
    WEATHER_D = 'Sn'
    WEATHER_CHOICES = [
        (WEATHER_A, '맑음'),
        (WEATHER_B, '흐림'),
        (WEATHER_C, '비'),
        (WEATHER_D, '눈'),
    ]

    weather = forms.ChoiceField(choices=WEATHER_CHOICES)
