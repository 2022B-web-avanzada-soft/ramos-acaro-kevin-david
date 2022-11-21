//05-destructuracion.js
//destructuracion de OBJETOS

const adrian = {
    nombre : "Adrian",
};

const carolina = {
    nombre : "Carolina",
    apellido : "Eguez",
};

const adrianCarolina = { //crea una nueva referencia (VALOR)
    ...carolina, // 1 el orden es importante, para propiedades que se repiten
    ...adrian,
};

console.log('adrianCarolina',adrianCarolina)

//destructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];

const superArreglo = [
    ...arregloUno,
    ...arregloDos,
];
console.log('superArreglo',superArreglo);