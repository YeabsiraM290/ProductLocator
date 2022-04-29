from django.db import models


class Transaction(models.Model):

    date = models.DateField(null=False)
    amount = models.IntegerField(null=False)
    vendor = models.OneToOneField(
        "Vendor", on_delete=models.CASCADE, related_name='transaction')
