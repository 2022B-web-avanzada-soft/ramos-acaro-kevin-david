//01-funciones.js

function soloNumeros(a,b,c){
    return a - b + c; // valor a devolver
}

//JS permite el uso de funciones sin validaciones
// soloNumeros('v', true, [1,2,3]);
// soloNumeros((a)=>a,(a)=>a,(a)=>a);

function soloLetras(a,b,c){ //sin return devolvemos: undefined
    console.log(a,b,c)
}

//funciones nombreadas - named functions
function funcionNombrada(){

}

// Funciones anonimas - Anonymous Functions
const functionSinNombre1 = function (){};
var functionSinNombre2 = function () {};
let  functionSinNombre3 = function () {};
[].forEach(function () {});
functionSinNombre1();
functionSinNombre2();
functionSinNombre3();

//Funciones anonimas - Fat Arrow functions
const functionFatArrow1 = () =>{};
let  functionFatArrow2 = () =>{};
var  functionFatArrow3 = () =>{};

[].forEach(() =>{})
functionFatArrow1();
functionSinNombre2();
functionSinNombre3();
const functionFatArrow4 = () => {};
const functionFatArrow5 = (parametro) => {
    return parametro +1;
}
const  functionFatArrow6 = (parametro) => parametro +1; // Una sola linea , se omite llaves y return
const  functionFatArrow7 = parametro => parametro +1; // Una sola linea , si se tiene 1 parametro
                                                        //se omite los parentesis

const functionArrow8 = (numUno, numDos, numTres) => numUno + numDos + numTres;

// ... => parametros infinitos => llegan en un arreglo de parametros
// solo podeoms tener un parametro infinito por funcion
function sumarNumeros(...todosNumeros){ //Parametros infinitos [1,2,3]
    let total = 0;
    todosNumeros.forEach(
        (valorActual) =>{
            console.log(valorActual)
            total = total + valorActual

        }
    );
    return total;
    //return todosNumeros.reduce((a, v)=> a+v, 0);
}

console.log(sumarNumeros(1,2,34,5,6,7,8))