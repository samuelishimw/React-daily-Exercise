import React,{useState} from "react";

const Counter=()=>{

    const [count,SetCounter]=useState(0);
    
    const increament=()=>{
        SetCounter(count +1)
    }
    const decreament=()=>{
        SetCounter(count -1)
    }
    const reset=()=>{
        SetCounter(0)
    }

    return(
  <div>
            <p>start : {count}</p>
            <button onClick={decreament}>decreament</button>
            <button onClick={reset}>reset</button>
            <button onClick={increament}>increament</button>
  </div>



    );

}

export default Counter