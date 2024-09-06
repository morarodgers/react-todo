import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    // URL for the Airtable API
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await axios.get(url, options);

      // Parse the response as JSON
      const data = response.data;

      // Map records into an array of todo items
      const todos = data.records.map((todo) => ({
        title: todo.fields.Title,
        id: todo.id,
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Async function to post data
  const postTodo = async (todo) => {
    try {
      const newItem = {
        fields: {
          Title: todo,
        },
      };

      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${import.meta.env.VITE_TABLE_NAME}`;

      const response = await axios.post(url, newItem, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      });

      const data = response.data;
      const addedTodo = {
        title: data.fields.Title,
        id: data.id,
      };

      return addedTodo;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  useEffect(() => {
    // Call the fetchData function
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (todoTitle) => {
    const addedTodo = await postTodo(todoTitle);
    if (addedTodo) {
      setTodoList([...todoList, addedTodo]);
    }
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        {/* Added routes */}
        <Route path="/new" element={<h1>New Todo List</h1>} />
        <Route
          path="/more"
          element={
            <a href="https://www.linkedin.com/in/morarodgers/" target="_blank">
              <h4>Let us connect</h4>
            </a>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
