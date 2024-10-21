import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("난 항상 실행돼");
    const iRunOnlyOnce = () => {
        console.log("난 한번만 실행돼");
    };
    useEffect(iRunOnlyOnce, []);
    return (
        <div>
            <h1 className={styles.title}>{counter}</h1>
            <Button text={"계속"} />
            <button onClick={onClick}>클릭</button>
        </div>
    );
}

export default App;
