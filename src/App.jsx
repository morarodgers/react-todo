import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [search, setSearch] = useState("search", "React");
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  // Function to remove todo
  const removeTodo = (id) => {
    const modifiedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(modifiedList);
  };

  return (
    <>
      <Header />
      <h1>Todo List</h1>

      <Search onSearch={handleSearch} search={search} />
      <hr />

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

      <Footer />
    </>
  );
};

export default App;
