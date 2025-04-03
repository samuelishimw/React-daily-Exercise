import { useState } from "react";
const Thiss=()=> {
  const[text,setText]=useState("")

  const textt=(event)=>{
    setText(event.target.value)
  }

  return(
    <div>
          <p>Name:{text}</p>
          <input type="text" onChange={textt}  />
    </div>
  );
}
export default Thiss
