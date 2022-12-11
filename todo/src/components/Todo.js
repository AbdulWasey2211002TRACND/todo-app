import './Todo.css'
import React, { useState } from 'react';



function App() {

  const [formvis, setVisibilty] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoediting, setTodoEditing] = React.useState(null);
  const [editingtext, setEditingText] = React.useState("");



  //function for adding todo
  function addTodo(e) {
    e.preventDefault();

    const description =e.target.Description.value;
    const duedate =e.target.DueDate.value;


    if (todo !== "") {
      const todoroadd = {
        id: new Date().getTime(),
        title: todo,
        description: description,
        duedate : duedate
      }

      setTodos([...todos].concat(todoroadd))
      console.log(todos)
      setTodo("");

    }
  }

  //function for deleting todo
  function deleteTodo(id) {
    const updatedtodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedtodo);

  }

  //function for saving todo
  function saveEdit(id) {
    const updatedtodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.title = editingtext;
      }
      return todo;
    })

    setTodos(updatedtodo);
    setTodoEditing(null);
    setEditingText("")
  }

  //function for visibilty of form
  function setVisib() {
    setVisibilty(!formvis)
  }


  return (
    <div className="App">
      <h1>Todo App</h1>
      {formvis ?

        <form onSubmit={addTodo}>
        <input type="text" className='input-wrapper' value={todo} required  placeholder="Title" onChange={(e)=>setTodo(e.target.value)}></input>
          <input type="text" className='input-wrapper' placeholder="Description"  name = 'Description'></input>
          <input type="text" className='input-wrapper' placeholder="Due Date" name = 'DueDate' ></input>
          <button className='add-button' type="submit">Add</button>
        </form>

        :

        <button onClick={setVisib} className='add-button1'>Add Todos</button>
      }



      <ul>

        {todos.map((todo) =>

        (todoediting === todo.id

          ?
          <div className='todo'>
            <input type="text" className='input-wrapper' placeholder='Edit Title' value={editingtext} onChange={(e) => setEditingText(e.target.value)}></input>
            <button className='save-button1' onClick={() => saveEdit(todo.id)}> Save </button>
          </div>
          :

          <div className='todo'>
            <li key={todo.id} > Title : {todo.title} <p>Description: {todo.description}</p>Due Date:  {todo.duedate}<p></p></li>

            <button onClick={() => deleteTodo(todo.id)} className='delete-button'> Delete</button>
            <button onClick={() => setTodoEditing(todo.id)} className='edit-button'> Edit</button>

          </div>

        )
        )

        }

      </ul>

    </div>
  );
};



export default App;