import {  useGetCategoriesQuery } from '../store/features';
import { useGetProductsQuery } from '../store/features'
import { CategoryProducts } from './CategoryProducts';

export const Products = () => {

    const { data: products, error, isLoading } = useGetProductsQuery();
    const { data: categories, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();

    console.log("rendered products");

    return <div className="flex flex-wrap gap-4 justify-between pt-6">
        {categories?.map(category => {

            const categoryProducts = products?.filter(({categoryId}) => categoryId === category.id);
            return <CategoryProducts key={category.id} category={category} products={categoryProducts || []} />
        })}

    </div>

}