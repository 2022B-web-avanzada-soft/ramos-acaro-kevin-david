const fs = require('fs'); // file system
                            //Importar modulo fs

//06-ejemplo.txt -> Hola
console.log("PRIMERO");
fs.readFile(
    "./06-ejemplo.txt", //Nombre o path del archivo
    "utf-8", //codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
        if(errorLecturaPrimerArchivo){
            console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo);
        }else{
            console.log("Contenido:", contenidoPrimerArchivo);
        }
        console.log("SEGUNDO");
    }
);

console.log("TERCERO");


fs.readFile(
    "./06-ejemplo.txt", //Nombre o path del archivo
    "utf-8", //codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
        if(errorLecturaPrimerArchivo){
            console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo);
        }else{
            console.log("Contenido:", contenidoPrimerArchivo);
            fs.readFile(
                "./01-variables.js", //Nombre o path del archivo
                "utf-8", //codificacion
                (errorLecturaPrimerArchivo, contenidoSegundoArchivo) => { //callback
                    if(errorLecturaPrimerArchivo){
                        console.log("ERROR LEYENDO ARCHIVO", errorLecturaPrimerArchivo);
                    }else{
                        console.log("Contenido:", contenidoSegundoArchivo);
                        fs.writeFile(
                            "./06-nuevo-archivo.txt",
                            contenidoPrimerArchivo + contenidoSegundoArchivo,
                            (errorEscritura) => {
                                if(errorEscritura){
                                    console.log("ERROR ESCRIBIR ARCHIVO", errorEscritura);

                                }
                            }
                        );
                    }

                }
            );
        }

    }
);




