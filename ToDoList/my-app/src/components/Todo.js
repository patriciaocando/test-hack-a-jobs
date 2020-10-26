import React from 'react';
import classNames from 'classnames'

export default function Todo({id, text, done, index, deleteTodo, toggleTodo}){
    
    const pClasNames = classNames('todoText', done ? 'todoDone' : null)

    return( <section className="todoItem">
    
    <p>{index+1}</p>
    <input
    type="checkbox"
    checked={done}
    onChange={() => {
        toggleTodo(id);
      }}
/>
    <p className={pClasNames} >{text}</p> 

    <button
    className="delete"
    onClick={() => {
        deleteTodo(id) }}> Delete</button>
     </section>
     );
}