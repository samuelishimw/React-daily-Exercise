import { useEffect, useState } from "react";

function NewForm() {
  const [form,setForm]=useState({name:"" , email:"", phone:"",age:""})
  const [submitted,setSubmitted]=useState(false)
  const handleForm=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmitted=(e)=>{
    e.preventDefault();
     setSubmitted(true)
  }

  useEffect(()=>{
    if(submitted){
        console.log("submitted complete",form);
        alert(`form submitted with : \nNames :${form.name} \nEmail: ${form.email}  \nPhone :${form.phone} \nAge: ${form.age}`)
        setSubmitted(false);

    }
  },[submitted])
  
    return (
        <div>
            <form onSubmit={handleSubmitted}>
             <p><input type="text"name="name" onChange={handleForm} placeholder="Names"required /></p>
             <h4>Names: {form.name}</h4>
             <p><input type="Email"name="email" onChange={handleForm} placeholder="Email" required /></p>
             <h4>Email: {form.email}</h4>
             <p><input type="number"name="phone" onChange={handleForm} placeholder="Phone" required /></p>
             <h4>Phone: {form.phone}</h4>
             <p><input type="number"name="age" onChange={handleForm} placeholder="Age" required /></p>
             <h4>Age: {form.age}</h4>
             <button type="submit" >submit</button>
             </form>
        </div>
 
    );
  } 

  export default NewForm