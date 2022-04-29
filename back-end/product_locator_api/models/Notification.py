from django.db import models


class Notification(models.Model):

    sender = models.CharField(max_length=40, null=False)
    item = models.IntegerField(null=False)

    customer = models.ForeignKey(
        "customer", on_delete=models.CASCADE, related_name='notification')
