import React, {Dispatch, SetStateAction} from 'react'
import Link from 'next/link'

import { User } from '../interfaces'
import {Computadora, ComputerService} from "../computadora/computadora.service";
import handler from "../pages/api/users";
import computadoras from "../pages/computadoras";
import {Componente, ComponenteService} from "../componente/componente.service";

type Props = {
  data: Computadora | Componente
    setComputadores?
    setComponentes?
}
const borrarComputador = (id: number) => {
    const respuesta =  ComputerService.deleteComputador(id);
    return respuesta
}
const borrarComponente = (idComputador: number, idComponente) => {
    const respuesta =  ComponenteService.deleteComponente(idComputador,idComponente);
    return respuesta
}
const ListItem = ({ data, setComputadores, setComponentes}: Props) => {
    return(<>
        {setComputadores?(
            <div className="row" style={{textAlign:"center"}}>
                <div className="col">{data.id}</div>
                <div className="col">{data.nombre}</div>
                <div className="col">{data.marca}</div>
                <div className="col">{data.serial}</div>
                <div className="col">{data.precio}</div>
                {("fecha_venta" in data)&&(
                    <div className="col">{data.fecha_venta}</div>

                )}

                <div className="col">
                    <button className="btn btn-success">
                        <Link href="/computadoras/[id]/componentes" as={`/computadoras/${data.id}/componentes`} style={{textDecoration:"none", color:"white"}}> Ver </Link>
                    </button>
                </div>
                <div className="col">
                    <button className="btn btn-success">
                        <Link href="/computadoras/[id]" as={`/computadoras/${data.id}`} style={{textDecoration:"none", color:"white"}}> Editar </Link>
                    </button>
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={(e)=>{
                        borrarComputador(data.id);
                        setComputadores((computadorasAnteriores) => {
                            // Filtrar la lista de computadoras y eliminar la que tiene el id que quieres eliminar
                            const nuevasComputadoras = computadorasAnteriores.filter(
                                (computadora) => computadora.id !== data.id
                            );
                            // Devolver la nueva versión de la lista de computadoras
                            return nuevasComputadoras;
                        });

                    }}>Eliminar  </button>
                </div>



            </div>
        ):(

            <div className="row" style={{textAlign:"center"}}>
                <div className="col">{data.id}</div>
                <div className="col">{data.nombre}</div>
                <div className="col">{data.marca}</div>
                <div className="col">{data.serial}</div>
                <div className="col">{data.precio}</div>
                {("disponibilidad" in data)&&(
                    <div className="col">{data.disponibilidad? "SI": "NO"} </div>
                )}
                {("computadora" in data)&&(
                    <div className="col">{data.computadora.toString()}</div>
                )}

                <div className="col">
                    {("computadora" in data)&&(
                        <button className="btn btn-success">
                            <Link href="/computadoras/[id]/componentes/[idComponente]" as={`/computadoras/${data.computadora}/componentes/${data.id}`} style={{textDecoration:"none", color:"white"}}> Editar </Link>
                        </button>
                    )}
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={(e)=>{
                        if("computadora" in data){
                            borrarComponente(data.computadora, data.id);
                        }
                        setComponentes((componentesAnteriores) => {
                            // Filtrar la lista de computadoras y eliminar la que tiene el id que quieres eliminar
                            const nuevosComponentes = componentesAnteriores.filter(
                                (componente) => componente.id !== data.id
                            );
                            // Devolver la nueva versión de la lista de computadoras
                            return nuevosComponentes;
                        });

                    }}>Eliminar  </button>
                </div>



            </div>
        )}


    </>)
}






export default ListItem
