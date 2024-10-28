import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import "../assets/styles/App.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="App">
        <h1
          style={{
            fontFamily: "system-ui",
            fontWeight: 300,
            textAlign: "center",
            marginTop: "0rem",
            paddingTop: "7rem",
          }}
        >
          Task Manager
        </h1>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default TaskManager;
