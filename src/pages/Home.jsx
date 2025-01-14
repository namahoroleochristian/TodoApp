import React from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

const Home = () => {
  
  return (
    <div>
        <div className='flex flex-col items-center mt-8 space-y-6'>
          <AddTodo/>
          <TodoList/>
        </div>
    </div>
  )
}

export default Home