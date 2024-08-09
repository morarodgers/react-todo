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
  const [search, setSearch] = useStorageState("search", "");
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Create a new async function fetchData
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    // URL for the Airtable API
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      // if the response is not okay, throw an error
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse the response as JSON
      const data = await response.json();
      console.log(data);

      // Map records into an array of todo items
      const todos = data.records.map((todo) => {
        const newTodo = {
          title: todo.fields.Title,
          id: todo.id,
        };
        console.log(newTodo);
        return newTodo;
      });
      console.log(todos);

      // Set todo list
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    /* setIsLoading(true);
    new Promise((resolve, reject) => {
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
    }); */
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  // Function to remove todo
  const removeTodo = (id) => {
    const modifiedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(modifiedList);
  };

  // Function to search todo list
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredList = todoList.filter(
    (todo) =>
      todo.title && todo.title.toLowerCase().includes(search.toLowerCase())
  );

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
        <TodoList todoList={filteredList} onRemoveTodo={removeTodo} />
      )}
      <Footer />
    </>
  );
};

export default App;
