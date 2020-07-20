import React, { useState, useRef, useEffect } from 'react';
// add { useState } for re-rendering on a page e.g. update/change component}
// You must call { useState within your function} *
// use useRef to allow reading the input box
// use useEffect hook
import TaskList from './TaskList'
import { v4 as uuidv4 } from 'uuid';
// uuid is used to generate random ID's for tasks, used as a function within the prevTasks object

// this sets a local storage variable key
const LOCAL_STORAGE_KEY = 'taskApp.tasks'

function App() {
  // Default state is empty array and set as variable. Destructuring used.
  //*
  // Object Destructuring   
  const [tasks, setTasks] = useState([])
  // useState default is an array
  // use an object within the array, set values like above ^ 
  const taskNameRef = useRef()
  // this allows you to access the input to scope out the values
  // addNewTask(e) param is an event property

  // useEffect function with function as param
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addNewTask(e) {
    const name = taskNameRef.current.value
    if (name === '') return
    setTasks(prevTasks => {
      return [...prevTasks, { id: uuidv4(), name: name, complete: false }]
    })
    taskNameRef.current.value = null

  }
  return (
    <>
      <TaskList tasks={tasks} />
      <input ref={taskNameRef} type="text" />
      <button onClick={addNewTask}>+</button>
      <button>-</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
  //  <> </>  fragement used for mutli-line html
  // todos={todos} passes your todos (tasks) to the component so it can be used, its called props.
  // for todos you create a component (Todo.js)  
}

export default App;
