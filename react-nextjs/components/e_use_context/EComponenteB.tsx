import {useContext} from "react";
import {ContenedorContext} from "./EContenedorContext";
import EComponenteC from "./EComponenteC";

export default function (){
    const contenedorContexto = useContext(ContenedorContext)
    return(
        <>
            Componente B
            <p>{contenedorContexto.nombreUsuario}</p>
            <button  onClick={event => {
                event.preventDefault();
                contenedorContexto.setNombreUsuario("Compb");

            }}>
                Actualizar
            </button>
            <EComponenteC></EComponenteC>
        </>
    )
}