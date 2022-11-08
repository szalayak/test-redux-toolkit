import Head from 'next/head'
import { AppData } from '../components/AppData';
import { Basket } from '../components/Basket';
import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import { wrapper } from '../store';
import { categoryApi, productApi } from '../store/features';
import styles from '../styles/Home.module.css'

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {

  store.dispatch(productApi.endpoints.getProducts.initiate());
  store.dispatch(categoryApi.endpoints.getCategories.initiate());


  await Promise.all([...store.dispatch(productApi.util.getRunningQueriesThunk()), ...store.dispatch(categoryApi.util.getRunningQueriesThunk())]);

  return {
    props: {}
  }
})

export default function Home() {
  console.log("rendered index");

  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <meta name="description" content="Redux Toolkit Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid gap-4 auto-rows-min'>
        <div className='grid gap-4 grid-cols-2'>
          <div className='flex justify-center'>
            <Basket />
          </div>
          <div className='flex justify-center'>
            <AppData />
          </div>
        </div>
        <div className='h-fit w-full'>
          <Categories />
        </div>
        <Products />
      </div>
    </>
  )
}
