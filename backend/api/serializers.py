from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note

class UserSerializer(serializers.ModelSerializer):
    class Meta : 
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password' : {'write_only' : True}}

    def create(self, validates_data) : 
        user = User.objects.create_user(**validates_data)
        return user
    

class NoteSerializer(serializers.ModelSerializer) :
    author = serializers.ReadOnlyField(source='author.username')

    class Meta :
        model = Note
        fields = ['id', 'author', 'title', 'content', 'created_at', 'updated_at']
        extra_kwargs = {'created_at' : {'read_only' : True}, 'updated_at' : {'read_only' : True}}