import React, { useState } from "react";

//packages imports
import {
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";

//components
import TodoList from "./TodoList";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilter = (data) => {
    setAnchorEl(null);
    if (data === "complete") {
      setFilterTodo(todo.filter((todo) => todo.completed === true));
    } else if (data === "pending") {
      setFilterTodo(todo.filter((todo) => todo.completed === false));
    } else {
      setFilterTodo([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: uuid(), todo: input, completed: false }]);
    setInput("");
  };

  return (
    <Box mt={2} p={5}>
      <Box display="flex" mb={2}>
        <Box flexGrow={1}>
          <Typography variant="h5">TodoList</Typography>
        </Box>
        <Button variant="outlined" onClick={handleMenu} size="small">
          Filter
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleFilter}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleFilter}>All</MenuItem>
          <MenuItem onClick={() => handleFilter("complete")}>
            Completed
          </MenuItem>
          <MenuItem onClick={() => handleFilter("pending")}>Pending</MenuItem>
        </Menu>
      </Box>

      <Box display="flex">
        <Box mr={2} width="100%">
          <TextField
            fullWidth
            label="Enter todo"
            variant="outlined"
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      </Box>
      <Box mt={5}>
        {todo.length === 0 ? (
          <Typography>No todo...</Typography>
        ) : filterTodo.length !== 0 ? (
          <TodoList todo={filterTodo} setTodo={setFilterTodo} />
        ) : (
          <TodoList todo={todo} setTodo={setTodo} />
        )}
      </Box>
    </Box>
  );
};

export default Todo;
