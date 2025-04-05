import { useState } from "react";

const TodoList=()=>{
    
    const [tasks,setTasks]=useState(["Mango four G","Trip threat","Ongo back"]);
    const [newtask,setNewTask]=useState("");

       const HandleInput=(event)=>{
        setNewTask(event.target.value)
        setNewTask("")

       }

       const addTask=()=>{
        setTasks(t=>[...t,newtask])
        setNewTask("")
        

       }

       const removeTask=()=>{

        
       }
    return(
        <>
        <div>
            <p>To do list</p>

            <input type="text" value={newtask} onChange={HandleInput} placeholder="Enter your task" />
            <button>Add</button></div>
            <div>
                <ol>
                    {tasks.map((element,index)=><li key={index}>{index}
                        <button onClick={()=>removeTask(index)}>delete</button>
                        <button onClick={()=>removeTask(index)}>delete</button>
                    </li>)}
                </ol>
            </div>

        </>

    );
}

export default TodoList