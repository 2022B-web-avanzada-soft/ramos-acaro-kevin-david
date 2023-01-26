<<<<<<< HEAD
import {ContenedorContext,ContenedorContextObject} from "./EContenedorContext";
=======
import {ContenedorContext, ContenedorContextObject} from "./ContenedorContext";
>>>>>>> main
import {useEffect, useState} from "react";
import EComponenteA from "./EComponenteA";

export default function (){
<<<<<<< HEAD
    const [nombreUsuario,setNombreUsuario] = useState("Kevin");
    const objetoContenedorContext:ContenedorContextObject = {nombreUsuario,setNombreUsuario};

    useEffect(
        ()=>{
            console.log("Cambio en contenedor," +
                objetoContenedorContext.nombreUsuario);
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return(
=======
    const [nombreUsuario, setNombreUsuario] = useState("Marco")
    const objetoContenedorContext:ContenedorContextObject = {nombreUsuario, setNombreUsuario};
    useEffect(
        ()=>{
            console.log('Cambio en Contenedor', objetoContenedorContext.nombreUsuario);
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return (
>>>>>>> main
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EComponenteA></EComponenteA>
            </ContenedorContext.Provider>
        </>
    )
}