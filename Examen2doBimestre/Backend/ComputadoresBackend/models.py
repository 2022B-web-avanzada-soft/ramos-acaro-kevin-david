from django.db import models

# Create your models here.

from django.db import models


class Computadora(models.Model):
    nombre = models.CharField(max_length=200)
    marca = models.CharField(max_length=200)
    serial = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_venta = models.DateTimeField('fecha de venta')

    def __str__(self):
        return self.nombre


class Componente(models.Model):
    nombre = models.CharField(max_length=200)
    marca = models.CharField(max_length=200)
    serial = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    disponibilidad = models.BooleanField(default=True)
    computadora = models.ForeignKey(Computadora, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
