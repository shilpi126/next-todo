import TodoList from "@/pages/TodoList";
import { useState } from "react"


const TodoForm = () => {
    const [todo, setTodo] = useState("");
    
    const [todos, setTodos] = useState([]);


const handleFormSubmit = (e) => {
    
    e.preventDefault();
    console.log(todo)

    let obj= {
        id:Date.now(),
        todo,
    }

    setTodos([...todos,obj])

}

console.log(todos)

return (
    <div>
        <TodoList todos={todos}/>
        <h1>Todo Form</h1>
        
            <form onSubmit={handleFormSubmit}>
            <div>
                <label>Add Todo</label>
            <input 
            type="text"
            id="todo"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder="Add Todo..."
            />
            </div>
            <button type="submit">Submit</button>
            </form>
        
    </div>
    )
}

export default TodoForm