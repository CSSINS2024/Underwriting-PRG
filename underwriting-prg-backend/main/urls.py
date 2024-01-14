from django.urls import path
from .views import log_insurance_quote

urlpatterns = [
    path('log-insurance-quote/', log_insurance_quote, name='log-insurance-quote'),
]
