from email import message
from rest_framework.response import Response
from rest_framework.permissions import SAFE_METHODS, BasePermission
from ..Subscription_system.Subscription import subscription


class AddItemPermission(BasePermission):
    message = 'You have reached item limit upgrade your account'

    def has_permission(self, request, view):

        if request.method not in SAFE_METHODS:

          return subscription(request.user)

        return True
                  



        
