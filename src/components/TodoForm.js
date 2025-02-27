import TodoList from "@/pages/TodoList";
import axios from "axios";
import { useState } from "react"


const TodoForm = () => {
    const [todo, setTodo] = useState("");
    
    const [todos, setTodos] = useState([]);


const handleFormSubmit = async(e) => {
    
    e.preventDefault();
    //console.log(todo)
    let obj= {
        
        todo,
        status:"inCompleted",
    }

 try{
 

    setTodos([...todos,obj])

    const addtodo = await axios.post("/api/add-todo",obj)


    setTodo("")
 }catch(err){
    console.log(err)
 }

}

console.log(todos)

return (
    <div className="m-4 flex flex-col justify-center items-center">
        

    <div className="h-40 w-80 border-2 p-2 pl-4">
    <h1 className="text-center mb-2 font-semibold">Todo Form</h1>
        
        <form onSubmit={handleFormSubmit}>
        <div>
            <label>Add Todo</label>
        <input 
        type="text"
        id="todo"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Add Todo..."
        className="outline-none h-8 w-40 border-2 border-slate-300 rounded-sm ml-4"
        />
        </div>
        <button type="submit" className="w-24 h-8 bg-slate-700 text-white rounded-sm mt-4">Submit</button>
        </form>
    </div>
        
    </div>
    )
}

export default TodoForm