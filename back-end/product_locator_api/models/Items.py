from django.db import models
from django.utils.translation import gettext_lazy as _


class Food_catagory(models.TextChoices):
    PIZZA = "PIZZA", "Pizza"
    BEVERAGE = "BEVERAGE", "Beverage"


class Gas_Availability(models.TextChoices):
    AVAILABLE = "AVAILABLE", "Available"
    NOT_AVAILABLE = "NOT AVAILABLE", "Not Available"


class Product(models.Model):
    name = models.CharField(max_length=30, null=False)
    discription = models.CharField(max_length=400)
    image = models.ImageField(upload_to='product_images/', blank=True)
    price = models.DecimalField(max_digits=30, decimal_places=2)

    vendor = models.ForeignKey(
        "vendor", on_delete=models.CASCADE, related_name='hardware')


class Product_Image(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return f"{self.image}"


class Food(models.Model):
    base_category = Food_catagory.PIZZA

    name = models.CharField(max_length=30, null=False)
    discription = models.CharField(max_length=400)
    image = models.ImageField(upload_to='product_images/', blank=True)
    price = models.DecimalField(max_digits=30, decimal_places=2)
    category = models.CharField(
        _("Category"), max_length=50, choices=Food_catagory.choices, default=base_category)
    vendor = models.ForeignKey(
        "vendor", on_delete=models.CASCADE, related_name='menu')

class Gas(models.Model):
    base_availability = Gas_Availability.AVAILABLE

    name = models.CharField(max_length=30, null=False)
    availability = models.CharField(
        _("Availability"), max_length=50, choices=Gas_Availability.choices, default=base_availability)
    price = models.DecimalField(max_digits=30, decimal_places=2)

    vendor = models.ForeignKey(
        "vendor", on_delete=models.CASCADE, related_name='gas')


class Cloth(models.Model):
    name = models.CharField(max_length=30, null=False)
    discription = models.CharField(max_length=400)
    image = models.ImageField(upload_to='product_images/', blank=True)
    price = models.DecimalField(max_digits=30, decimal_places=2)
    size_aviliable = models.TextField()

    vendor = models.ForeignKey(
        "vendor", on_delete=models.CASCADE, related_name='cloth')


class Cloth_Image(models.Model):
    cloth = models.ForeignKey(
        Cloth, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='cloth_images/')

    def __str__(self):
        return f"{self.image}"
