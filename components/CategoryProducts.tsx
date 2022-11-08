import { useStore } from "react-redux";
import { useAddToBasketMutation, AppStore, addClick } from "../store";
import styles from "../styles/Home.module.css";

export const CategoryProducts = ({ products, category }: { category: Category, products: Product[] }) => {

    const [addToBasket, { isLoading }] = useAddToBasketMutation();

    const store: AppStore = useStore();

    console.log("rendered category products for", category.id, { isLoading });

    const handleAddToBasket = (product: Product) => {
        store.dispatch(addClick(product.name));
        addToBasket({
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.unitPrice
        })
    }

    return <div key={category.id} className={styles.card}>
        <h2>{category.name}</h2>
        <ul>
            {products?.filter(({ categoryId }) => categoryId === category.id).map(product => <li onClick={() => handleAddToBasket(product)} key={product.id}>{product.name}</li>)}
        </ul>
    </div>
}