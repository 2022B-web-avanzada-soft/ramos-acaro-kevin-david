import {useContext} from "react";
import {ContenedorContext} from "./EContenedorContext";
import EComponenteB from "./EComponenteB";


export default function (){
    const contenedorContexto = useContext(ContenedorContext)
    return(
        <>
            Componente A
            <p>{contenedorContexto.nombreUsuario}</p>
            <button onClick={event => {
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