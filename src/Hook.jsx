import React,{useState} from "react";
function Hook(){
    
    const [name,setName]=useState("Murisa");
    const [age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false)

    const updateName=()=>{
       setName("Suzana")
    }

    const increament=()=>{
        setAge(age+1)
    }

    const toggles=()=>{
        setIsEmployed(!isEmployed)
    }

    
    return(

<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>updateName</button>

    <p>Age: {age}</p>
    <button onClick={increament}>updateAge</button>


    <p>Age: {isEmployed?"yes":"No"}</p>
    <button onClick={toggles}>Set Employed</button>
</div>


    );

}
export default Hook