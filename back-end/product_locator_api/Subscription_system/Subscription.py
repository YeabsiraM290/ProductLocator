from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from dateutil import rrule
from datetime import datetime


from ..models.Account import Vendor

def subscription(user):

    account = get_object_or_404(Vendor, id=user.id)
    
    if set_account_type(account):
        return True

    account.more.is_premium = False
    category = account.more.category

    if str(category) == "GAS STATION":
        count = get_count(account.gas.all())

        if check_limit(count):
            return True
    
        else:
            return False

    elif str(category) == "RESTURANT":
        count = get_count(account.menu.all())
        if check_limit(count):
            return True
        
        else:
            return False

    elif str(category) == "HARDWARE STORE":
        count = get_count(account.hardware.all())

        if check_limit(count):
            return True
        
        else:
            return False

    elif str(category) == "BOUTIQUE":
        count = get_count(account.cloth.all())

        if check_limit(count):
            return True
        
        else:
            return False

def get_count(query_set):
    count=0

    for item in query_set:
        count+=1
    
    return count


def check_limit(count):

    if count > 2:
        return False
    
    return True  


def set_account_type(user):
    last_paid = user.transaction

    if last_paid:
        days_remaning = rrule.rrule(rrule.DAILY, dtstart=last_paid.date, until=datetime.today())

        if days_remaning.count()<=30:
            return True

    return False

