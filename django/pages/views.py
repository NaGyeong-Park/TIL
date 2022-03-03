from django.shortcuts import render

# Create your views here.
def dinner(request, menu, people):
    content = {'menu' : menu, 'people' : people}
    return render(request, 'dinner.html', content)