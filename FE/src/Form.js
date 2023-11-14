import { useState } from "react";

const Form = ({ language, addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskText);
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder={language === 'en' ? "Enter task ..." : "Nhập nhiệp vụ"}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">{language === 'en' ? "Submit" : "Gửi"}</button>
    </form>
  );
};

export default Form;