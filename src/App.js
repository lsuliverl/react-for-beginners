import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("생성됌!");
        return () => console.log("삭제됌");
    }, []);
    return <h1>안녕</h1>;
}
// function Hello() {
//     function byFn() {
//         console.log("삭제됌");
//     }
//     function hiFn() {
//         console.log("생성됌!");
//         return byFn;
//     }
//     useEffect(hiFn, []);
//     return <h1>안녕</h1>;
// }

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(false);
    const clickShowing = () => setShowing((prev) => !prev);
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("난 항상 실행돼");
    useEffect(() => {
        console.log("api 불러오기");
    }, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("검색 결과", keyword);
        }
    }, [keyword]);
    return (
        <div>
            {showing ? <Hello /> : null}
            <input value={keyword} onChange={onChange} type="text" placeholder="여기에 검색해주세요..." />
            <h1 className={styles.title}>{counter}</h1>
            <Button text={"계속"} />
            <button onClick={onClick}>클릭</button>
            <button onClick={clickShowing}>{showing ? "숨기기" : "더보기"}</button>
        </div>
    );
}

export default App;
