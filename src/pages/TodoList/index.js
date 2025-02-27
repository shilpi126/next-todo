import { useState } from 'react'
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';

const TodoList = (props) => {
    
const todos=props.todoData;

//console.log(todos)


const handleDeleteTodo = async(id) =>{

    const deletetodo = await axios.delete(`/api/delete-todo?id=${id}`);
}

    
const handleCheckbox = async(id) => {
    

    const updatetodo = await axios.put(`/api/update-todo?id=${id}`, {
        status: "completed"
    });
    
}



    return (
    <div className='m-8'>
        {todos?.map((todo,i)=>(
           todo.status === "inCompleted" &&  
            <div key={todo.id} className='flex justify-between h-10 w-96 border-2 mb-4 rounded-sm p-2'>
           <div className='flex'>

               {todo.status === "completed" &&    <button  className={"text-green-500"}>
                <IoCheckmarkCircleSharp />
           
           </button>}

           
           {todo.status  === "inCompleted" && <button  onClick={()=>handleCheckbox(todo.id)} className={"text-orange-500"}>
               <MdOutlineRadioButtonUnchecked />
           
           </button>}



      
           <p className='ml-4 text-sm'>{todo.todo}</p> </div>       
           <div>
           <button className='mr-2 text-green-600'><MdEdit /></button>
           <button onClick={()=>handleDeleteTodo(todo.id)}  className='text-red-600'><RiDeleteBin6Line /></button>
           </div>
       </div>
        ))}
    </div>
    )
}



export default TodoList