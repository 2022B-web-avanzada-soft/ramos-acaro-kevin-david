import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Module} from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [UsuarioEntity], //Entidad en este modulo
            "default"
        ),
    ],
    providers: [UsuarioService],
    exports: [UsuarioService],
    controllers: [UsuarioController]
})

export class UsuarioModule{

}