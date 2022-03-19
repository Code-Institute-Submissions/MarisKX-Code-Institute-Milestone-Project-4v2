from django.contrib import admin
from .models import Product, Category, Manufacturer, TyreSize


class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
        'ean_code',
        'manufacturer',
        'size',
        'price',
        'image',
    )

    ordering = ('name',)


class CategoryAdmin(admin.ModelAdmin):
    readonly_fields = ('name', )
    list_display = (
        'display_name',
        'name',
    )


class ManufacturerAdmin(admin.ModelAdmin):
    readonly_fields = ('name', )
    list_display = (
        'display_name',
        'name',
    )


class TyreSizeAdmin(admin.ModelAdmin):
    readonly_fields = (
        'full_size_code',
        'full_size_display',
        'full_size_short',
        'full_size_sort',
        )
    list_display = (
        'full_size_code',
        'full_size_display',
    )

    ordering = ('rim_size', 'width', 'heigth')


admin.site.register(TyreSize, TyreSizeAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Manufacturer, ManufacturerAdmin)