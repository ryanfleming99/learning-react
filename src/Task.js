import React from 'react'

export default function Task({ task }) {
    // imported task above in the function params
    // using checked={task.complete} to determine when input has been reacted with
    return (
        <label>
            <input type="checkbox" checked={task.complete} />
            {task.name}
        </label>

    )
}
