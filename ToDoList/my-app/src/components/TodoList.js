import React from 'react';
import Todo from './Todo';

export default function TodoDoList({todos,deleteTodo, toggleTodo}){
function emptyState(){
    if(todos.length===0){
        return true;
    }
}
    
    return ( <>
         <span> {emptyState()? <p className="notTodo">Not todo Here</p> : null }</span>
    <ul>
        {todos.map((item, index)=>{

            return(
        <li key={item.id}>
        
             <Todo {...item}
             index={index}
             deleteTodo={deleteTodo}
             toggleTodo={toggleTodo}/>
        </li>
            );
        })}        
    </ul>
    </>
    )
}