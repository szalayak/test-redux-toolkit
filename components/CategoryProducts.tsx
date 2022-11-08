import { useStore } from "react-redux";
import { useAddToBasketMutation, AppStore, addClick } from "../store";
import { Card } from "./Card";

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

    return <Card title={category.name}>
        <ul>
            {products?.filter(({ categoryId }) => categoryId === category.id).map(product => <li className="hover:text-emerald-700 hover:cursor-pointer" onClick={() => handleAddToBasket(product)} key={product.id}>{product.name}</li>)}
        </ul>
    </Card>
}