import React, { useState } from "react";
import Task from "./Task";

const ToDo = ({ title, toDoList, allDone }) => {
  const [tasks, setTasks] = useState(toDoList);
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);

    if (!updatedTasks.length) {
      allDone();
    }
    setTasks(updatedTasks);
  };

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            taskName={task}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDo;
