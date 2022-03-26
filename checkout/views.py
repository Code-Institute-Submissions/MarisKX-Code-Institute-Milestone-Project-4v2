from django.shortcuts import render, redirect, reverse, get_object_or_404, HttpResponse
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.conf import settings

from .forms import OrderForm
from .models import Order, OrderLineItem
from products.models import Product
from cart.contexts import cart_content


def checkout(request):

    cart = request.session.get('cart', {})
    if not cart:
        messages.error(request, "There's nothing in your shopping cart at this moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51KHU9II4JiRbfrjTu9erPXXYCxqqzlkJ1ahVu45Kn15zITxAkvvVHlkUdjn5n6PBak56jkDsB2WCfVbKGV0obDel00676xbnQ7',
        'client_secret': 'test_key',
    }

    return render(request, template, context)
