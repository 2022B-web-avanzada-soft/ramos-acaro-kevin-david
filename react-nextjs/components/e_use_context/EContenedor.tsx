import {ContenedorContext,ContenedorContextObject} from "./EContenedorContext";
import {useState} from "react";
import EComponenteA from "./EComponenteA";

export default function (){
    const [nombreUsuario,setNombreUsuario] = useState("Kevin");
    const objetoContenedorContext:ContenedorContextObject = {nombreUsuario,setNombreUsuario};

    return(
        <>
        <ContenedorContext.Provider value={objetoContenedorContext}>
        <EComponenteA></EComponenteA>
        </ContenedorContext.Provider>
        </>
    )

}