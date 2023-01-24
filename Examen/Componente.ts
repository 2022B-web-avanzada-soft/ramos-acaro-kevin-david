import {escribirArchivo, leerArchivo} from "./archivos";

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
        return (await this.obtenerComponentes()).find(
            (valorActual, indiceActual, arregloCompleto) => {
                return valorActual.nombre === nombre;
            }
        );
    }

    static async registrarComponente(componente: Componente){

        try{
            let arregloComponentes =  await this.obtenerComponentes();
            arregloComponentes.push(componente);
            await escribirArchivo("ListaDeComponentes.txt", JSON.stringify(arregloComponentes) );
        }catch (e){
            console.log(e)
        }

    }

    static async actualizarComponente(componenteDesactualizado: string, componenteActualizado: Componente){

        try{
            const arregloComponentes =  await this.obtenerComponentes();
            const arregloActualizado = arregloComponentes.map((componentes)=>{
                if(componentes.nombre===componenteDesactualizado){
                    componentes = componenteActualizado;
                }
                return componentes
            })
            await escribirArchivo("ListaDeComponentes.txt", JSON.stringify(arregloActualizado) );
        }catch (e){
            console.log(e)
        }

    }

    static async eliminarComponente(componentePorEliminar: string){

        try{
            const arregloComponentes =  await this.obtenerComponentes();
            const arregloActualizado = arregloComponentes.filter((componente)=>{
                return componente.nombre !== componentePorEliminar
            })
            await escribirArchivo("ListaDeComponentes.txt", JSON.stringify(arregloActualizado) );
        }catch (e){
            console.log(e)
        }

    }

}