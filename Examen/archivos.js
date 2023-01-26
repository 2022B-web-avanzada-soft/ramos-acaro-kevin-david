"use strict";
exports.__esModule = true;
exports.escribirArchivo = exports.leerArchivo = void 0;
var fs = require("fs");
function leerArchivo(path) {
    return new Promise(function (res, rej) {
        fs.readFile(path, //Nombre o path del archivo
        "utf-8", //codificacion
        function (errorLectura, contenido) {
            if (errorLectura) {
                rej("ERROR LEYENDO ARCHIVO");
            }
            else {
                res(contenido);
            }
        });
    });
}
exports.leerArchivo = leerArchivo;
function escribirArchivo(path, contenidoArchivo) {
    return new Promise(function (res, rej) {
        fs.writeFile(path, contenidoArchivo, function (errorEscritura) {
            if (errorEscritura) {
                rej("ERROR ESCRIBIR ARCHIVO");
            }
            else {
                res(contenidoArchivo);
            }
        });
    });
}
exports.escribirArchivo = escribirArchivo;
