import React, { useState } from 'react'

const TodoList = (props) => {
const todos=props.todos;
    const [completed, setCompleted] = useState(false)
    return (
    <div>
        {todos?.map((todo,i)=>(
            <div key={todo.id}>
                <form>
                    <input type='checkbox'
                    id='completed'
                    value={completed}
                    onChange={(e)=>setCompleted(e.target.completed)}
                    className=' w-6 h-6 rounded-full '
                    />
                </form>
                <p>{todo.todo}</p>
            </div>
        ))}
    </div>
    )
}

export default TodoList