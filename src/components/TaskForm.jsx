import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, dueDate } = task;
    if (!title || !dueDate) {
      alert("Please enter a valid title and due date");
      return;
    }
    addTask(task);
    setTask({ title: "", description: "", dueDate: "", priority: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem 0",
      }}
    >
      <TextField
        sx={{ minWidth: 250 }}
        name="title"
        value={task.title}
        onChange={handleChange}
        label="Task Title"
        variant="outlined"
        required
        margin="normal"
      />
      <TextField
        sx={{ minWidth: 250 }}
        name="description"
        value={task.description}
        onChange={handleChange}
        label="Task Description"
        variant="outlined"
        margin="normal"
      />
      <TextField
        sx={{ minWidth: 250 }}
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleChange}
        margin="normal"
        required
      />

      <FormControl sx={{ minWidth: 250 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          name="priority"
          value={task.priority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{
          minWidth: 150,
          height: 48,
          backgroundColor: "#1a57e6",
          color: "#fff",
          "&:hover": {
            borderRadius: 24,
            transition: "0.2s ease-in-out",
          },
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
