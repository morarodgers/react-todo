import { useState } from "react";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  //const [todoTitle, setTitle] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    //const newTitle = event.target.value;
    //setTitle(newTitle);
    //setTodoTitle(newTitle);
    if (todoTitle.trim()) {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
      };
      onAddTodo(newTodo);
      setTodoTitle("");
    }
    //console.log(newTitle);
  };

  /*  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoTitle.trim()) {
      addTodo({
        id: Date.now(),
        title: todoTitle,
        url: "#",
      });
      // Reset the form
      setTodoTitle("");

      // Reset newTodo state in App component
      onAddTodo("");
    }
  }; */

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle}
          //onChange={handleAddTodo}
          onChange={handleTitleChange}
          placeholder="Add new item"
        />
        <button type="submit">Add</button>
        <br />
        <p>
          Adding <strong>{todoTitle}</strong>.
        </p>
      </form>
    </div>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
