from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from ..models.Account import *
from ..models.Account import Shop_category


class CustomerMoreSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('food_wishlist', 'gas_wishlist',
                  'cloth_wishlist', 'product_wishlist',)
        depth = 1
        model = CustomerMore


class CustomerSerializer(serializers.ModelSerializer):

    more = CustomerMoreSerializer(required=False)

    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email',
                  'username', 'password', 'phone_no', 'notification','transaction', 'profile_pic', 'more', 'feedbacks', 'type')
        read_only_fields = ['id', 'more', 'type']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
        depth = 1
        model = Customer

    def get_fields(self):
        fields = super().get_fields()
        request = self.context.get("request", None)
        if request is not None:
            if request.method == 'GET':
                fields['more'].read_only = True
        return fields

    def create(self, validated_data):

        validated_data['password'] = make_password(validated_data['password'])
        customer = Customer.objects.create(**validated_data)
        validated_data['more'] = CustomerMore.objects.create(customer=customer)

        return customer

    def update(self, instance, validated_data):

        if 'password' in validated_data.keys():
            validated_data["password"] = make_password(
                validated_data["password"])

        return super.update(instance, validated_data)


class VendorMoreSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('shop_name', 'shop_image', 'shop_logo',
                  'location_latitude', 'location_longitude', 'category', 'is_premium')

        model = VendorMore


class VendorSerializer(serializers.ModelSerializer):

    more = VendorMoreSerializer()

    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email', 'username',
                  'password', 'phone_no', 'profile_pic','transaction', 'hardware', 'menu', 'gas', 'cloth', 'feedbacks', 'more', 'type')
        read_only_fields = ['id', 'type']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

        model = Vendor
        depth = 1

    def create(self, validated_data):

        more = validated_data['more']
        category = more['category']

        if category == "Resturant":
            more['category'] = Shop_category.RESTURANT

        if category == "Hardware store":
            more['category'] = Shop_category.HARDWARE_STORE

        if category == "Boutique":
            more['category'] = Shop_category.BOUTIQUE

        if category == "Gas station":
            more['category'] = Shop_category.GAS_STATION


        validated_data.pop('more')

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


class VendorShopSerializer(serializers.ModelSerializer):

    more = VendorMoreSerializer()

    class Meta:
        fields = ('id', 'phone_no', 'hardware', 'menu', 'gas', 'cloth', 'more')
        read_only_fields = ['id']

        model = Vendor
        depth = 1
