from operator import imod
from rest_framework_simplejwt.views import TokenObtainPairView
from ..serializers.login_serializer import LoginSerializer


class LoginTokenView(TokenObtainPairView):
    serializer_class = LoginSerializer
