import React from "react";

//packages imports
import { Box, Button, Checkbox, Typography } from "@mui/material";

const TodoList = ({ todo, setTodo }) => {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleComplete = (data) => {
    setTodo(
      todo.map((item) => {
        if (item.id === data.id) {
          return { ...item, completed: true };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {todo.map((item, i) => (
        <Box
          key={i}
          display="flex"
          mb={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Checkbox
              size="small"
              onClick={() => handleComplete(item)}
              checked={item.completed}
            />
          </Box>
          <Box flexGrow={1}>
            <Typography>{item.todo}</Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleDelete(item)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default TodoList;
