import { useEffect, useState } from "react"

export const Watch1=()=>{
    const[timer,setTimer] = useState(new Date());
    useEffect(()=>{
    let interval =setInterval(()=>{
     setTimer(new Date());
    },1000)
    return()=>clearInterval(interval)
    })

    return(
        <>
        <p>{timer.toLocaleTimeString()}</p>
        </>
    )
}