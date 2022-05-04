from rest_framework.response import Response
from rest_framework import serializers



from ..serializers.feedback_serializers import ClothFeedbackSerializer, FoodFeedbackSerializer, ProductFeedbackSerializer
from ..models.Items import *


class FoodSerializer(serializers.ModelSerializer):
    # images = ImageSerializer(many=True, required = False)
    # images = serializers.ImageField(required=False)
    feedbacks = FoodFeedbackSerializer(many=True)

    class Meta:

        fields = ('id', 'name',  'discription', 'price',
                  'category', 'vendor', 'image', 'feedbacks')
        read_only_fields = ['id', 'vendor', 'feedbacks']
        # depth = 1
        model = Food

    def get_fields(self):
        fields = super().get_fields()
        request = self.context.get("request", None)
        if request is not None:
            if request.method != 'GET':
                fields['feedbacks'].read_only = True
        return fields

    def create(self, validated_data):
    
        vendor = self.context['request'].user

        validated_data['vendor'] = vendor
        food = Food.objects.create(**validated_data)

        return food




class ProductSerializer(serializers.ModelSerializer):
    # images = ImageSerializer(many=True, required = False)
    # images = serializers.ImageField(required=False)
    feedbacks = ProductFeedbackSerializer(many=True)

    class Meta:

        fields = ('id', 'name',  'discription', 'price','image', 'vendor', 'feedbacks')
        read_only_fields = ['id', 'vendor', 'feedbacks']
        # depth = 1
        model = Product

    def get_fields(self):
        fields = super().get_fields()
        request = self.context.get("request", None)
        if request is not None:
            if request.method != 'GET':
                fields['feedbacks'].read_only = True
        return fields

    def create(self, validated_data):
        vendor = self.context['request'].user



        validated_data['vendor'] = vendor
        product = Product.objects.create(**validated_data)

        return product


class GasSerializer(serializers.ModelSerializer):
    # images = ImageSerializer(many=True, required = False)
    # images = serializers.ImageField(required=False)

    class Meta:

        fields = ('id', 'name', 'price', 'availability', 'vendor')
        read_only_fields = ['id', 'vendor']
        # depth = 1
        model = Gas

    def create(self, validated_data):
        vendor = self.context['request'].user



        validated_data['vendor'] = vendor
        gas = Gas.objects.create(**validated_data)

        return gas


class ClothSerializer(serializers.ModelSerializer):
    # images = ImageSerializer(many=True, required = False)
    # images = serializers.ImageField(required=False)

    feedbacks = ClothFeedbackSerializer(many=True)

    class Meta:

        fields = ('id', 'name', 'price','image', 'size_aviliable',
                  'discription', 'feedbacks', 'vendor')
        read_only_fields = ['id', 'vendor', 'feedbacks']
        # depth = 1
        model = Cloth

    def get_fields(self):
        fields = super().get_fields()
        request = self.context.get("request", None)
        if request is not None:
            if request.method != 'GET':
                fields['feedbacks'].read_only = True
        return fields

    def create(self, validated_data):
        vendor = self.context['request'].user



        validated_data['vendor'] = vendor
        cloth = Cloth.objects.create(**validated_data)

        return cloth
