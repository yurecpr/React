import "./styles.css";
import Button from "../../components/Button/Button";
import Input from"../../components/Input/Input";
import Counter from "../../components/Counter/Counter";

function Lesson04() {
    const showMassage=()=>{
        alert("Hello, user");
    }
    const onChange=(event, message)=>
    {console.log(`${event.target.value}-${message}`)    ;
};
    return (
        <div className="lesson04-container">
            {/* <Input onInputChange={(event)=>onChange(event,"value")}/>
            <Button name="Func inner" onButtonClick={()=>alert("Hi")} />
            <Button name="Func Outer" onButtonClick={showMassage} /> */}
<Counter/>
        </div>
    )

}
export default Lesson04;
