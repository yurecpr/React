import Button from "../Button/Button";
import "./styles.css";
import { useState } from "react";


function Counter() {
    const [value, setCount] = useState(0);
        
    console.log(value);

    const onMinus =()=>{
        setCount(prevValue=>prevValue-1);
      };
    const onPlus =()=>{
        setCount(prevValue=>prevValue+1);
      };

    return (
        <div className="counter-wrapper">
            <div className="button-control"><Button onButtonClick={onMinus} name="-" /></div>
            <p>{value}</p>
            <div className="button-control" ><Button onButtonClick={onPlus} name="+" /></div>
        </div>
    )
}

export default Counter