import React from "react";
import TaskItem from "./TaskItem";
import { Box } from "@mui/material";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <Box sx={{ marginTop: 5 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          completeTask={() => completeTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </Box>
  );
};

export default TaskList;
