import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const item = {
      id: todos.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, item]);
    setInput("");
  };
  const toggelCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo; //IMPORTANT ADITI...
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id; //IMPORTANT...
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Enter a Todo"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggelCompleted(todo.id)}
              />
              <span className={todo.completed ? "strike" : ""}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
