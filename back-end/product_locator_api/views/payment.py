import requests
from rest_framework import generics, permissions, viewsets  
from rest_framework.response import Response

url = "https://test.yenepay.com/"

obj = { "process": "Express",
        "successUrl": "http://localhost:8000/token",
        "ipnUrl": "http://localhost:8000/customer",
        "cancelUrl": "http://localhost:8000/accept",
        "merchantId": "SB1609",
        "merchantOrderId": "l710.0",
        "expiresAfter": 24,
        "itemId": 1,
        "itemName": "Subscription",
        "unitPrice": 100.0,
        "quantity": 1,
        "discount": 0.0,
        "handlingFee": 0.0,
        "deliveryFee": 0.0,
        "tax1": 0.0,
        "tax2": 0.0
}


class PaymentView(viewsets.ViewSet):

    def list(self, request):

        try:
            req = requests.post(url, data = obj)
            print(req)
            return Response("DOne")
        
        except:

            return Response("Not")