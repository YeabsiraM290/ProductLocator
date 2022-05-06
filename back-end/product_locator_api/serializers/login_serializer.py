from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from ..models.Account import Customer, Vendor
from ..serializers.account_serializers import CustomerSerializer, VendorSerializer


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        account_json = ""
        if self.user.type == 'CUSTOMER':
            customer = Customer.objects.filter(id=self.user.id).first()
            customer_serializer = CustomerSerializer()
            account_json = CustomerSerializer.to_representation(
                customer_serializer, customer)

        if self.user.type == 'VENDOR':
            vendor = Vendor.objects.filter(id=self.user.id).first()
            vendor_serializer = VendorSerializer()
            account_json = VendorSerializer.to_representation(
                vendor_serializer, vendor)

        data['account'] = account_json
        return data
