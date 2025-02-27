
import { MongoClient } from "mongodb";
import AddTodo from "./AddTodo";

import TodoList from "./TodoList";



export default function Home(props) {
  return (
 
    <div className="flex justify-center flex-col items-center">
      <TodoList todoData={props.todoData}/>
      <AddTodo />
      
    </div>
  
  );
}



export async function getStaticProps(){
// fetch data
  const client = await MongoClient.connect(
        "mongodb+srv://admin:0dDXKLu97PJuxyhR@cluster0.yg0xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );


        const db = client.db();
        const todoCollection = db.collection("task-manage");

        const result = await todoCollection.find().toArray();
      
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
