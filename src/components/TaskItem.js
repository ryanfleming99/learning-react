import React from 'react'
import StyledTask from './components/StyledTask'

/* const StyledTask = styled.div`
`; */

export default function TaskList({ TaskItem, toggleTask }) {
    function handleTaskClick() {
        toggleTask(TaskItem.id)
    }

    // imported task above in the function params
    // using checked={task.complete} to determine when input has been reacted with
    return (
        <StyledTask>
            <label>
                {TaskItem.name}
                <input type="checkbox" checked={TaskItem.complete} onChange={handleTaskClick} />
            </label>
        </StyledTask>
    )
}
