from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, "home.html")

def photoedit(request):
    return render(request, "photoedit.html")