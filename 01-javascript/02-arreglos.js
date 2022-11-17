//02-arreglos.js
let arreglo = [6,7,8,9,10];
//for of
for (let numero of arreglo){ //valores
    console.log("numero", numero)
}

for (let indice in arreglo){ //indices
    console.log("indice", indice)
}

arreglo.push(11); //Anadir al final un elemento
arreglo.pop(); //Eliminar al final un elemento
arreglo.unshift(5);//anadir al principio del arreglo
console.log(arreglo);
//splice (indice, numero de elementos a eliminar, ... items a agregar)
//EJ arreglo.splice(0,3,1,2,3,4,5,6);
arreglo.splice(0,0,4)
console.log(arreglo)

//metodo indexOf
const indiceNueve = arreglo.indexOf(9); //Encuentra el primer indice del valor encontrado
arreglo.splice(indiceNueve,2)
console.log(arreglo);