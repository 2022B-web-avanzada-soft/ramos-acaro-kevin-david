// react_hook_form

import {useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";
import {Button} from "@mui/material";
type FormularioEjemplo = {
    nombre: string;
}

export default function () {
    const [nombre,setNombre] = useState("Kevin");

    const {handleSubmit, register} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: "David",
            },
            mode: "all"
        }
    )
    const controladorSubmit = (data)=>{
        console.log(data);
    }

    return (<>
        <Layout title={'Formulario'}>
            <h1>Formulario con react Hook Form</h1>
            <form onSubmit={handleSubmit(controladorSubmit)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text"
                           className="form-control"
                           placeholder="EJ: Kevin"
                           id="nombre"
                           {...register('nombre')}
                           aria-describedby="nombreHelp"/>
                    <div id="nombreHelp" className="form-text">
                        Ingresa tu nombre.
                    </div>
                </div>
                <Button type="submit" variant='outlined'>Submit</Button>
            </form>
        </Layout>

    </>)
}
