import { useEffect, useState } from "react"

const Timer=()=>{

    const [count,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            
            setCount(count=>count+1)

        },4000);
    })
    return (
        <div>
            <h4>{count} times</h4>
        </div>
    );

}
export default Timer
