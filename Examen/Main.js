const {Componente} = require("./Componente.js");
const {Computador} = require("./Computador.js")
const inquirer = require("inquirer");


async function main() {
    var estado = [];
    console.log("Bienvenido ")
    do {
        let computadores = await Computador.obtenerComputadores();
        let computadoresTipados = [];
        computadores.forEach(
            function (valorActual, indiceActual, arregloCompleto) {
                let computador = new Computador(valorActual.nombre,valorActual.marca,
                    valorActual.serial,
                    parseFloat(valorActual.precio),
                    valorActual.componentes);
                computador.fechaVenta = valorActual.fechaVenta;
                computadoresTipados.push(computador);
            }
        );

        let componentes = JSON.parse(await Componente.obtenerComponentes()) ;
        let componentesTipados = [];

        componentes.forEach(
            function (valorActual, indiceActual, arregloCompleto) {
                let componente = new Componente(valorActual.nombre,valorActual.marca,valorActual.serial,parseFloat(valorActual.precio),valorActual.disponibilidad.toLowerCase() === "true");
                componentesTipados.push(componente);
            }
        );
        try {
            estado = await inquirer
                .prompt([
                    {
                        type: "list",
                        name: "opcion",
                        message: "Escoja entre computador o componente:",
                        choices: ["Computador", "Componente", "Salir"]
                    }
                ])
        } catch (e) {
            console.log(e);
        }
        console.log(estado.opcion);
        switch (estado.opcion) {
            case "Computador":
                try {
                    opcionComputador = await inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "opcion",
                                message: "Escoja entre las siguientes opciones:",
                                choices: ["Crear", "Ver", "Actualizar", "Eliminar", "Volver"]
                            }
                        ])
                } catch (e) {
                    console.log(e);
                }

                switch (opcionComputador.opcion) {
                    case "Crear":
                        try {
                            const computadora = await inquirer
                                .prompt([
                                    {
                                        type: "input",
                                        name: "nombre",
                                        message: "Ingresa el nombre del computador"
                                    },
                                    {
                                        type: "input",
                                        name: "marca",
                                        message: "Ingresa la marca del computador"
                                    },
                                    {
                                        type: "input",
                                        name: "serial",
                                        message: "Ingresa la serial"
                                    },
                                    {
                                        type: "input",
                                        name: "precio",
                                        message: "Ingresa el precio de venta"
                                    },
                                    {
                                        type: "checkbox",
                                        name: "opcionComponentes",
                                        message: "Desea agregar componentes:",
                                        choices: componentesTipados.map(
                                            (valorActual,indiceActual,arregloCompleto) => {
                                                return valorActual.nombre

                                            }
                                        ),

                                    }

                                ]);
                            let computador = new Computador(computadora.nombre,computadora.marca,computadora.serial,parseFloat(computadora.precio),[]);
                            for (const valorActual of computadora.opcionComponentes) {
                                let componente = await Componente.obtenerComponente(valorActual);

                               computador.agregarComponente(componente );
                            }
                            Computador.registrarComputador(computador);
                        } catch (e) {
                            console.log(e);
                        }
                        break;
                    case "Ver":
                        console.log(computadoresTipados);
                        break;
                    case "Actualizar":
                        break;
                    case "Eliminar":

                        break;
                    case "Volver":
                        estado.opcion = false;
                        break;


                }
                break;
            case "Componente":
                try {
                    opcionComputador = await inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "opcion",
                                message: "Escoja entre las siguientes opciones:",
                                choices: ["Crear", "Ver", "Actualizar", "Eliminar", "Volver"]
                            }
                        ])
                } catch (e) {
                    console.log(e);
                }
                switch (opcionComputador.opcion) {
                    case "Crear":
                        break;
                    case "Ver":
                        break;
                    case "Actualizar":
                        break;
                    case "Eliminar":
                        break;

                }
                break;
        }
    } while (estado.opcion !== "Salir")


    console.log("Adios :)")

}

main();
