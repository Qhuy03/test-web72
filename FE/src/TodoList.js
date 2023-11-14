import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, toggleTask }) => {
  const [selected, setSelected] = useState(true);
  return (
    <>
      <div>
        <input
          onChange={(e) => setSelected(!e.target.checked)}
          id="fill"
          type="checkbox"
        />
        <label for="fill">Not finished only</label>
      </div>
      <div className="todo-list-container">
        {selected &&
          tasks.map((task, index) => (
            <>
              <div
                key={index}
                className={`todo-item-container ${
                  task.completed ? "done" : ""
                }`}
              >
                {!task.completed ? (
                  <FaRegCircle
                    onClick={() => toggleTask(index)}
                    className="item-done-button"
                    color="#9a9a9a"
                  />
                ) : (
                  <FaRegCheckCircle
                    onClick={() => toggleTask(index)}
                    color="#9a9a9a"
                    className="item-done-button"
                  />
                )}
                <div className="item-title">{task.text}</div>
              </div>
            </>
          ))}
        {!selected &&
          tasks
            .filter((item) => !item.completed)
            .map((task, index) => (
              <>
                <div
                  key={index}
                  className={`todo-item-container ${
                    task.completed ? "done" : ""
                  }`}
                >
                  {!task.completed ? (
                    <FaRegCircle
                      onClick={() => toggleTask(index)}
                      className="item-done-button"
                      color="#9a9a9a"
                    />
                  ) : (
                    <FaRegCheckCircle
                      onClick={() => toggleTask(index)}
                      color="#9a9a9a"
                      className="item-done-button"
                    />
                  )}
                  <div className="item-title">{task.text}</div>
                </div>
              </>
            ))}
      </div>
    </>
  );
};

export default TodoList;