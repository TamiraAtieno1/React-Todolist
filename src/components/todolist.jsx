import React, {useState} from "react";
import Todoitem from "./todoitem";

 const Todolist = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
    return(
        <form onSubmit={handleSubmit}>
         <input type="text" value = {value} placeholder="What is the task today?" 
         onChange={(e) => setValue(e.target.value)}/>
         <button type="submit">Add Task</button>
        </form>
    )

}

export default Todolist;
