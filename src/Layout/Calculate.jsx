import { useState } from "react";

 
 const Calculate=()=>{

    const [input,setInput]=useState("");

    const handleInput=(inputValue)=>{
        setInput((myInput)=>myInput+inputValue);
    }

    const handleClear=()=>{
        setInput("");
    }

    const handleCalculate=()=>{
        try{
            setInput(eval(input).toString());
        }
        catch{
            setInput("error");
        }
    }
    return(
        <div className="allca">
                  
               <input className="in" type="text" value={input} disabled/>   

               <div className="calcul">
                         
                         <button onClick={handleClear} >C</button>
                         <button onClick={()=>handleInput("/")}>/</button>
                         <button onClick={()=>handleInput("*")}>*</button>
                         <button onClick={()=>handleInput("-")}>-</button>
                         

                         <button onClick={()=>handleInput("7")}>7</button>
                         <button onClick={()=>handleInput("8")}>8</button>
                         <button onClick={()=>handleInput("9")}>9</button>
                         <button onClick={()=>handleInput("+")}>+</button>

                          
                         <button onClick={()=>handleInput("4")}>4</button>
                         <button onClick={()=>handleInput("5")}>5</button>
                         <button onClick={()=>handleInput("6")}>6</button>
                         <button onClick={()=>handleCalculate("=")}>=</button>

                         <button onClick={()=>handleInput("1")}>1</button>
                         <button onClick={()=>handleInput("2")}>2</button>
                         <button onClick={()=>handleInput("3")}>3</button>
                         <button onClick={()=>handleInput("0")}>0</button>
               </div>

        </div>

    );
 }
 export default Calculate