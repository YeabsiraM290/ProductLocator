from rest_framework import viewsets
from .permissions import *
from .models import *
from .serializers import *

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    # permission_classes = [PostUserWritePermission]

class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    # permission_classes = [PostUserWritePermission]
