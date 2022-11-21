import React, {useState} from "react";
import "../Microtask_3/button.css"



export const Task4 = () => {

    let [a, setA] = useState(0)

    const numberCounter = ()=> {
        setA (++a)
        console.log(a)
    }

    const numberNull = ()=> {
        setA(0)
        console.log(a)
    }

    return <div>
        <h1>{a}</h1>
        <button className={"button"} onClick={numberCounter}>COUNT</button>
        <button className={"button"} onClick={numberNull}>NULL</button>
    </div>
}
