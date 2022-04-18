from unicodedata import name
from django.urls import path, include
import subscriptions

from product_locator_api.views.transaction_view import TransactionViewSet
from .views.feedback_views import ClothFeedbackView, ShopFeedbackView, FoodFeedbackView, ProductFeedbackView
from .views.payment import PaymentView
from .views.search import SearchView
from .views.account_views import *
from .views.item_views import *
from rest_framework.routers import DefaultRouter
from .views.wishlist_views import *
from .views.notification import *

app_name = 'product_locator_api'

router = DefaultRouter()

router.register('customer', CustomerViewSet, basename='customer')
router.register('vendor', VendorViewSet, basename='vendor')
router.register('shop', ShopViewSet, basename='shop')
router.register('food', FoodView, basename='food')
router.register('gas', GasView, basename='gas')
router.register('cloth', ClothView, basename='cloth')
router.register('product', ProductView, basename='product')
router.register('review_food', FoodFeedbackView, basename='review_food')
router.register('review_cloth', ClothFeedbackView, basename='review_cloth')
router.register('review_product', ProductFeedbackView,
                basename='review_product')
router.register('review_shop', ShopFeedbackView, basename='review_shop')
router.register('food_wishlist', FoodWishlistView, basename='food_wishlist')
router.register('gas_wishlist', GasWishlistView, basename='gas_wishlist')
router.register('cloth_wishlist', ClothWishlistView, basename='cloth_wishlist')
router.register('product_wishlist', ProductWishlistView,
                basename='product_wishlist')
router.register('notification', NotificationViewSet, basename='notification')
router.register('accept', AcceptSharedWishlist, basename='accept')
router.register('decline', DeclineSharedWishlist, basename='decline')
router.register('search', SearchView, basename='search')
router.register('ad', ADViewSet, basename='ad')
router.register('transaction', TransactionViewSet, basename='transaction')


urlpatterns = [

    path('', include(router.urls)),
    path('subscriptions/', include('subscriptions.urls')),

]
