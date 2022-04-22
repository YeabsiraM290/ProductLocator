from rest_framework import generics, permissions, viewsets
from product_locator_api.serializers.item_serializers import ClothSerializer, FoodSerializer, GasSerializer, ProductSerializer
from ..models.Account import Customer, CustomerMore
from rest_framework.response import Response
from ..models.Items import Cloth, Food, Gas, Product
from django.shortcuts import get_object_or_404


class FoodWishlistView(viewsets.ViewSet):

    def list(self, request):
        user = get_object_or_404(Customer, id=request.user.id)
        wishlist = user.more.food_wishlist.all()
        item_s = FoodSerializer()
        items = []

        for itemid in wishlist:

            item = get_object_or_404(Food, id=itemid.id)
            items.append(item)

        return Response([FoodSerializer.to_representation(item_s, item) for item in items])

    def create(self, request):

        item = request.data['item_id']
        user = get_object_or_404(Customer, id=request.user.id)

        if(user.more):
            user.more.food_wishlist.add(item)

        else:

            more = CustomerMore.objects.create(customer=request.user)
            more.food_wishlist.add(item)
            request.user.more = more

        return item


class GasWishlistView(viewsets.ViewSet):

    def list(self, request):
        user = get_object_or_404(Customer, id=request.user.id)
        wishlist = user.more.gas_wishlist.all()
        item_s = GasSerializer()
        items = []

        for itemid in wishlist:

            item = get_object_or_404(Gas, id=itemid.id)
            items.append(item)

        return Response([GasSerializer.to_representation(item_s, item) for item in items])

    def create(self, request):

        item = request.data['item_id']
        user = get_object_or_404(Customer, id=request.user.id)

        if(user.more):
            user.more.gas_wishlist.add(item)

        else:

            more = CustomerMore.objects.create(customer=request.user)
            more.gas_wishlist.add(item)
            request.user.more = more

        return item


class ClothWishlistView(viewsets.ViewSet):

    def list(self, request):
        user = get_object_or_404(Customer, id=request.user.id)
        wishlist = user.more.cloth_wishlist.all()
        item_s = ClothSerializer()
        items = []

        for itemid in wishlist:

            item = get_object_or_404(Cloth, id=itemid.id)
            items.append(item)

        return Response([ClothSerializer.to_representation(item_s, item) for item in items])

    def create(self, request):

        item = request.data['item_id']
        user = get_object_or_404(Customer, id=request.user.id)

        if(user.more):
            user.more.cloth_wishlist.add(item)

        else:

            more = CustomerMore.objects.create(customer=request.user)
            more.cloth_wishlist.add(item)
            request.user.more = more

        return item


class ProductWishlistView(viewsets.ViewSet):

    def list(self, request):
        user = get_object_or_404(Customer, id=request.user.id)
        wishlist = user.more.product_wishlist.all()
        item_s = ProductSerializer()
        items = []

        for itemid in wishlist:

            item = get_object_or_404(Product, id=itemid.id)
            items.append(item)

        return Response([ProductSerializer.to_representation(item_s, item) for item in items])

    def create(self, request):

        item = request.data['item_id']
        user = get_object_or_404(Customer, id=request.user.id)

        if(user.more):
            user.more.product_wishlist.add(item)

        else:

            more = CustomerMore.objects.create(customer=request.user)
            more.product_wishlist.add(item)
            request.user.more = more

        return item


""" VIEWSET ACTIONS

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
"""
