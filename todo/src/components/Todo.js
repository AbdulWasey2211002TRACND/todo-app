import './Todo.css'
import React, { useState } from 'react';




const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
      if (todo !== "") {
        setTodos([...todos, todo]);
        setTodo("");
      }
    };

    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => {
        return todo !== text;
      });
      setTodos(newTodos);
    };

    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo}  />

      </div>
    );
  };


const TodoInput = ({ title,Details,Due ,setTodo, addTodo }) => {
    return (
      <div className="input-wrapper">
        <input
          className='input-todo'
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
         <input
          className='input-todo'
          type="text"
          name="Details"
          value={Details}
          placeholder="Details"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
         <input
          className='input-todo'
          type="text"
          name="due"
          value={Due}
          placeholder="Due Date"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
    );
  };




  const TodoList = ({ list, remove,edit }) => {
    return (
      <>
        {list?.length > 0 ? (
          <ul className="todo-list">
            {list.map((entry, index) => (
              <div className="todo">
                <li key={index}> {entry} </li>

                <button
                  className="delete-button"
                  onClick={() => {
                    remove(entry);
                  }}
                >
                  Delete
                </button>

                <button
                  className="edit-button"
                  onClick={() => {
                    edit(entry);
                  }}
                >
                  Edit
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No tasks found</p>
          </div>
        )}
      </>
    );
  };

  export default App;