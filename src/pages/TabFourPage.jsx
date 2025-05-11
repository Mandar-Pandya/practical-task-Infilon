import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TabFourPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo({ id: Date.now(), title: inputValue }));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
  };
  return (
    <Box>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Add a new task"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </Box>
      {todos.length > 0 && (
        <List sx={{ maxHeight: "400px", overflow: "auto" }}>
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Button
                  edge="end"
                  onClick={() => handleDeleteTodo(todo?.id)}
                  aria-label="delete"
                >
                  delete
                </Button>
              }
            >
              <ListItemText primary={todo?.title} />
            </ListItem>
          ))}
        </List>
      )}

      {todos.length === 0 && (
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          mt={2}
        >
          No tasks yet. Add one above!
        </Typography>
      )}
    </Box>
  );
};

export default TabFourPage;
