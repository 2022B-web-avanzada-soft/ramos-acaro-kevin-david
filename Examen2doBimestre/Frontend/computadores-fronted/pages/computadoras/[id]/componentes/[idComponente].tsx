import { GetStaticProps, GetStaticPaths, GetStaticPathsContext } from 'next'
import Layout from '../../../../components/Layout'
import ListDetail from '../../../../components/ListDetail'
import {Computadora, ComputerService} from "../../../../computadora/computadora.service";
import {Componente, ComponenteService} from "../../../../componente/componente.service";
import {useRouter} from "next/router";
import {useState} from "react";

type Props = {
    item?: Computadora|Componente;
    idComputador: string;
    errors?: string;
}


const StaticPropsDetail = ({ item, errors, idComputador }: Props) => {

    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
        <Layout
            title={`${
                item ? item.nombre : 'User Detail'
            } | Next.js + TypeScript Example`}
        >
            {item && <ListDetail item={item} idComputadora={idComputador}/>}
        </Layout>
    )
}

export default StaticPropsDetail
export const getStaticPaths: GetStaticPaths = async () => {
    const componenteService = new ComponenteService()
    const componentes = await componenteService.getComponentesTodos()
    const paths = componentes.map((componente) => ({
        params: { idComponente: componente.id.toString(), id: componente.computadora.toString() },
    }))

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const idComputador = params?.id.toString()
    const idComponente = params?.idComponente.toString()

    const componenteService = new ComponenteService()
    const listaComponentes = await componenteService.getComponentes(parseInt(idComputador))
    const item = listaComponentes.find((componente) => componente.id === Number(idComponente))

    if (!item) {
        return { notFound: true }
    }

    return { props: { item, idComputador } }
}