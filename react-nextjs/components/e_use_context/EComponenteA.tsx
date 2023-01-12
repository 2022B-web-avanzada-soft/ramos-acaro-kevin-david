import {useContext, useEffect} from "react";
import {ContenedorContext} from "./EContenedorContext";
import EComponenteB from "./EComponenteB";


export default function (){
    const contenedorContexto = useContext(ContenedorContext);
    useEffect(
        ()=>{
            console.log("Cambio en algun lado el nombre",
                contenedorContexto.nombreUsuario);
        },
        [contenedorContexto.nombreUsuario]
    )
    return(
        <>
            Componente A
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className="bg-blue-500 m-2" onClick={event => {
                event.preventDefault();
                contenedorContexto.setNombreUsuario("CompA");

            }}>
                Actualizar
                <p></p>
            </button>
            <EComponenteB></EComponenteB>
        </>
    )
}