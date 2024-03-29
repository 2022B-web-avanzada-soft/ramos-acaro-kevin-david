import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import {Computadora, ComputerService} from "../../computadora/computadora.service";

type Props = {
  item?: Computadora
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
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
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on computadoras
  const computadoras = new ComputerService();
  const listaComputadoras = await computadoras.getComputadoras();

  const paths =  listaComputadoras.map((computadora) => ({
    params: { id: computadora.id.toString() },

  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const computadoras = new ComputerService();
    const listaComputadoras = await computadoras.getComputadoras();
    const item = listaComputadoras.find((computadora) => computadora.id === Number(id))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
