from rest_framework.response import Response

from rest_framework import viewsets
from product_locator_api.models.Items import Cloth, Food, Gas, Product
from product_locator_api.serializers.account_serializers import  VendorShopSerializer
from product_locator_api.serializers.item_serializers import ClothSerializer, FoodSerializer, GasSerializer, ProductSerializer
from ..models.Account import Vendor, VendorMore


class SearchView(viewsets.ViewSet):

    def list(self, request):

        keyword = request.query_params.get('search')

        if (keyword):

            shop_s = VendorShopSerializer()
            food_s = FoodSerializer()
            hardware_s = ProductSerializer()
            cloth_s = ClothSerializer()
            gas_s = GasSerializer()

            shop = VendorMore.objects.filter(shop_name__contains=keyword).all()
            vendor = Vendor.objects.filter(
                id__in=[more.id for more in shop]).all()

            food = Food.objects.filter(name__contains=keyword).all()
            hardware = Product.objects.filter(name__contains=keyword).all()
            cloth = Cloth.objects.filter(name__contains=keyword).all()
            gas = Gas.objects.filter(name__contains=keyword).all()

            shop_result = [VendorShopSerializer.to_representation(
                shop_s, shops) for shops in vendor]
            food_result = [FoodSerializer.to_representation(
                food_s, foods) for foods in food]
            hardware_result = [ProductSerializer.to_representation(
                hardware_s, hardwares) for hardwares in hardware]
            cloth_result = [ClothSerializer.to_representation(
                cloth_s, cloths) for cloths in cloth]
            gas_result = [GasSerializer.to_representation(
                gas_s, gases) for gases in gas]

            return Response({"shop": shop_result, "food": food_result, "gas": gas_result, "hardware": hardware_result, "cloth": cloth_result})

        return Response("Enter keyword")
