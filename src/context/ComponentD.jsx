import React,{useContext} from "react";
import { UserContext } from "./CompontA";
const ComponentD=()=>{

    const user=useContext(UserContext);

    return(
        <div className="box">
            component D
            <h5>{`Bye ${user}`}</h5>
        </div>
    );
  }
  export default ComponentD