import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Componente, ComponenteService} from "../componente/componente.service";
import {useRouter} from "next/router";

type MiComponenteProps = {
    componente?: Componente;
    children?: React.ReactNode; // incluir children como una propiedad opcional
    idComputador? : string;
}

export default function ({componente,children, idComputador}: MiComponenteProps) {
    const router = useRouter();

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            id: componente? componente.id : "",
            nombre: componente? componente.nombre : "",
            marca: componente? componente.marca : "",
            serial: componente? componente.serial : "",
            precio: componente? componente.precio : "",
            disponibilidad: componente? componente.disponibilidad : false,
            computadora: parseInt(idComputador),

        },
        mode: 'all'
    });

    const actualizarOCrear = async (data: Componente) => {
        const id = router.query.id?.toString();
        if(componente){

                await ComponenteService.updateComponente(parseInt(idComputador), data.id, data);
        }else{

                await ComponenteService.createComponente(parseInt(idComputador), data);

        }
        window.location.href = "/computadoras/"+id+"/componentes/";

    }
    useEffect(()=>{
        console.log(idComputador);
    }, [router.query])


    return(<>
        <form  onSubmit={handleSubmit(actualizarOCrear)}>

                {componente&&(
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Ej: 1234"
                               readOnly
                               value={ componente.id}
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
                <label htmlFor="disponibilidad" className="form-label">Disponibilidad</label>
                <br></br>
                <input type="radio"
                       id="disponible"
                       {...register("disponibilidad")}
                       value="true"
                        // valor predeterminado verdadero
                />
                <label htmlFor="disponible">Sí</label>

                <input type="radio"
                       id="no-disponible"
                       {...register("disponibilidad")}
                       value="false"
                       defaultChecked
                />
                <label htmlFor="disponible">No</label>
                <div id="mensajeHelp" className="form-text">
                    Disponible:
                </div>

                {errors.disponibilidad &&
                    <div className="alert alert-warning" role="alert">
                        Tiene errores: {errors.disponibilidad.message}
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




