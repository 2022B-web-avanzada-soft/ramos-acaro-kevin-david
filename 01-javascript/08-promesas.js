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

function escribirArchivo(path, contenidoArchivo){
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

function ejercicio08(path,contenidoArchivo){
    leerArchivo(path)
        .then((contenido)=>{
            return escribirArchivo(path, contenido + contenidoArchivo
            )
        })
        .then()
        .catch()
}

/*ejercicio08("06-ejemplo.txt", " :) lo logramos")*/



/*function ejercicio(path){
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

                }
            )
        }
    );

}

function ejercicio2(path){
    return leerArchivo(path)
}

ejercicio("06-ejemplo.txt")
    .then(
        (algo)=>{
            return escribirArchivo("06-ejemplo.txt", algo+ " uwu")
        })
    .catch()

/!*ejercicio2("06-ejemplo.txt")
.then(
    (algo)=>{
        return escribirArchivo("06-ejemplo.txt", algo+ " end")
    })
    .catch()*!/*/

//ASYNC AWAIT

//REGLAS:
// 1) Estar dentro de una funcion (nombrada o anonima)
// 2) Agregar la palabra "async" antes de la declaracion dela funcion
// 3) Agregar la palabra "await" antes de la declaracion de una promesa


async function asyncAwaitUno(path, nuevoContenido){
    //Si sabemos que en la promesa puede haber un reject, usamos try y catch
    try{
        const respuestaContenidoArchivoOriginal = await leerArchivo(path);
        await escribirArchivo(path,respuestaContenidoArchivoOriginal + nuevoContenido );
    }catch (error){
        console.log(error);
    }

}

asyncAwaitUno("06-ejemplo.txt", " :) lo logramos");
const asyncAwaitTres = async function (){

}

const asyncAwaitDos = async ()=>{

}