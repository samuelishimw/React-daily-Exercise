import { useEffect, useState } from "react";


const Watch=()=>{
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intev=setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>{
            clearInterval(intev);
        }
  },[])

  const timeSetter=()=>{
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let miran= hour >=12?"pm":"am";
    
    hour=hour% 12 || 12
    return `${padzero(hour)}:${padzero(minute)}:${padzero(second)} ${miran}`;
}
 
  const padzero=(number)=>{
    return(number<10?"0":"")+number;
  }
   

return(

    <>
    
         <h3>{timeSetter()}</h3>
    </>
    

);


} 
export default Watch