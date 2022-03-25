from django.shortcuts import render

# Create your views here.


def show_cart(request):
    """ A view to return the shopping cart page """

    return render(request, 'cart/cart.html')
