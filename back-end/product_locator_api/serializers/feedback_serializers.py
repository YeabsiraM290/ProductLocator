from rest_framework import serializers

from ..models.Feedback import ClothFeedback, ShopFeedback, FoodFeedback, ProductFeedback
from ..models.Items import *
from .account_serializers import CustomerSerializer, VendorMoreSerializer
# from .item_serializers import ItemSerializer


class FoodFeedbackSerializer(serializers.ModelSerializer):

    class Meta:
        # item = ItemSerializer()
        customer = CustomerSerializer()
        fields = ('rating', 'review', 'date', 'customer', 'item')
        # read_only_fields = ['customer']

        model = FoodFeedback


class ClothFeedbackSerializer(serializers.ModelSerializer):

    class Meta:
        # item = ItemSerializer()
        customer = CustomerSerializer()
        fields = ('rating', 'review', 'date', 'customer', 'item')
        # read_only_fields = ['customer']

        model = ClothFeedback


class ProductFeedbackSerializer(serializers.ModelSerializer):

    class Meta:
        # item = ItemSerializer()
        customer = CustomerSerializer()
        fields = ('rating', 'review', 'date', 'customer', 'item')
        # read_only_fields = ['customer']

        model = ProductFeedback

    # def create(self, validated_data):
    #     customer = self.context['request'].user

    #     validated_data['customer'] = customer
    #     feedback = Feedback.objects.create(**validated_data)

    #     return feedback


class ShopFeedbackSerializer(serializers.ModelSerializer):

    class Meta:
        # item = ItemSerializer()
        customer = CustomerSerializer()
        fields = ('rating', 'review', 'date', 'customer', 'shop')
        # read_only_fields = ['customer']

        model = ShopFeedback

    # def create(self, validated_data):
    #     customer = self.context['request'].user

    #     validated_data['customer'] = customer
    #     feedback = Feedback.objects.create(**validated_data)

    #     return feedback
