from django.shortcuts import render, redirect
from .forms import ReviewForm

# Create your views here.
def create(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save()
            return redirect('accounts:profile', review.userid_id)

    else:
        form = ReviewForm()
    context = {'form': form}
    return render(request, 'movies/create.html', context)