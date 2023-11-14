import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [tasks, setTasks] = useState([
    { text: "Build some websites", completed: false },
    { text: "Do excercises", completed: false },
    { text: "Go shopping", completed: false },
    { text: "House cleaning", completed: true }
  ]);
  const addTask = (text) => {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const incompleteCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader incompleteCount={incompleteCount} />
        <TodoList tasks={tasks} toggleTask={toggleTask} />
        <Form addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};
