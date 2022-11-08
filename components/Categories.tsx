import Link from 'next/link';
import { useGetCategoriesQuery } from '../store/features/categories'
import styles from "../styles/Home.module.css";

export const Categories = () => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery();

    if (error) return <>{error}</>;

    if (isLoading) {
        console.log("loading categories");
        return <div className={styles.card}>
            <h2>Loading</h2>
        </div>
    }

    console.log("rendered categories");
    return <div className={styles.card}>
        <h2>Categories</h2>
        <ul>
            {categories?.map(category => <li key={category.id}><Link href={`categories/${category.id}`}>{category.name}</Link></li>)}
        </ul>
    </div>

}