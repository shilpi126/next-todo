import axios from 'axios';
import { MongoClient } from 'mongodb';
import React from 'react'
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CompletedTask = (props) => {
  const todos =props.todoData;

  const handleDeleteTodo = async(id) =>{

    const deletetodo = await axios.delete(`/api/delete-todo?id=${id}`);
}


  return (
      <div className='m-8 flex justify-center flex-col items-center'>
           {todos?.map((todo,i)=>(
              
               <div key={todo.id} className='flex justify-between h-10 w-96 border-2 mb-4 rounded-sm p-2'>
              <div className='flex'>
   
                  {todo.status === "completed" &&    <button  className={"text-green-500"}>
                   <IoCheckmarkCircleSharp />
              
              </button>}
   
            
         
              <p className='ml-4 text-sm'>{todo.todo}</p> </div>       
              <div>

              <button onClick={()=>handleDeleteTodo(todo.id)}  className='text-red-600'><RiDeleteBin6Line /></button>
              </div>
          </div>
           ))}
       </div>
  )
}





export async function getStaticProps(){
// fetch data
  const client = await MongoClient.connect(
        "mongodb+srv://admin:0dDXKLu97PJuxyhR@cluster0.yg0xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );


        const db = client.db();
        const todoCollection = db.collection("task-manage");

        const result = await todoCollection.find({status:"completed"}).toArray();
      
        client.close();

return{
  props:{
     todoData:result.map((todo)=>({
      id:todo._id.toString(),
      status:todo.status,
      todo:todo.todo,
     }))
  },
  revalidate:1,
}

}




export default CompletedTask