import {B} from "../02-typescript/02-interfaces";
import {leerArchivo} from "./archivos";

export  class Componente{

    public nombre : String;
    public marca : String;
    public serial : String;
    public precio : Number;
    public disponibilidad : Boolean;


    constructor(nombre:String, marca: String, serial: String, precio:Number, disponibilidad:Boolean) {
        this.nombre = nombre;
        this.marca = marca;
        this.serial = serial;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }

    static async  obtenerComponentes(){
        try {
            const contenidoArchivo = await  leerArchivo("./ListaDeComponentes.txt");
            return JSON.parse(<string>await contenidoArchivo);
        }catch (e){
            console.log(e)
        }

    }

    static async obtenerComponente(nombre:String){
        let componente = JSON.parse(<string>await this.obtenerComponentes()).filter(
            (valorActual,indiceActual,arregloCompleto) => {
                return valorActual.nombre == nombre;
            }
        );
        return componente[0]
    }


}