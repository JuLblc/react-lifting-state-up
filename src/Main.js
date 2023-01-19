import React, { useState } from "react";

import ToDo from "./ToDo";

const tasks = {
  veggies: ["🍅", "🥕", "🥔", "🌽"],
  treats: ["🍩", "🍫"],
};

const Main = () => {
  const [toDos, setTodos] = useState(Object.keys(tasks));

  const allDone = (index) => {
    const updatedToDos = [...toDos];
    updatedToDos.splice(index, 1);

    setTodos(updatedToDos);
  };

  return (
    <div>
      <ul>
        {toDos.map((toDo, index) => (
          <ToDo
            index={index}
            key={toDo}
            title={toDo}
            toDoList={tasks[toDo]}
            allDone={() => allDone(index)}
          />
        ))}
      </ul>

      {!toDos.length && (
        <h3>
          All done!{" "}
          <span role="img" aria-label="emoji">
            💜
          </span>
        </h3>
      )}
    </div>
  );
};

export default Main;
