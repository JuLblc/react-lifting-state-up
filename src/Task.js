import React from "react";

const Task = ({ index, taskName, deleteTask }) => {
  return <li onClick={() => deleteTask(index)}>{taskName}</li>;
};

export default Task;
