import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, toggleTask }) => {
  return (
    <div className="todo-list-container">
      {tasks.map((task, index) => (
        <>
          <div
            key={index}
            className={`todo-item-container ${task.completed ? "done" : ""}`}
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
  );
};

export default TodoList;
