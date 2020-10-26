import React from "react";
import { v1 } from "uuid";

import './App.css';
//newtodocomponent
import NewInput from './components/NewInput';
import TodoDoList from './components/TodoList';

function App() {
  //Initial state of todo's list
  const [todos, setTodos] = React.useState([]);

    //Estructure of the ToDo and set a copy
    //of the new todo above the todos already exists.
    const addTodo = (todoText) => {
      const todo = {
        id: v1(),
        text: todoText,
        done: false,
      };
      setTodos([todo, ...todos]);
    };

    //Update the list of ToDos checking the todo marked as done by its id
    const toggleTodo = (id) => {

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
          return todo;
      });
      setTodos(updatedTodos);
    };
  
    //Erease a ToDo from array filtering it by its id
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  

  return (
    <>
    <h1>To Do app in ReactJS</h1>

    <TodoDoList todos={todos}
    toggleTodo={toggleTodo}
    deleteTodo={deleteTodo}/>

    <NewInput addTodo={addTodo}/>
    </>
  );
}

export default App;
