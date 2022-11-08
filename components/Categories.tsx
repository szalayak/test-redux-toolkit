import Link from 'next/link';
import { useGetCategoriesQuery } from '../store/features/categories'
import styles from "../styles/Home.module.css";
import { Button } from './Button';

export const Categories = () => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery();

    if (error) return <>{error}</>;

    if (isLoading) {
        console.log("loading categories");
        return <div>Loading...</div>
    }

    console.log("rendered categories");
    return <div className='flex gap-4 flex-wrap w-full pt-6'>
        {categories?.map(category => <Button key={category.id} rounded><Link href={`categories/${category.id}`}>{category.name}</Link></Button>)}
    </div>

}