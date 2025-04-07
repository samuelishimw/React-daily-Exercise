import { useState } from "react";

const Form=()=>{

    const [name,setName]=useState({firstName:'',lastName:''});

    const handlechange=(e)=>{
        const [nam,value]=e.target;

        setName(prev => ({
            ...prev,
            [nam]: value
          }));
    }

    return (
        <div>
            <input type="text" name="firstName" value={name.firstName} onChange={handlechange} placeholder="Enter your fname"/>
            <input type="text" name="lastName" value={name.lastName} onChange={handlechange} placeholder="Enter your lname"/>
             <p>First Name: {name.firstName}</p>
             <p>Last Name : {name.lastName}</p>

        </div>
    );
}
export default Form