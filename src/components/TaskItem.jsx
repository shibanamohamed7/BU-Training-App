import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const isOverdue = new Date(task.dueDate) < new Date();

  return (
    <Card sx={{ marginBottom: 4, boxShadow: "none" }}>
      <CardContent
        style={{ padding: "16px" }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          mx: 4,
          border: "1px solid #a8a8a8",
          boxShadow: "0 6px 6px hsl(0deg 0% 0% / 0.3)",
          borderRadius: 1,
          backgroundColor: task.completed ? "#e0ffe0" : "#fff",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          sx={{ overflowX: "scroll", width: "300px", height: "auto" }}
        >
          {task.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ overflowX: "scroll", width: "200px", height: "auto" }}
        >
          {task.description}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "200px" }}
        >
          Due Date: {task.dueDate}{" "}
          {isOverdue && !task.completed ? (
            <span style={{ color: "red" }}>(Overdue)</span>
          ) : (
            ""
          )}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "200px" }}
        >
          Priority: {task.priority}
        </Typography>

        <Button
          onClick={completeTask}
          variant="outlined"
          color={task.completed ? "secondary" : "primary"}
          style={{ marginRight: "1rem" }}
        >
          {task.completed ? "Undo" : "Complete"}
        </Button>
        <Button onClick={deleteTask} variant="outlined" color="error">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskItem;