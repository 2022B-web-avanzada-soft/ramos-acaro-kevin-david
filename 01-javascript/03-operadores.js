// 03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARAMETROS
//FIND
//enviamos una expresion que cumpla esa condicion
//devuelve el primero que cumpla esa condicion

const respuestaFind = arreglo.find(
    function (valorActual,indiceActual,arregloCompleto){
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Cristian"; //EXPRESION ===
    }
)
console.log('respuestaFind', respuestaFind); //Cristian // Si no encuentra devuelve undefined

//FINDINDEX
//enviamos una expresion -> TRUTY FALSY
//devuelve el indice del primero que cumpla esa condicion
const respuestaIndex = arreglo.findIndex(
    function (valorActual,indiceActual, arregloCompleto){
        return valorActual.nombre === "Cristian";
    }
)
console.log('respuestaIndex',respuestaIndex)

//FOREACH
// itera el arreglo
const respuestaForEach = arreglo.forEach(
    function (valorActual,indiceActual,arregloCompleto){
        console.log('valorActual', valorActual)
    }
);
console.log("respuestaForEach",respuestaForEach); //UNDEFINED

//MAP (modificar o mutar el arreglo y devuelve un nuevo arreglo
//enviamos los datos del nuevo arreglo
// devuelve el nuevo arreglo

const respuestaMap = arreglo.map(
    (valorActual,indiceActual,arregloCompleto) => {
        const notaActual = valorActual.nota + 1;
        const nuevoElemento = {
            id : valorActual.id,
            nombre : valorActual.nombre,
            nota : notaActual,
            estaAprobado : notaActual > 14,
            casado : false,
        };
        return nuevoElemento
    }
);
console.log('respuestaMap', respuestaMap)
console.log('arreglo',arreglo)

// FILTER (filtrar el arreglo)
// enviamos EXPRESION TRUTY FALSY
// devuelve los elementos que cumplan esa condicion

const respuestaFilter = arreglo.filter(
    (valorActual,indiceActual,arregloCompleto) => {
        return valorActual.nota >=14;
    }
);
console.log("respuestaFilter",respuestaFilter);
console.log("arreglo",arreglo);

//SOME -> expresion
//DEVUELVE BOOLEANO
// Hay alguna nota menor a nueve? SI NO
// OR

const respuestaSome = arreglo.some(
    function (valorActual,indiceActual, arregloCompleto){
        return !valorActual < 9 ;
    }
);
console.log("respuestaSome",respuestaSome)

//EVERY -> expresion
//DEVUELVE BOOLEANO
//TODAS las notas son mayores a 14? SI NO
// AND

const respuestaEvery = arreglo.every(
    function (valorActual,indiceActual, arregloCompleto){
        return valorActual > 14 ;
    }
);
console.log("respuestaEvery",respuestaEvery)

//REDUCE  izq -> der
//REDUCE RIGTH der ->  izq
// [1,2,3,5,6,5,4,3,1]
// 0 -> Variable inicial
// OPERACION
// 0 + 1
// 1 + 2

const respuestaReduce = arreglo.reduce(
    function (valorAcumulado, valorActual,indice){
        return (valorAcumulado + valorActual.nota);
    },
    0 // ACUMULADOR
);
console.log(respuestaReduce); //146
console.log(respuestaReduce/arreglo.length);

arreglo.filter((a) => a.nota < 14)
        .map((e) => e.nota + 1)
        .some((e) => e > 14);