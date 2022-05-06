from rest_framework import serializers
from ..models.Transaction import Transaction

class TransactionSerializer(serializers.ModelSerializer):

    class Meta:

        fields = ('date', 'amount', 'vendor')

        model = Transaction