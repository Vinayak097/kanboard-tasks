import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Task from './components/Task'
import Columns from './components/Columns'
import KanbanBoard from './components/Kan-board'
let data=[
  {
    id:'T',
    name:"todo",
    tasks:[{
      id:1,
      name:"string"
    }]
  },{
    id:'P',
    name:"progress-bar",
    tasks:[{
      id:1,
      name:"string"
    }]
  },{
    id:'rev',
    name:"peerReview",
    tasks:[{
      id:1,
      name:"string"
    }]
  },{
    id:'D',
    name:"done",
    tasks:[{
      id:1,
      name:"string"
    },{
      id:2,
      name:"task 2"
    }]
  }
]
function App() {
  

  return (
    
    <div>
      <Navbar></Navbar>
      <KanbanBoard></KanbanBoard>
    </div>

     
  )
}

export default App
