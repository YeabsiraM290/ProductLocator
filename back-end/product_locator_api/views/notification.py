from pkgutil import get_data
from tracemalloc import get_object_traceback
from rest_framework import viewsets
from django.shortcuts import *
from product_locator_api.models.Items import Cloth, Food, Gas, Product
from product_locator_api.models.Notification import Notification
from product_locator_api.serializers.notification_serializer import NotificationSerializer
from ..models.Account import Customer, CustomerMore


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


class AcceptSharedWishlist(viewsets.ViewSet):

    def create(self, request):

        user = get_object_or_404(Customer, id=request.user.id)
        notification = request.data['notification_id']
        item = get_object_or_404(Notification, id=notification).item

        if(list(Food.objects.filter(id=item))):

            if(user.more):
                user.more.food_wishlist.add(item)

            else:

                more = CustomerMore.objects.create(customer=request.user)
                more.food_wishlist.add(item)
                request.user.more = more

            Notification.objects.filter(id=notification).delete()

            return item

        elif(list(Cloth.objects.filter(id=item))):

            if(user.more):
                user.more.cloth_wishlist.add(item)

            else:

                more = CustomerMore.objects.create(customer=request.user)
                more.cloth_wishlist.add(item)
                request.user.more = more

            Notification.objects.filter(id=notification).delete()

            return item

        elif(list(Product.objects.filter(id=item))):

            if(user.more):
                user.more.product_wishlist.add(item)

            else:

                more = CustomerMore.objects.create(customer=request.user)
                more.product_wishlist.add(item)
                request.user.more = more

            Notification.objects.filter(id=notification).delete()

            return item

        elif(list(Gas.objects.filter(id=item))):

            if(user.more):
                user.more.gas_wishlist.add(item)

            else:

                more = CustomerMore.objects.create(customer=request.user)
                more.gas_wishlist.add(item)
                request.user.more = more

            Notification.objects.filter(id=notification).delete()

            return item


class DeclineSharedWishlist(viewsets.ViewSet):

    def create(self, request):

        user = get_object_or_404(Customer, id=request.user.id)
        notification = request.data['notification_id']
        item = get_object_or_404(Notification, id=notification)

        Notification.objects.filter(id=notification).delete()
