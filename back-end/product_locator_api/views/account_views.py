from rest_framework import viewsets
from ..permissions.account_permissions import *
from ..models.Account import *
from ..models.Account import VendorMore
from ..serializers.account_serializers import *
from rest_framework.response import Response


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    # permission_classes = [PostUserWritePermission]


class VendorViewSet(viewsets.ModelViewSet):

    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    # permission_classes = [PostUserWritePermission]

class ShopViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorShopSerializer
    # permission_classes = [PostUserWritePermission]

class ADViewSet(viewsets.ViewSet):

    def list(self, request):

        shop = VendorMore.objects.filter(is_premium=True).all()
        vendor = Vendor.objects.filter(
                    id__in=[more.id for more in shop]).all()

        shop_s = VendorShopSerializer()

        shop_result = [VendorShopSerializer.to_representation(shop_s, shops) for shops in vendor]
    
        return Response({"shop": shop_result})
