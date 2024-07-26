import { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

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
        {/* <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
          placeholder="Add new item"
        /> */}
        <InputWithLabel
          id="todoTitle"
          name="title"
          value={todoTitle}
          onInputChange={handleTitleChange}
          placeholder="Add new item"
        >
          Title:
        </InputWithLabel>
        <button type="submit">Add</button>
        {/* <button type="submit">Delete</button> */}
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
