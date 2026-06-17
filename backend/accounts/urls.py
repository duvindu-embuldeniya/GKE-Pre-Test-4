from django.urls import path
from . views import *

urlpatterns = [
    path('register/', register, name='register'),
    path('health/', health, name = 'health'),
]