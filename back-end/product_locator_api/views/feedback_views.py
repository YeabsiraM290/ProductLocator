from rest_framework import generics, permissions, viewsets
from ..models.Feedback import ClothFeedback, FoodFeedback, ProductFeedback, ShopFeedback
from ..serializers.feedback_serializers import ClothFeedbackSerializer, FoodFeedbackSerializer, ProductFeedbackSerializer, ShopFeedbackSerializer


class FoodFeedbackView(viewsets.ModelViewSet):
    queryset = FoodFeedback.objects.all()
    serializer_class = FoodFeedbackSerializer


class ClothFeedbackView(viewsets.ModelViewSet):
    queryset = ClothFeedback.objects.all()
    serializer_class = ClothFeedbackSerializer


class ProductFeedbackView(viewsets.ModelViewSet):
    queryset = ProductFeedback.objects.all()
    serializer_class = ProductFeedbackSerializer


class ShopFeedbackView(viewsets.ModelViewSet):
    queryset = ShopFeedback.objects.all()
    serializer_class = ShopFeedbackSerializer
