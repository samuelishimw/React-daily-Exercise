import { useState } from "react"


const Switch=()=>{
    const[switchh,setwitch]=useState(false);

    const turnOnOff=()=>{
        setwitch(!switchh)
    }

    return(

        <>
        
          <h4>Switch: {switchh?"ON":"OFF"}</h4>
          <button onClick={turnOnOff}>switch</button>
        
        </>

    );
    
}
export default Switch