import React, { useState } from 'react'
import { Button, Dropdown, Form, Modal, Spinner } from 'react-bootstrap'
import { MdCheckBox } from 'react-icons/md'
import InputGroup from 'react-bootstrap/InputGroup';
function Task({ title, description, tag, completed, id }) {

 
  function Tododone(id )  {
    throw new Error('Function not implemented.')
  }
  
  function updateHandler(id) {
    throw new Error('Function not implemented.')
  }

  function setNewTodoDesc(value) {
    throw new Error('Function not implemented.')
  }

  function setSelectedTag(value ) {
    throw new Error('Function not implemented.')
  }

  function setNewTodoTitle(value)  {
    throw new Error('Function not implemented.')
  }
  
  

  function closeupdatefun(){
    throw new Error('Function not implemented.')
  }
  const [showupdate,setshoupdate]=useState(false);
  function deletefun(id) {
    throw new Error('Function not implemented.')
  }
  let updateload=false;
  return (
    <div className='shadow h-20 w-44 p-2 flex flex-col gap-4'>
        <h1>{title}</h1>
        <div className='flex justify-between '>
            <h2 className='mr-2'>Task {id| 1}</h2>
        <input className='bg-indigo-600 text-indigo-600 ' type="checkbox" name="myCheckbox" />
        </div>
    </div>
  )
}

export default Task