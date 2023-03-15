
from django.urls import path, include
from django.contrib.auth.models import User

from ComputadoresBackend.views import ComputadoresLista, ComponentesLista, ComputadoraDetail, ComputadoraCreate, \
    ComponenteCreate, ComponenteDetail, ComponentesListaComputador

urlpatterns = [
path('', ComputadoresLista.as_view()),
path('create', ComputadoraCreate.as_view()),
path('<int:id>/', ComputadoraDetail.as_view()),
path('<int:idComputador>/componentes/<int:idComponente>', ComponenteDetail.as_view()),
path('<int:id>/componentes', ComponentesListaComputador.as_view()),
path('componentes', ComponentesLista.as_view()),
path('<int:idComputador>/componentes/create', ComponenteCreate.as_view()),
path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]