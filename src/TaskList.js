import React from 'react'
import Task from './Task'

export default function TaskList({ tasks }) {
    return (
        tasks.map(task => {
            return <Task key={task.id} task={task} />
        })
        // todos.map is used to iterate each task
        // <Todo todo={todo} /> this may give ERROR as objects are not valid react children
        // Set key to prevent this from happening  - key={todo} which makes sure the todo is unique
    )
}