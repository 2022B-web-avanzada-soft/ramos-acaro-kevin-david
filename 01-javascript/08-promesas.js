//08-promesas.js
const fs = require("fs");
/*
*Una funcion que acepte como parametro  una variable
* del path del archivo y otra variable con el "contenidoArchivo"
*  Utilizar el modulo fs para leer el archivo en ese "path" y anadir el
*  "contenidoArchivo" a ese archivo.
 */

function leerArchivo(path){
    return new Promise(
        (res,rej)=>{
            fs.readFile(
                path, //Nombre o path del archivo
                "utf-8", //codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
                    if(errorLecturaPrimerArchivo){
                       rej( console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo))
                    }else{
                        res(contenidoPrimerArchivo)
                    }
                    console.log("SEGUNDO");
                }
            )
        }
    );
}

function escribirArchivo(path){
    return new Promise();
}

function ejercicio08(path,contenidoArchivo){
    return leerArchivo(path)
        .then((algo)=>{
            return escribirArchivo(path, algo + contenidoArchivo)
        })
}

ejercicio08("06-ejemplo.txt", " :) lo logramos")
.then()
.catch()