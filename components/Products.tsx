
import { MouseEventHandler } from 'react';
import { useStore } from 'react-redux';
import { AppStore } from '../store';
import { addClick, useAddToBasketMutation, useGetCategoriesQuery } from '../store/features';
import { useGetProductsQuery } from '../store/features'
import styles from '../styles/Home.module.css'
import { CategoryProducts } from './CategoryProducts';

export const Products = () => {

    const { data: products, error, isLoading } = useGetProductsQuery();
    const { data: categories, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();

    console.log("rendered products");

    return <div className={styles.grid}>
        {categories?.map(category => {

            const categoryProducts = products?.filter(({categoryId}) => categoryId === category.id);
            return <CategoryProducts key={category.id} category={category} products={categoryProducts || []} />
        })}

    </div>

}