import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { AppState, AppStore, decrement, increment, reset } from "../store";
import { Button } from "./Button";
import { ButtonContainer } from "./ButtonContainer";
import { Card } from "./Card";
import { Table } from "./Table";


export const AppData = () => {
    const { clicks, counter } = useSelector((state: AppState) => state.app);

    const store: AppStore = useStore();

    const handleIncrement = () => store.dispatch(increment());
    const handleDecrement = () => store.dispatch(decrement());
    const handleReset = () => store.dispatch(reset());

    console.log("app data rendered");

    return <Card full title="App State">
        <Button onClick={handleReset}>Clear app state</Button>
        <div className="my-6 py-6">
            <p className="font-bold text-md pb-2">Counter: {counter}</p>
            <ButtonContainer>
                <Button variant="positive" onClick={handleIncrement}>Increase Counter</Button>
                <Button variant="negative" onClick={handleDecrement}>Decrease Counter</Button>
            </ButtonContainer>
        </div>
        <Table title="Clicked Items">
            <tbody>
                {clicks.map((click, index) => <tr key={index}><td>{click}</td></tr>)}
            </tbody>
        </Table>
    </Card>
}