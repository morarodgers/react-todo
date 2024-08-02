import { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import Button from "./Button";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

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
          >
            Title:
          </InputWithLabel>
          &nbsp;
          <Button handleClick={handleAddTodo} className="add" type="submit">
            Add
          </Button>
        </span>
        <p>
          Adding: <strong>{todoTitle}</strong>
        </p>
      </form>
    </>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
