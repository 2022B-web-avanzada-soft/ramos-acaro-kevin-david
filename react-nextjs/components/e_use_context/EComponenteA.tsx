import {useContext, useEffect} from "react";
<<<<<<< HEAD
import {ContenedorContext} from "./EContenedorContext";
=======
import {ContenedorContext} from "./ContenedorContext";
>>>>>>> main
import EComponenteB from "./EComponenteB";

export default function (){
    const contenedorContexto = useContext(ContenedorContext);
<<<<<<< HEAD
    useEffect(
        ()=>{
            console.log("Cambio en algun lado el nombre",
                contenedorContexto.nombreUsuario);
        },
        [contenedorContexto.nombreUsuario]
    )
=======

    useEffect(
        ()=>{
            console.log('Cambio en algun lado el nombre');
        },
        [contenedorContexto.nombreUsuario]
    )

>>>>>>> main
    return(
        <>
            Componente A
            <p>{contenedorContexto.nombreUsuario}</p>
<<<<<<< HEAD
            <button className="bg-blue-500 m-2" onClick={event => {
                event.preventDefault();
                contenedorContexto.setNombreUsuario("CompA");

=======
            <button className={"bg-blue-500 m-2"} onClick={ e => {
                e.preventDefault();
                contenedorContexto.setNombreUsuario('CompA')
>>>>>>> main
            }}>
                Actualizar
            </button>
            <EComponenteB></EComponenteB>
        </>
    )
}