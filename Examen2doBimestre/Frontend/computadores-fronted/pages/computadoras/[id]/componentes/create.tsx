
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import {Computadora, ComputerService} from "../../../../computadora/computadora.service";
import {useEffect, useState} from "react";
import FormularioComponente from "../../../../components/FormularioComponente";
import {Componente, ComponenteService} from "../../../../componente/componente.service";
import {useRouter} from "next/router";
import id from "../../[id]";
import {GetStaticPaths, GetStaticProps} from "next";

type Props = {
    item?: Computadora|Componente;
    idComputador: string;
    errors?: string;
}

export default  function ({ item, errors, idComputador }: Props) {
    const router = useRouter();
    useEffect(()=>{

    },[router.query])
    return (
        <Layout title="Crear Componente">
            <h1>Guardar nuevo Componente</h1>
            <FormularioComponente idComputador={router.query.id?.toString()}></FormularioComponente>
        </Layout>
    );
};
