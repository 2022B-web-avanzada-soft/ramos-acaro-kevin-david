import {BadRequestException, Body, Controller, Get, HttpCode, Post, Query} from "@nestjs/common";
import {NotaService} from "./nota.service";
import {UsuarioCreateDto} from "../usuario/dto/usuario-create.dto";
import {validate} from "class-validator";
import {MongoFindManyOptions} from "typeorm/find-options/mongodb/MongoFindManyOptions";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {FindOptionsWhere, Like} from "typeorm";
@Controller("nota")
export class NotaController {
    constructor(
        private  readonly notaService : NotaService
    ) {
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {

        return this.notaService.create(bodyParams);
    }
    @Get("/")
    @HttpCode(200)
    async find(){
        return this.notaService.find({})
    }
}