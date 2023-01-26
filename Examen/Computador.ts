import {Componente} from "./Componente";
import {leerArchivo, escribirArchivo} from "./archivos";

export class Computador{

    public nombre : String;
    public marca : String;
    public serial : String;
    public precio : Number;
    public  fechaVenta: Date;
    public componentes: Array<Componente>;

    constructor(nombre:String, marca: String, serial: String, precio:Number, componentes:Array<Componente>) {
        this.nombre = nombre;
        this.marca = marca;
        this.serial = serial;
        this.precio = precio;
        this.fechaVenta = new Date(Date.now());
        this.componentes = componentes;
    }
    static async  obtenerComputadores(){
        try {
        const contenidoArchivo = await  leerArchivo("./ListaDeComputadores.txt");
            return JSON.parse(<string>await contenidoArchivo);
        }catch (e){
            console.log(e)
        }

    }
    static async registrarComputador(computador: Computador){

        try{
            let arregloComputadores =  await this.obtenerComputadores();
            arregloComputadores.push(computador);
            await escribirArchivo("ListaDeComputadores.txt", JSON.stringify(arregloComputadores) );
        }catch (e){
            console.log(e)
        }

    }
    static async actualizarComputador(computadorDesactualizado: string, computadorActualizado: Computador){

        try{
            const arregloComputadores =  await this.obtenerComputadores();
            const arregloActualizado = arregloComputadores.map((computador)=>{
               if(computador.nombre===computadorDesactualizado){
                   computador = computadorActualizado;
               }
               return computador
            })
            await escribirArchivo("ListaDeComputadores.txt", JSON.stringify(arregloActualizado) );
        }catch (e){
            console.log(e)
        }

    }
    static async eliminarComputador(computadorPorEliminar: string){

        try{
            const arregloComputadores =  await this.obtenerComputadores();
            const arregloActualizado = arregloComputadores.filter((computador)=>{
                return computador.nombre !== computadorPorEliminar
            })
            await escribirArchivo("ListaDeComputadores.txt", JSON.stringify(arregloActualizado) );
        }catch (e){
            console.log(e)
        }

    }

    public agregarComponente(componente:Componente){
        this.componentes.push(componente);
    }
    public eliminarComponente(componente:Componente){
        this.componentes.slice(this.componentes.indexOf(componente),1);
    }

}