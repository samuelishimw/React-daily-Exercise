import ComponentB from "./ComponentB";
import React,{useState,createContext} from "react";

  export const UserContext=createContext();
  const ComponentA=()=>{

    const [user,setUser]=useState("broco");

    return(
        <div className="box">
            componentA
            <p>{`hello ${user}`}</p>
            <UserContext.Provider value={user}>
            <ComponentB user={user}/>
            </UserContext.Provider>
           
        </div>
    );
  }
  export default ComponentA