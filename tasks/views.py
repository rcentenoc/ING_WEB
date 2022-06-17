from django.shortcuts import render,redirect
from .models import Task
# Create your views here.
def list_post(request):
    tasks = Task.objects.all()
    return render(request, 'list_post.html', {'tasks': tasks})

def  create_post(request):
    task = Task(title=request.POST['title'], description=request.POST['description'])
    task.save()
    print(request.POST,('title','description'))
    return redirect('/posts/')

def delete_post(request, id):
    task = Task.objects.get(id=id)
    task.delete()
    return redirect('/posts/')

def edit_post(request, id):
    task = Task.objects.get(id=id)
    return render(request, 'edit_post.html', {'task': task})

def update_post(request, id):
    task = Task.objects.get(id=id)
    task.title = request.POST['title']
    task.description = request.POST['description']
    task.save()
    return redirect('/posts/')