
import { MouseEventHandler } from 'react';
import { useAddToBasketMutation, useGetCategoriesQuery } from '../store/features';
import { useGetProductsQuery } from '../store/features/products'
import styles from '../styles/Home.module.css'

export const Products = () => {

    const { data: products, error, isLoading } = useGetProductsQuery();
    const { data: categories, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();
    const [addToBasket] = useAddToBasketMutation();

    if (error) return <>{error}</>;

    if (categoryError) return <>{categoryError}</>;

    if (isLoading || categoryLoading) {
        return <div className={styles.card}>
            <h2>Loading</h2>
        </div>
    }

    const handleAddToBasket = (product: Product) => {
        addToBasket({
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.unitPrice
        })
    }

    return <div className={styles.grid}>
        {categories?.map(category => {
            return <div key={category.id} className={styles.card}>
                <h2>{category.name}</h2>
                <ul>
                    {products?.map(product => <li onClick={() => handleAddToBasket(product)} key={product.id}>{product.name}</li>)}
                </ul>
            </div>
        })}

    </div>

}