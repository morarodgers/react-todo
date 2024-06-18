function AddTodoForm() {
  return (
    <div>
      <h3>Add Todo</h3>
      <form>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
