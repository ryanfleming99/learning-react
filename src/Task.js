import React from 'react'
import styled from 'styled-components';
import StyledTask from './components/StyledTask'

/* const StyledTask = styled.div`
`; */

export default function TaskList({ task, toggleTask }) {
    function handleTaskClick() {
        toggleTask(task.id)
    }


    // imported task above in the function params
    // using checked={task.complete} to determine when input has been reacted with
    return (
        <StyledTask>
            <label>
                <input type="checkbox" checked={task.complete} onChange={handleTaskClick} />
                <p>{task.name}</p>
            </label>
        </StyledTask>
    )
}
