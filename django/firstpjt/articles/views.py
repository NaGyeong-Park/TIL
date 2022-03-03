from django.shortcuts import render
from django.http import HttpResponse
import random


# Create your views here.
def index(request):
    # return HttpResponse("<h1>Hola :)</h1>")
    return render(request, 'articles/index.html')

def greeting(request):
    foods = ['apple','banana','coconut']
    info = {'name':'July'}
    context = {'foods':foods, 'info':info}
    return render(request, 'articles/greeting.html',context)

def dinner(request):
    foods = ['족발', '햄버거', '치킨']
    pick = random.choice(foods)
    context = {'pick' : pick,'foods':foods}
    return render(request, 'articles/dinner.html',context)

def throw(request):
    return render(request, 'articles/throw.html')

def catch(request):
    message = request.GET.get('message')
    context = {'message':message}
    return render(request, 'articles/catch.html', context)

def hello(request, name):
    return render(request, 'articles/hello.html',{'name':name})

def intro(request, name, age):
    content = {'name':name, 'age':age}
    return render(request, 'articles/intro.html',content)