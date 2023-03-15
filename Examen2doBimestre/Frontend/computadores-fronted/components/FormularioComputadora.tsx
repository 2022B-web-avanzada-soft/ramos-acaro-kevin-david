import {Computadora, ComputerService} from "../computadora/computadora.service";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {number} from "prop-types";
import Link from "next/link";

type MiComponenteProps = {
    computadora?: Computadora;
    children?: React.ReactNode; // incluir children como una propiedad opcional
}

export default function ({computadora,children}: MiComponenteProps) {
    const [computador,setComputador] = useState()
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            id: computadora? computadora.id : "",
            nombre: computadora? computadora.nombre : "",
            marca: computadora? computadora.marca : "",
            serial: computadora? computadora.serial : "",
            precio: computadora? computadora.precio : "",
            fecha_venta: computadora? computadora.fecha_venta : ""

        },
        mode: 'all'
    });

    const actualizarOCrear = async (data: Computadora) => {
        if(computadora){
            await ComputerService.updateComputador(data.id, data);
        }else{
            await ComputerService.createComputer(data);
        }
        window.location.href = "/computadoras";

    }


    return(<>
        <form  onSubmit={handleSubmit(actualizarOCrear)}>
                {computadora&&(
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Ej: 1234"
                               readOnly
                               value={ computadora.id}
                               id = "id"
                               {...register("id")}
                               aria-describedby="id"
                        />
                        {errors.id &&
                            <div className="alert alert-warning" role="alert">
                                Tiene errores: {errors.id.message}
                            </div>
                        }
                    </div>
                )}

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: Kevin"
                       id = "nombre"
                       {...register("nombre",{required: "Nombre requerido"})}
                       aria-describedby="nombreHelp"
                />
                <div id="nombreHelp" className="form-text">
                    Ingresa tu nombre.
                </div>
                {errors.nombre &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.nombre.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: Acer"
                       id = "marca"
                       {...register("marca")}
                       aria-describedby="marca"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa tu Marca
                </div>
                {errors.marca &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.marca.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="serial" className="form-label">Serial</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: 0001"
                       id = "serial"
                       {...register("serial")}
                       aria-describedby="Serial"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa tu Serial
                </div>
                {errors.serial &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.serial.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="text"
                       className="form-control"
                       placeholder="Ej: 600.50"
                       id = "precio"
                       {...register("precio",{
                           pattern: /^[0-9]+(\.[0-9]{1,2})?$/i,
                       })}
                       aria-describedby="Precio"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa el Precio
                </div>
                {errors.precio &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores el precio: {errors.precio.message}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="fechaVenta" className="form-label">Fecha Venta</label>
                <input type="datetime-local"
                       className="form-control"
                       placeholder="Ej: fechaVenta"
                       id = "fechaVenta"
                       {...register("fecha_venta")}
                       aria-describedby="mensajeHelp"
                />
                <div id="mensajeHelp" className="form-text">
                    Ingresa la Fecha
                </div>
                {errors.fecha_venta &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.fecha_venta.message}
                    </div>
                }
            </div>

            <button type="submit" className="btn btn-success" disabled={!isValid}>
                Actualizar
            </button>

            <button type="reset"
                    className="btn btn-danger">
                Reset
            </button>
        </form>
    </>)
}




