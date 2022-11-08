import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { AppState, AppStore, decrement, increment, reset } from "../store";
import styles from "../styles/Home.module.css";


export const AppData = () => {
    const { clicks, counter } = useSelector((state: AppState) => state.app);

    const store: AppStore = useStore();

    const handleIncrement = () => store.dispatch(increment());
    const handleDecrement = () => store.dispatch(decrement());
    const handleReset = () => store.dispatch(reset());

    console.log("app data rendered");

    return <div className={styles.card}>
        <h1>App State</h1>
        <button onClick={handleReset}>Clear app state</button>
        <p>Counter: {counter}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "100%", justifyContent: "space-evenly" }}>
            <button onClick={handleIncrement} style={{ margin: "0px 24px", padding: "24px 0px" }}>Increase Counter</button>
            <button onClick={handleDecrement} style={{ margin: "0px 24px", padding: "24px 0px" }}>Decrease Counter</button>
        </div>
        <h2>Clicked items</h2>
        <table>
            <tbody>
                {clicks.map((click, index) => <tr key={index}><td>{click}</td></tr>)}
            </tbody>
        </table>
    </div>
}