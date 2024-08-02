import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const [search, setSearch] = useStorageState("search", "React");
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve /* reject */) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const searchList = (title) => {
    const searchedList = todoList.filter((todo) =>
      todo.title.toLowerCase().includes(title.toLowerCase())
    );
    setTodoList(searchedList);
  };
  // Function to remove todo
  const removeTodo = (id) => {
    const modifiedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(modifiedList);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    searchList(event.target.value);
  };

  return (
    <>
      <Header />
      <h1>Todo List</h1>

      <Search onSearch={handleSearch} search={search} />
      <hr />

      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <div className="load-container">
          <div className="spinner"></div>
          <p className="loading-text">
            <strong>Loading...</strong>
          </p>
        </div>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      <Footer />
    </>
  );
};

export default App;
