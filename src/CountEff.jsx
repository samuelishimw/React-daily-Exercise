import { useEffect, useState } from "react";

const CountEff=()=>{
const [count,setCount]=useState(0)
const [color,setColor]=useState("green")

  useEffect(()=>{
    document.title=`count ${count}${color}`
  },[count,color])

    const addCount=()=>{
        setCount(c=>count+1);
    }
    const changeColor=()=>{
        setColor(c=>c==='green'?'red':'yellow');
    }

    return(

        <div>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={addCount}>Add</button><br/><br/>
            <button onClick={changeColor}>change</button>

        </div>
    );
}
export default CountEff