from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.hashers import make_password
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class AccountManager(BaseUserManager):

    def create_superuser(self, **validated_data):

        validated_data['password'] = make_password(validated_data['password'])

        validated_data['is_staff'] = True
        validated_data['is_superuser'] = True
        validated_data['is_active'] = True
        validated_data['phone_no'] = int('0911')
        validated_data['type'] = 'Admin'

        if validated_data['is_staff'] is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if  validated_data['is_superuser'] is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return Account.objects.create(**validated_data)


