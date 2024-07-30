import React from 'react'
import { FaPlus } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className='p-5 flex items-center justify-between mx-10 border-b-[0.01rem] border-gray'>
      <h1 className='text-indigo-800 font-serif text-3xl '>Kanboard</h1>
      <FaPlus  className='text-3xl'/>      
    </nav>
  )
}
export default Navbar