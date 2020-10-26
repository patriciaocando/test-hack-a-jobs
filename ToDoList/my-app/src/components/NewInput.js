import React from "react";

export default function NewTodo({ addTodo }) {
  const [newTodoText, setNewTodoText] = React.useState("");

  const sendToDo = () => {
    if (newTodoText.length > 0 && newTodoText.length < 200) {
      addTodo(newTodoText);
      setNewTodoText("");
    }   };


    return(
    <section className="newTodo">
      <fieldset>
          
        <input
        type="text"
        id="new"
        className="input"
        value={newTodoText}
          onChange={(event) => {
          setNewTodoText(event.target.value);
          }}
       />

        <button className="addTodo" onClick={sendToDo}>+ Add ToDo</button>
      </fieldset>
    </section>
    );
}
