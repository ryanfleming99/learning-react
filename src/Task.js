import React from 'react'

export default function TaskList({ task, toggleTask }) {
    function handleTaskClick() {
        toggleTask(task.id)
    }


    // imported task above in the function params
    // using checked={task.complete} to determine when input has been reacted with
    return (
        <label>
            <input type="checkbox" checked={task.complete} onChange={handleTaskClick} />
            {task.name}
        </label>
    )
}
