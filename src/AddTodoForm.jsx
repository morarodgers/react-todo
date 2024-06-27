import { useState } from "react";
import PropTypes from "prop-types";

const AddTodoForm = ({ addTodo, onAddTodo }) => {
  const [todoTitle, setTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTitle = event.target.value;
    setTitle(newTitle);
    onAddTodo(newTitle);
    console.log(newTitle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoTitle.trim()) {
      addTodo({
        id: Date.now(),
        title: todoTitle,
        url: "#",
      });
      // Reset the form
      setTitle("");

      // Reset newTodo state in App component
      onAddTodo("");
    }
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleAddTodo}
          placeholder="Add new item"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
