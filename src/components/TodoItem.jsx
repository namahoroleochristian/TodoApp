
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from "react-icons/fa6";

const TodoItem = () => {
    const [todos, setTodos] = useState([]);
    const deleteItem = async (id) =>{
      try{
         const response = await axios.delete(`http://localhost:2012/todo/${id}`);
         console.log(`item todo number ${id} was deleted :${response.data}`);
         setTodos(todos.filter(todo => todo.id !== id))
         
      }catch(error){
          console.log(`error message ${error.message}`);
          
      }
    }
  
    useEffect(() => {
      axios.get('http://localhost:2012/todo')
        .then(response => {
          console.log(response.data); 
          setTodos(response.data);   
        })
        .catch(error => {
          console.error("Error fetching data:", error); 
        });
    }, []); 
  
 return (
     <>
       <ul className='mt-12 text-xl'>
         {todos.map(todo => (
           <li key={todo.id} className='mt-5 flex justify-between shadow-lg p-5 w-96 rounded-xl border '>
             <span className='cursor-pointer text-blue-700' >{todo.title}</span>
             <ul>
             <span className="text-red-600 cursor-pointer " onClick={() => deleteItem(todo.id)}><FaTrash /></span>
             </ul>
           </li>
         ))}
       </ul>
     </>
   );
}

export default TodoItem