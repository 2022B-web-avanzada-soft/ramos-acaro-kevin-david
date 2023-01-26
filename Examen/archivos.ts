import * as fs from "fs";
export function leerArchivo(path){
    return new Promise(
        (res,rej)=>{
            fs.readFile(
                path, //Nombre o path del archivo
                "utf-8", //codificacion
                (errorLectura, contenido) => { //callback
                    if(errorLectura){
                        rej( "ERROR LEYENDO ARCHIVO")
                    }else{
                        res(contenido)
                    }

                }
            )
        }
    );
}

export function escribirArchivo(path, contenidoArchivo){
    return new Promise(
        (res,rej)=>{
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {
                    if(errorEscritura){
                        rej("ERROR ESCRIBIR ARCHIVO")

                    }else {
                        res(contenidoArchivo)
                    }
                }
            );
        }
    );
}