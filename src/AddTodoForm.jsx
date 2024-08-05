import { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import Button from "./Button";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Functions to handle focus and blur events
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle.trim()) {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
      };
      onAddTodo(newTodo);
      setTodoTitle("");
    }
    setIsFocused(true);
  };

  return (
    <>
      <h3>Add Todo</h3>
      <form onSubmit={handleAddTodo}>
        <span className="TodoListItem">
          <InputWithLabel
            id="todoTitle"
            name="title"
            value={todoTitle}
            onInputChange={handleTitleChange}
            placeholder="Add new item"
            isFocused={isFocused}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            Title:
          </InputWithLabel>
          &nbsp;
          <Button handleClick={handleAddTodo} className="add" type="submit">
            Add
          </Button>
        </span>
        {/* Display a message when user types in search input*/}
        {isFocused && todoTitle && (
          <p>
            Adding: <strong>{todoTitle}...</strong>
          </p>
        )}
      </form>
    </>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
