import { useEffect, useState } from "react"

const CounterUseEffect=()=>{

    const [count,setCount]=useState(0);

    useEffect(()=>{
console.log("the counter is",count)

    },[count]);

       const increment=()=>{
            setCount(count+1)
       }
       const Decrement=()=>{
        setCount(count-1)
   }

    return (
        <>
        
               <h3>count:{count}</h3>
               <button onClick={increment}>increament</button>
               <button onClick={Decrement}>decreament</button>

        </>


    );
}

  export default CounterUseEffect