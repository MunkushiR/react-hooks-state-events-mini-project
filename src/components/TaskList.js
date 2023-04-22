import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [myTasks, setMyTasks] = useState(tasks)

  function deleteTasks(text) {
    const updatedTasks = myTasks.filter((task) => task.text !== text)
    setMyTasks(updatedTasks)
  }
  return (
    <div className="tasks">
			{
				myTasks.map((task) => (
					<Task 
						key={task.text} 
						text={task.text} 
						category={task.category} 
						deleteTasks={deleteTasks}
					/>
				))
	  		}
		</div>
  );
}

export default TaskList;
