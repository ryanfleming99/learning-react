import React from "react";
import Counter from "../styled-components/Counter";

function TaskCounter({ tasks }) {
  return (
    <div>
      <Counter>
        {tasks.filter(task => !task.complete).length} to complete today
      </Counter>
    </div>
  );
}

export default TaskCounter;
