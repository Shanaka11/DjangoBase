# Django Imports
from django.urls import path
# Local Imports
from base.views import user_views as views

urlpatterns = [
    # Admin
    path('', views.getUsers, name="getUsers"),
    # Logged User
    path('register/', views.registerUser, name="register"),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name="userProfile"),
    path('profile/update/', views.updateUserProfile, name="userProfileUpdate"),
    # Admin
    path('<str:pk>/', views.getUserById, name="user"),
    path('update/<str:pk>/', views.updateUser, name="user-update"),
    path('delete/<str:pk>/', views.deleteUser, name="user-delete"),
]
