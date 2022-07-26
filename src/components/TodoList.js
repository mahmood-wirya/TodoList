import React from 'react'
import Todo from './Todo';

export default function TodoList({todos, setTodos}) {
  return (
    
    <div className="todo-container">
      <ul className="todo-list">
      {todos.map( (todo) => (
     <Todo setTodos={setTodos}
           todos={todos} 
           key={todo.id}
           todo={todo} 
           Text={todo.Text} />
      ))}
      </ul>
    </div>
  );
};
