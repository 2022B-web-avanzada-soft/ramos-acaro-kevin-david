import * as React from 'react'
import ListItem from './ListItem'
import {Computadora} from "../computadora/computadora.service";
import {Componente} from "../componente/componente.service";

type Props = {
  items: Componente[] | Computadora[]
    setComputadores?
    setComponentes?
}

const List = ({ items,setComputadores,setComponentes }: Props) => {
  return (
      <ul className="list-group">
          <li className="list-group-item-header">
              {setComputadores&&(
                  <div className="row" style={{textAlign:"center"}}>
                      <div className="col">ID</div>
                      <div className="col">Nombre</div>
                      <div className="col">Marca</div>
                      <div className="col">Serial</div>
                      <div className="col">Precio</div>
                      <div className="col">Fecha</div>
                      <div className="col">Componentes</div>
                      <div className="col">Actualizar</div>
                      <div className="col">Eliminar</div>
                  </div>
              )
              }
              {setComponentes&&(
                  <div className="row" style={{textAlign:"center"}}>
                      <div className="col">ID</div>
                      <div className="col">Nombre</div>
                      <div className="col">Marca</div>
                      <div className="col">Serial</div>
                      <div className="col">Precio</div>
                      <div className="col">Disponibilidad</div>
                      <div className="col" >ID Computador</div>
                      <div className="col">Actualizar</div>
                      <div className="col">Eliminar</div>
                  </div>
              )
              }
          </li>

        {items.map((item) => (

            <li className="list-group-item" key={item.id}>
                {setComputadores? (
                    <ListItem data={item}   setComputadores={setComputadores} />
                ):(
                    <ListItem data={item}   setComponentes={setComponentes} />
                )}

            </li>
        ))}
      </ul>
  )
}



export default List
