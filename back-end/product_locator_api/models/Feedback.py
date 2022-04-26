from django.db import models


class FoodFeedback(models.Model):
    rating = models.IntegerField(max_length=1, null=True)
    review = models.TextField(max_length=400)
    date = models.DateField(null=False)
    item = models.ForeignKey(
        'Food', on_delete=models.CASCADE, related_name='feedbacks')
    customer = models.ForeignKey(
        "Customer", on_delete=models.CASCADE, related_name='feedbacks_to_food')


class ClothFeedback(models.Model):
    rating = models.IntegerField(max_length=1, null=True)
    review = models.TextField(max_length=400)
    date = models.DateField(null=False)
    item = models.ForeignKey(
        'Cloth', on_delete=models.CASCADE, related_name='feedbacks')
    customer = models.ForeignKey(
        "Customer", on_delete=models.CASCADE, related_name='feedbacks_to_cloth')


class ProductFeedback(models.Model):
    rating = models.IntegerField(max_length=1, null=True)
    review = models.TextField(max_length=400)
    date = models.DateField(null=False)
    item = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='feedbacks')
    customer = models.ForeignKey(
        "Customer", on_delete=models.CASCADE, related_name='feedbacks_to_product')


class ShopFeedback(models.Model):
    rating = models.IntegerField(max_length=1, null=True)
    review = models.TextField(max_length=400)
    date = models.DateField(null=False)
    shop = models.ForeignKey(
        'Vendor', on_delete=models.CASCADE, related_name='feedbacks')
    customer = models.ForeignKey(
        "Customer", on_delete=models.CASCADE, related_name='feedbacks_to_shop')
