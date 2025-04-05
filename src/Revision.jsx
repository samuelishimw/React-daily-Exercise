import { useEffect, useState } from "react";

const UsEffect=()=>{

    const [count, setCount]=useState(0);
    const[calculation,setCalculation]=useState(0);

      
    useEffect(()=>{
       
        setCalculation(()=>count*2);
       
    },[calculation])

    return(
             <div>
                 <p>count:{count}</p>
                <button onClick={()=>setCount((c)=>c+1)} >+</button>
                <p>calculation:{calculation}</p>
             </div>

    );
}
export default UsEffect