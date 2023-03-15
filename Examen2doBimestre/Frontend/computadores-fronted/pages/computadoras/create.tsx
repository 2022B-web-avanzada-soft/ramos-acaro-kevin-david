
import Link from 'next/link'
import Layout from '../../components/Layout'
import {Computadora, ComputerService} from "../../computadora/computadora.service";
import {useEffect, useState} from "react";
import FormularioComputadora from "../../components/FormularioComputadora";

export default  function () {

    return (
        <Layout title="Users List | Next.js + TypeScript Example">
            <h1>Agregar nuevo computador 💻</h1>
            <FormularioComputadora></FormularioComputadora>
        </Layout>
    );
};