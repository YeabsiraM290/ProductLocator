from rest_framework import serializers
from ..models.Notification import *
from django.shortcuts import get_object_or_404
from ..models.Account import Customer


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:

        fields = ('sender', 'item', 'customer')
        read_only_fields = ['sender']

        model = Notification

    def create(self, validated_data):
        sender = self.context['request'].user
        reciver = self.context['request'].POST.get('customer')

        validated_data['sender'] = sender

        if (get_object_or_404(Customer, id=reciver)):
            validated_data['customer'] = get_object_or_404(
                Customer, id=reciver)
            notification = Notification.objects.create(**validated_data)

            return notification

        return 404, 'User not found'
