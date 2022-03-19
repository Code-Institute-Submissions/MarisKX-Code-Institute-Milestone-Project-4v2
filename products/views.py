from django.shortcuts import render, redirect, reverse, get_object_or_404
from .models import Product, Category, Manufacturer, TyreSize


def all_products(request):
    """ A view to return all products page """

    products = Product.objects.all().order_by('price', 'name')
    categories = Category.objects.all()
    manufacturers = Manufacturer.objects.all().order_by('display_name', )
    sizes = TyreSize.objects.all().order_by('rim_size', 'width',)

    context = {
        'products': products,
        'categories': categories,
        'manufacturers': manufacturers,
        'sizes': sizes,
    }

    return render(request, 'products/products.html', context)