from django.contrib.auth.models import User
from rest_framework import serializers


# class UserSerializer(serializers.ModelSerializer):

#     password = serializers.CharField(
#         write_only=True,
#         style = {'input_type': 'password'},
#         max_length = 20,
#         min_length = 8,
#         )
    

#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password']


#     def validate_email(self, email):
#         if User.objects.filter(email=email).exists():
#             raise serializers.ValidationError("This email is already taken...!")
#         return email
    
    
#     def create(self, validated_data):
#         user = User.objects.create_user(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             password=validated_data['password']
#         )

#         return user

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only = True,
        style = {'input_type':'password'},
        max_length = 20,
        min_length=8
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    def validate_username(self, username):
        username = username.lower()

        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("This username is already taken...!")
        return username

    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("This email is already taken...!")
        return email
    

    def create(self, validated_data):

        user = User.objects.create_user(
            username = validated_data['username'].lower(),
            email = validated_data['email'],
            password = validated_data['password']
        )

        return user