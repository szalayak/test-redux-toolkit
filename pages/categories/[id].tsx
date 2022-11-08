import Head from 'next/head';
import { useRouter } from 'next/router';
import { Basket } from '../../components/Basket';
import { useGetCategoryByIdQuery, useGetProductsQuery } from '../../store'
import { skipToken } from "@reduxjs/toolkit/query";
import Link from 'next/link';
import { AppData } from '../../components/AppData';
import { CategoryProducts } from '../../components/CategoryProducts';

const Category = () => {

    const router = useRouter();
    const { id } = router.query;

    const { data: category, error, isLoading } = useGetCategoryByIdQuery(typeof id === "string" ? id : skipToken, { skip: router.isFallback });
    const { data: products, error: productsError, isLoading: productsLoading } = useGetProductsQuery();

    if (error) return <>{error}</>;

    if (productsError) return <>{productsError}</>;

    if (isLoading || productsLoading) {
        console.log("loading category")
        return <div>Loading...</div>
    }

    console.log("rendered category");

    return (
        <>
            <Head>
                <title>{category?.name}</title>
                <meta name="description" content="Category" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid gap-4 auto-rows-min'>
                <h1 className='font-bold text-xl text-center'>{category?.name}</h1>
                <div className='grid gap-4 grid-cols-2'>
                    <div className='flex justify-center'>
                        <Basket />
                    </div>
                    <div className='flex justify-center'>
                        <AppData />
                    </div>
                </div>
                <div className='h-fit w-full'>
                    {category && <CategoryProducts category={category} products={products?.filter(({ categoryId }) => categoryId === category.id) || []} />}
                </div>
            </div>
        </>
    )
}

export default Category;