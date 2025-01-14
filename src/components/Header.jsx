import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='flex justify-between  shadow-2xl p-11 bg-slate-50'>
            <h1 className='text-2xl font-bold'>Chrises' ToDo</h1>
            <ul className='inline-flex space-x-10 text-xl align-middle'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header