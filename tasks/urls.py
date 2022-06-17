from django.urls import path
from .views import list_post, create_post, delete_post, edit_post, update_post

urlpatterns = [
    path('',list_post),
    path('new/', create_post, name='create_post'),
    path('delete/<int:id>/', delete_post, name='delete_post'),
    path('edit/<int:id>/', edit_post, name='edit_post'),
    path('update/', update_post, name='update_post'),
]