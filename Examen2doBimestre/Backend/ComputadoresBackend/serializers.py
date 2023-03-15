from rest_framework import serializers
from .models import Computadora, Componente

class ComputadoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computadora
        fields = '__all__'

class ComponenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Componente
        fields = '__all__'