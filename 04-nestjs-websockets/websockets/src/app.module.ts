import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./eventos/eventos.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {NotaModule} from "./nota/nota.module";
import {NotaEntity} from "./nota/nota.entity";

@Module({ // importamos otros modulos
  imports: [EventosModule,
            TypeOrmModule.forRoot({
                name: "default",
              type: "sqlite",
              database: "./bdd/bdd.sqlite",
              entities: [
                  UsuarioEntity,
                  NotaEntity
              ], // entidades de TODO el aplicativo
              synchronize: true, //true, edita las columnas y tablas // false => nada
               dropSchema: false, // true => borra toda la base de datos! cuidado => false => nada
            }),
        UsuarioModule,
        NotaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}