const {Componente} = require("./Componente.js");
const {Computador} = require("./Computador.js")
const inquirer = require("inquirer");


async function menu() {
    let estado = [];
    let computadoresTipados = [];
    let componentesTipados = [];
    console.log("Bienvenido ")
    do {
        try {
            let computadores = await Computador.obtenerComputadores();
            computadoresTipados = computadores.map(
                function (valorActual, indiceActual, arregloCompleto) {

                    const computador = new Computador(valorActual.nombre, valorActual.marca,
                        valorActual.serial,
                        parseFloat(valorActual.precio),
                        valorActual.componentes.map((componente)=>{
                            componente.precio = parseFloat(componente.precio)
                            componente.disponibilidad;
                            return componente;
                        })

                    );
                    return computador;
                }
            );


            let componentes = await Componente.obtenerComponentes();
            componentesTipados = componentes.map(
                function (valorActual, indiceActual, arregloCompleto) {
                    return new Componente(valorActual.nombre, valorActual.marca, valorActual.serial, parseFloat(valorActual.precio), valorActual.disponibilidad);
                }
            );
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
                                            (valorActual, indiceActual, arregloCompleto) => {
                                                return valorActual.nombre

                                            }
                                        ),

                                    }

                                ]);
                            let computador = new Computador(computadora.nombre, computadora.marca, computadora.serial, parseFloat(computadora.precio), []);
                            for (const valorActual of computadora.opcionComponentes) {
                                let componente = await Componente.obtenerComponente(valorActual);

                                computador.agregarComponente(componente);
                            }
                            await Computador.registrarComputador(computador);
                        } catch (e) {
                            console.log(e);
                        }
                        break;
                    case "Ver":

                        try {
                            const computadora = await inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "opcionComputadora",
                                        message: "Computadores disponibles:",
                                        choices: computadoresTipados.map((valorActual) => {
                                            return valorActual.nombre;
                                        }),

                                    }

                                ]);

                            console.log(computadoresTipados.find((valorActual) => {
                                return valorActual.nombre === computadora.opcionComputadora;
                            }));

                        } catch (e) {
                            console.log(e);
                        }

                        break;
                    case "Actualizar":
                        try {
                            const computadoraAnterior = await inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "opcionComputadora",
                                        message: "Computadores: ",
                                        choices: computadoresTipados.map((valorActual) => {
                                            return valorActual.nombre;
                                        }),

                                    }

                                ]);
                            const computadorDatos = computadoresTipados.find((value)=>{
                                return value.nombre === computadoraAnterior.opcionComputadora;
                            })
                            try {
                                const computadora = await inquirer
                                    .prompt([
                                        {
                                            type: "input",
                                            name: "nombre",
                                            message: "Ingresa el nuevo nombre del computador: ",
                                            default: computadorDatos.nombre
                                        },
                                        {
                                            type: "input",
                                            name: "marca",
                                            message: "Ingresa la  nueva marca del computador: ",
                                            default: computadorDatos.marca
                                        },
                                        {
                                            type: "input",
                                            name: "serial",
                                            message: "Ingresa la nueva serial: ",
                                            default: computadorDatos.serial
                                        },
                                        {
                                            type: "input",
                                            name: "precio",
                                            message: "Ingresa el nuevo precio de venta: ",
                                            default: computadorDatos.precio
                                        },
                                        {
                                            type: "checkbox",
                                            name: "opcionComponentes",
                                            message: "Desea componentes:",
                                            choices: componentesTipados.map(
                                                (valorActual, indiceActual, arregloCompleto) => {
                                                    return valorActual.nombre

                                                }
                                            ),

                                        }

                                    ]);
                                let computador = new Computador(computadora.nombre, computadora.marca, computadora.serial, parseFloat(computadora.precio), []);
                                for (const valorActual of computadora.opcionComponentes) {
                                    let componente = await Componente.obtenerComponente(valorActual);

                                    computador.agregarComponente(componente);
                                }
                                console.log(computadoraAnterior.opcionComputadora);
                                console.log(computador.nombre);
                                await Computador.actualizarComputador(computadoraAnterior.opcionComputadora,computador);
                            } catch (e) {
                                console.log(e);
                            }

                        } catch (e) {
                            console.log(e);
                        }
                        break;
                    case "Eliminar":
                            try{
                                const computador = await inquirer
                                    .prompt([
                                        {
                                            type: "list",
                                            name: "opcionComputadora",
                                            message: "Computadores: ",
                                            choices: computadoresTipados.map((valorActual) => {
                                                return valorActual.nombre;
                                            }),

                                        }

                                    ]);
                                await Computador.eliminarComputador(computador.opcionComputadora);
                            }catch (e){
                                console.log(e);
                            }
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
                        try {
                            const componente = await inquirer
                                .prompt([
                                    {
                                        type: "input",
                                        name: "nombre",
                                        message: "Ingresa el nombre del componente"
                                    },
                                    {
                                        type: "input",
                                        name: "marca",
                                        message: "Ingresa la marca del componente"
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
                                        type: "confirm",
                                        name: "disponibilidad",
                                        message: "Sigue disponible: "}


                                ]);
                            let componentePorRegristrar = new Componente(componente.nombre, componente.marca, componente.serial, parseFloat(componente.precio), componente.disponibilidad);

                            await Componente.registrarComponente(componentePorRegristrar);
                        } catch (e) {
                            console.log(e);
                        }
                        break;
                    case "Ver":

                        try {
                            const componente = await inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "opcionComponente",
                                        message: "Componentes disponibles:",
                                        choices: componentesTipados.map((valorActual) => {
                                            return valorActual.nombre;
                                        }),

                                    }

                                ]);

                            console.log(componentesTipados.find((valorActual) => {
                                return valorActual.nombre === componente.opcionComponente;
                            }));

                        } catch (e) {
                            console.log(e);
                        }

                        break;
                    case "Actualizar":
                        try {
                            const componenteAnterior = await inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "opcionComponentes",
                                        message: "Componentes: ",
                                        choices: componentesTipados.map((valorActual) => {
                                            return valorActual.nombre;
                                        }),

                                    }

                                ]);
                            const componentesDatos = componentesTipados.find((value)=>{
                                return value.nombre === componenteAnterior.opcionComponentes;
                            })
                            try {
                                const componentePorActualizar = await inquirer
                                    .prompt([
                                        {
                                            type: "input",
                                            name: "nombre",
                                            message: "Ingresa el nuevo nombre del componente: ",
                                            default: componentesDatos.nombre

                                        },
                                        {
                                            type: "input",
                                            name: "marca",
                                            message: "Ingresa la  nueva marca del componente: ",
                                            default: componentesDatos.marca

                                        },
                                        {
                                            type: "input",
                                            name: "serial",
                                            message: "Ingresa la nueva serial: ",
                                            default: componentesDatos.serial
                                        },
                                        {
                                            type: "input",
                                            name: "precio",
                                            message: "Ingresa el nuevo precio de venta: ",
                                            default: componentesDatos.precio
                                        },
                                        {
                                            type: "confirm",
                                            name: "disponibilidad",
                                            message: "Ingrese si esta disponible: ",
                                            default: componentesDatos.disponibilidad
                                        }

                                    ]);
                                let componente = new Componente(componentePorActualizar.nombre, componentePorActualizar.marca, componentePorActualizar.serial, parseFloat(componentePorActualizar.precio), componentePorActualizar.disponibilidad);
                                await Componente.actualizarComponente(componenteAnterior.opcionComponentes,componente);
                            } catch (e) {
                                console.log(e);
                            }

                        } catch (e) {
                            console.log(e);
                        }
                        break;
                    case "Eliminar":
                        try{
                            const componente = await inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "opcionComponente",
                                        message: "Componentes: ",
                                        choices: componentesTipados.map((valorActual) => {
                                            return valorActual.nombre;
                                        }),

                                    }

                                ]);
                            await Componente.eliminarComponente(componente.opcionComponente);
                        }catch (e){
                            console.log(e);
                        }
                        break;
                    case "Volver":
                        estado.opcion = false;
                        break;

                }
                break;
        }
    } while (estado.opcion !== "Salir")


    console.log("Adios :)")

}

menu();
