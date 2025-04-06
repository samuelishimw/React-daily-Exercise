import { useState } from "react";

const TodoList=()=>{
    
 const [task,setTask]=useState(["mango","pinaple","orange"]);
 const [newtask,setNewTask]=useState("")

 const handlechange=(e)=>{
    setNewTask(e.target.value);
 }

const add=()=>{
    if(newtask.trim() !==""){
        setTask(t=>[...t,newtask])
        setNewTask("")

    }
    
}
 const remove=(index)=>{
    const upadate=task.filter((_,i)=>i !==index);
    setTask(upadate)

 }
    

        
       
    return(
        <>
        <p>To do list</p>
       <div>
   
       <input type="text" value={newtask} onChange={handlechange} placeholder="Enter your value" />
       <button onClick={add}>Add</button>

       </div>
             <ol>
                {task.map((Elemen,index)=><li key={index}>{Elemen}
                        
               <button onClick={()=>remove(index)}>remove</button>

                </li>)}
             </ol>

        </>

    );
}

export default TodoList