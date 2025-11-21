import React, { useState } from 'react'
import Taskform from './Component/TaskForm'
import Tasklist from './Component/TaskList'
import Progresstracker from './Component/Progresstracker'


export default function App() {
  const[tasks, setTasks] = useState([]);


  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>clear All Tasks</button>
    </div>
  )
}