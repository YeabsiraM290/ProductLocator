from dataclasses import fields
from tkinter.tix import Tree
from urllib import request
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import *


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email',
                  'username', 'password', 'phone_no', 'profile_pic')
        read_only_fields = ['id']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

        model = Customer

    def create(self, validated_data):

        validated_data['password'] = make_password(validated_data['password'])
        customer = Customer.objects.create(**validated_data)

        return customer

    def update(self, instance, validated_data):

        if 'password' in validated_data.keys():
            validated_data["password"] = make_password(
                validated_data["password"])

        return super.update(instance, validated_data)

class VendorMoreSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('shop_name', 'shop_image', 'shop_logo',
                  'shop_location', 'catagory', 'is_premium')

        model = VendorMore


class VendorSerializer(serializers.ModelSerializer):

    more = VendorMoreSerializer()

    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email', 'username',
                  'password', 'phone_no', 'profile_pic','type', 'more')
        read_only_fields = ['id']
        model = Vendor

    def create(self, validated_data):

        more = validated_data['more']
        validated_data.pop('more')
        print(validated_data)
        validated_data['password'] = make_password(
            validated_data['password'])
        vendor = Vendor.objects.create(**validated_data)

        more['vendor'] = vendor
        VendorMore.objects.create(**more)

        return vendor

    def update(self, instance, validated_data):
        if 'more' in validated_data.keys():
            more = validated_data['more']
            instance.more.__dict__.update(more)
            instance.more.save()
            validated_data.pop('more')

        if 'password' in validated_data.keys():
            validated_data["password"] = make_password(
                validated_data["password"])

        return super.update(instance, validated_data)

##########################################################
    # def get_fields(self):
    #     fields = super().get_fields()
    #     request = self.context.get("request", None)
    #     if request.method == 'PUT' or request.method == 'PATCH':
    #         fields['dob'].read_only = True
    #         fields['gender'].read_only = True
    #         fields['birth_certificate'].read_only = True
    #     return fields
