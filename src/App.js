import React, { useState, useRef, useEffect } from 'react';
// add { useState } for re-rendering on a page e.g. update/change component}
// You must call { useState within your function} *
// use useRef to allow reading the input box
// use useEffect hook
import TaskList from './TaskList'
import StyledLayout from './components/StyledLayout'
import StyledButton from './components/StyledButton'


import { v4 as uuidv4 } from 'uuid';
import { toUnicode } from 'punycode';
import styled from 'styled-components';
// uuid is used to generate random ID's for tasks, used as a function within the prevTasks object
// using 'import uuidv4 from 'uuid/v4' gave an ERROE so I found a fix (above)
// 'styled-components' is a create-a-component library which allows powerful css styling

/* const StyledDiv = styled.div`
  width: 90%;
  padding: 10px;
  display:grid;
  justify-content: center;
`; */

// StyledDiv needs to start with a capital so it can be used as a component
// `` after styled.div is tagged template. Put after function name - vanilla js


// this sets a local storage variable key
const LOCAL_STORAGE_KEY = 'taskApp.tasks'

function App() {
  // Default state is empty array and set as variable. Destructuring used.
  //*
  // Object Destructuring   
  const [tasks, setTasks] = useState([])
  // useState default state is an empty array
  // use an object within the array to test e.g. {id: 1, name:'ryan'}
  const taskNameRef = useRef()
  // this allows you to access the input to scope out the values
  // addNewTask(e) param is an event property

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTasks(storedTasks)

  }, [])
  // JSON.parse is used interpret the data, it's converting 
  // only store storeTasks if we have storedTasks [line:27]
  // end of function, the empty array never changes so the function is called once. 


  // useEffect function with function as param
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])
  // this functions allows us to store the tasks inside local storage...s
  // ...remember to set the local_storage_key variable outside the function

  function toggleTask(id) {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }
  // newTasks is a copy of the current tasks as we shouldn't modify the orignal state variable
  // newTasks.find is looking for a task where both id's are the same

  function addNewTask(e) {
    const name = taskNameRef.current.value
    if (name === '') return
    setTasks(prevTasks => {
      return [...prevTasks, { id: uuidv4(), name: name, complete: false }]
    })
    taskNameRef.current.value = null

  }

  function handleClearTasks() {
    const newTasks = tasks.filter(task => !task.complete)
    setTasks(newTasks)
  }

  return (
    <>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
      <StyledLayout>
        <StyledButton>
          <input ref={taskNameRef} type="text" />
          <button onClick={addNewTask}>+</button>
          <button onClick={handleClearTasks}> Clear Completed</button>
        </StyledButton>
        <div> {tasks.filter(task => !task.complete).length}left to do</div>
      </StyledLayout>
    </>
  )
}

// <> </>  fragement used for mutli-line html
// todos={todos} passes your todos (tasks) to the component so it can be used, its called props.
// for todos you create a component (Todo.js)  

export default App;