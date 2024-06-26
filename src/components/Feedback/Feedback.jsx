import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
const[like,setLike]=useState(0);
const[dislike,setDislike]=useState(0);

const addLike=()=>{
    setLike(prevValue=>prevValue+1);
}
const addDislike=()=>{
    setDislike(prevValue=>prevValue+1);
}

const resetResults=()=>{
    setLike(0);
    setDislike(0);
};
    return (
        <div className="feedback-container">
            <div className="like-dislike-container">
                <div className="feedback-result-container">
                    <Button name="Like" onButtonClick={addLike} />
                    <div className="result">{like}</div>
                </div>
                <div className="feedback-result-container">
                    <Button name="Dislike" onButtonClick={addDislike} />
                    <div className="result">{dislike}</div>
                </div>
            </div>
            <Button name="Reset Results" onButtonClick={resetResults} />
        </div>
    )
}
export default Feedback;