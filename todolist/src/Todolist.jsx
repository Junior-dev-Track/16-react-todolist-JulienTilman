// App.jsx
import React, { useState } from "react";

function Todolist() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Be awesome", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return; // Don't add empty todos
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const handleCheckboxChange = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Type new todo..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
