from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=400)
    description = models.TextField(max_length=1000)
