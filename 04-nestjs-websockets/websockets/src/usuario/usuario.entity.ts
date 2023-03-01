import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("epn_usuario")

export class UsuarioEntity{
    //id autogenerado
    @PrimaryGeneratedColumn()
    id: number;
    //Columna en la bdd
    @Column({
        name: "user_nombres", // nombre campo bdd
        type: "varchar",
        length: 60,
        nullable: false,
    })
    nombres: string;

    //Columna en la bdd
    @Column({
        name: "user_apellidos", // nombre campo bdd
        type: "varchar",
        length: 60,
        nullable: false,
    })
    apellidos: string;


    //Columna en la bdd
    @Column({
        name: 'user_rol', // nombre campo bdd
        type: "varchar",
        length: 1,
        nullable: false,
        default: "U",
        //comentraio en la base de datos
        comment: "U = usuario; A = administrador;"
    })
    rol: string;

}