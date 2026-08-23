import { useState } from "react";

const Todo=()=>{
    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);

    const addTask=()=>{
        if(task.trim()==="")
        {
            return;
        }
        setTasks([...tasks,task]);
        setTask("");
    }
    const deleteTask=(taskTodelete)=>{
        setTasks(tasks.filter((item)=>item!==taskTodelete));
    }
    return(
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter a task"    
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {[...tasks].sort().map((item)=>(
                    <li key={item}>{item}
                        <button onClick={()=>deleteTask(item)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;