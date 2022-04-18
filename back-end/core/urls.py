from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static
from product_locator_api.views.login_view import LoginTokenView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('product_locator_api.urls',
         namespace='product_locator_api')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', LoginTokenView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
