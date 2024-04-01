import React, { useState } from "react";
import './Counter.css'
function Counter( {by, megaadd}) {
    const [total, setTotal] = useState(10);

    const resetCounter = () => {
        setTotal(0);
    }
    const add100 = () => {
        setTotal(total + 100);
    }
    const subtract100 = () => {
        setTotal(total - 100);
    }
    const add10 = () => {
        setTotal(total + 10);
    }
    const subtract10 = () => {
        setTotal(total - 10);
    }
    const add5 = () => {
        setTotal(total + 5);
    }
    const subtract5 = () => {
        setTotal(total - 5);
    }
    const add2 = () => {
        setTotal(total + 2);
    }
    const subtract2 = () => {
        setTotal(total - 2);
    }
    const add1 = () => {
        setTotal(total + 1);
    }
    const subtract1 = () => {
        setTotal(total - 1);
    }
    const add500 = () =>{
        setTotal(total + by)
    }
    const add1000 = () =>{
        setTotal(total + megaadd)
    }
    return (
        <div className="container">
            <div className="buttons-container">
                <div className="greenbutton" onClick={add100}> +100 </div>
                <div className="greenbutton" onClick={subtract100}> -100 </div>
                <div className="greenbutton" onClick={add10}> +10 </div>
                <div className="greenbutton" onClick={subtract10}> -10 </div>
                <div className="greenbutton" onClick={add5}> +5 </div>
                <div className="greenbutton" onClick={subtract5}> -5 </div>
                <div className="greenbutton" onClick={add2}> +2 </div>
                <div className="greenbutton" onClick={subtract2}> -2 </div>
                <div className="greenbutton" onClick={add1}> +1 </div>
                <div className="greenbutton" onClick={subtract1}> -1 </div>
            </div>
            <div className="superadd" onClick={add500}> SUPER ADD</div>
            <div className="megaadd" onClick={add1000}> MEGA ADD</div>

            <div className="total">
                <h1>{total}</h1>
            </div>

            <div className="reset">
                <button onClick={resetCounter}>RESET</button>
            </div>

        </div>
    )
}
export default Counter;