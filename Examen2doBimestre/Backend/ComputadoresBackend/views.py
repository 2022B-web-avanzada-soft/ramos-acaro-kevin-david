import json
from datetime import datetime

from django.http import Http404
from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.generics import RetrieveUpdateAPIView, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from ComputadoresBackend.models import Computadora, Componente
from ComputadoresBackend.serializers import ComputadoraSerializer, ComponenteSerializer


# Create your views here.
#GET
class ComputadoresLista(APIView):
    def get(self, request):
        computadoras = Computadora.objects.all()
        serializer = ComputadoraSerializer(computadoras, many=True)
        return Response(serializer.data)

class ComponentesListaComputador(APIView):
    def get(self, request, id):
        componentes = Componente.objects.filter(computadora=id)
        serializer = ComponenteSerializer(componentes, many=True)
        return Response(serializer.data)

class ComponentesLista(APIView):
    def get(self, request):
        componentes = Componente.objects.all()
        serializer = ComponenteSerializer(componentes, many=True)
        return Response(serializer.data)
#PUT, DELETE
class ComputadoraDetail(APIView):
    """
    Vista para manejar las solicitudes HTTP GET, PUT y DELETE para una computadora en particular.
    """

    def get_object(self, id):
        """
        Función auxiliar para obtener una instancia de Computadora con el id(pk) dado.
        """
        try:
            return Computadora.objects.get(pk=id)
        except Computadora.DoesNotExist:
            raise Http404

    def get(self, request, id):
        """
        Maneja la solicitud GET para obtener los detalles de una Computadora en particular.
        """
        computadora = self.get_object(id)
        serializer = ComputadoraSerializer(computadora)
        return Response(serializer.data)


    def put(self, request, id):
        """
        Maneja la solicitud PUT para actualizar los detalles de una Computadora en particular.
        """
        computadora = self.get_object(id)
        serializer = ComputadoraSerializer(computadora, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        """
        Maneja la solicitud DELETE para eliminar una Computadora en particular.
        """
        computadora = self.get_object(id)
        computadora.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ComputadoraCreate(generics.CreateAPIView):
    queryset = Computadora.objects.all()
    serializer_class = ComputadoraSerializer


class ComponenteDetail(APIView):
    """
    Vista para manejar las solicitudes HTTP GET, PUT y DELETE para una computadora en particular.
    """

    def get_object(self, request, *args, **kwargs):
        """
        Función auxiliar para obtener una instancia de Computadora con el id(pk) dado.
        """
        idComponente = self.kwargs['idComponente']
        try:
            return Componente.objects.get(pk=idComponente)
        except Componente.DoesNotExist:
            raise Http404

    def get(self, request, *args, **kwargs):
        """
        Maneja la solicitud GET para obtener los detalles de una Computadora en particular.
        """
        idComponente = self.kwargs['idComponente']
        componente = self.get_object(idComponente)
        serializer = ComponenteSerializer(componente)
        return Response(serializer.data)


    def put(self, request, *args, **kwargs):
        """
        Maneja la solicitud PUT para actualizar los detalles de una Computadora en particular.
        """
        idComponente = self.kwargs['idComponente']
        idComputador = self.kwargs['idComputador']
        computadora = get_object_or_404(Computadora, pk=idComputador)
        # Crea un nuevo objeto Componente y establece el campo computadora con el objeto obtenido
        componente = self.get_object(idComponente)
        componente.computadora = computadora
        serializer = ComponenteSerializer(componente, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        """
        Maneja la solicitud DELETE para eliminar una Computadora en particular.
        """
        idComponente = self.kwargs['idComponente']
        componente = self.get_object(idComponente)
        componente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ComponenteCreate(generics.CreateAPIView):
    serializer_class = ComponenteSerializer

    def create(self, request, *args, **kwargs):
        # Accede al valor capturado en la URL usando self.kwargs
        idComputador = self.kwargs['idComputador']
        # Crea un nuevo objeto Componente con el valor capturado
        computadora = get_object_or_404(Computadora, pk=idComputador)
        # Crea un nuevo objeto Componente y establece el campo computadora con el objeto obtenido
        componente = Componente(computadora=computadora)
        # Deserializa los datos del request y guarda el objeto en la base de datos
        serializer = self.get_serializer(componente, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        # Retorna una respuesta exitosa
        return Response(serializer.data, status=status.HTTP_201_CREATED)