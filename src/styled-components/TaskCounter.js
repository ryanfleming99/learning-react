import React from "react";
import Counter from "../styled-components/Counter";

function TaskCounter({ tasks }) {
  return (
    <div>
      <Counter>
        {tasks.filter(task => !task.complete).length} left to do
      </Counter>
    </div>
  );
}

export default TaskCounter;
