from rest_framework import generics, permissions, viewsets
from ..models.Items import Food, Cloth, Gas, Product
from ..serializers.item_serializers import *
from ..permissions.add_item_permission import *



class FoodView(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    permission_classes = [AddItemPermission]

class GasView(viewsets.ModelViewSet):
    queryset = Gas.objects.all()
    serializer_class = GasSerializer
    permission_classes = [AddItemPermission]


class ClothView(viewsets.ModelViewSet):
    queryset = Cloth.objects.all()
    serializer_class = ClothSerializer
    permission_classes = [AddItemPermission]


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AddItemPermission]
