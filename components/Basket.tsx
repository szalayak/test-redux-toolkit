import { useClearBasketMutation, useGetBasketQuery } from '../store/features';
import { Button } from './Button';
import { Card } from './Card';
import { Table } from './Table';

export const Basket = () => {

    const { data: basket, error, isLoading } = useGetBasketQuery();

    const [clearBasket] = useClearBasketMutation();

    if (error) return <>{error}</>;

    if (isLoading) {
        console.log("loading basket");
        return <Card title='Loading' />
    }

    console.log("rendered basket");

    return <Card full title={`Basket - total: ${basket?.total}`}>

        <Table>
            <thead>
                <tr>
                    <th className='border-r'>Product ID</th>
                    <th className='border-x'>Product name</th>
                    <th className='border-x'>Quantity</th>
                    <th className='border-l'>Price</th>
                </tr>
            </thead>
            <tbody>
                {basket?.items.map(item => {
                    return <tr key={item.id}>
                        <td className='border'>{item.id}</td>
                        <td className='border'>{item.name}</td>
                        <td className='border'>{item.quantity.toString()}</td>
                        <td className='border'>{item.price.toLocaleString()}</td>
                    </tr>
                })}
            </tbody>
        </Table>
        <div className='w-full flex justify-center'>
            <Button variant='negative' full onClick={() => clearBasket()}>Clear basket</Button>
        </div>
    </Card>

}