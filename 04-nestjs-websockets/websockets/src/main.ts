import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('source-map-support/register');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(11201);
}
bootstrap();

// MODULA A
// [ModuloB, ModuloC
// [Servicios]
// [Controladores]

// ModuloSoloServicios
// [Servicios]
// [exportar] -> [Servicios]

// MODULOSoloControlador
// [Controlador]

// [ModuloSoloServicios]
// [Controladores]
// [Servicios]
// [exportar] -> [Servicios]

// Modulos contiene [Servicios, Controladores], tambien pueden exportar [Servicios]
// Controlador -> Recibir peticiones -> Responsabilidad controlador es VALIDACION
// Servicios -> LOGICA NEGOCIO (servicio es un singleton -> una sola instancia en todo el app)
// logica-> crear, borrar, actualizar, buscar ....

