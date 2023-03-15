import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity("epn_nota")
export class NotaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nota: number;

    @ManyToOne(
        () => UsuarioEntity, //Entidad hija
        (instanciaUsuarioEntity) => instanciaUsuarioEntity.notas,
        {
            nullable: false
        })
    usuario: UsuarioEntity

}