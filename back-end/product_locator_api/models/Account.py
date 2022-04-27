from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.hashers import make_password
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class AccountManager(BaseUserManager):

    def create_superuser(self, **validated_data):

        validated_data['password'] = make_password(validated_data['password'])

        validated_data['is_staff'] = True
        validated_data['is_superuser'] = True
        validated_data['is_active'] = True
        validated_data['phone_no'] = int('0911')
        validated_data['type'] = 'Admin'

        if validated_data['is_staff'] is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if  validated_data['is_superuser'] is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return Account.objects.create(**validated_data)

class Types(models.TextChoices):
        CUSTOMER = "CUSTOMER", "Customer"
        VENDOR = "VENDOR", "Vendor"   

class Account(AbstractUser):


    base_type = Types.CUSTOMER

    type = models.CharField(_("Type"), max_length=50, choices=Types.choices, default=base_type)

    email = models.EmailField(_('email address'), unique=True)
    phone_no = models.IntegerField(unique=True)
    profile_pic = models.ImageField(upload_to = 'uploads/', blank=True)
    

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

    objects = AccountManager()

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    def save(self, *args, **kwargs):
        if not self.id:
            self.type = self.base_type
        return super().save(*args, **kwargs)


class CustomerManager(models.Manager):

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=Types.CUSTOMER)

class VendorManager(models.Manager):

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=Types.VENDOR)

 
class Customer(Account):
    base_type = Types.CUSTOMER
    objects = CustomerManager()

    class Meta:
        proxy=True


class VendorMore(models.Model):
    vendor = models.OneToOneField(Account, on_delete=models.CASCADE)
    shop_name = models.CharField(max_length=30)
    shop_image = models.ImageField(upload_to='imgs')
    shop_logo = models.ImageField(upload_to='logos')
    shop_location = models.CharField(max_length=250)
    catagory = models.CharField(max_length=30)
    is_premium = models.BooleanField(default=False)

class Vendor(Account):
    base_type=Types.VENDOR
    objects = VendorManager()

    @property
    def more(self):
        return self.vendormore

    class Meta:
        proxy=True
    
