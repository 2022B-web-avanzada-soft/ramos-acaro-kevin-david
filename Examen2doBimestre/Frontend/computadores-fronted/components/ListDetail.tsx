import * as React from 'react'

import { User } from '../interfaces'
import {Computadora} from "../computadora/computadora.service";
import FormularioComputadora from "./FormularioComputadora";
import {Componente} from "../componente/componente.service";
import FormularioComponente from "./FormularioComponente";


type ListDetailProps = {
  item: Computadora |Componente
    idComputadora? : string
}

const ListDetail = ({ item : artefacto, idComputadora }: ListDetailProps) => (
  <div className="col-md-6 mx-auto">
    <h1>Computadora:  {artefacto.nombre}</h1>
      {("disponibilidad" in artefacto)?(
          <FormularioComponente componente={artefacto} idComputador={idComputadora}></FormularioComponente>

      ) :(
          <FormularioComputadora  computadora={artefacto} >
          </FormularioComputadora>
          )}


  </div>
)

export default ListDetail
