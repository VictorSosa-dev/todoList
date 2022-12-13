import React from 'react';
import './HeaderTodo.css';

function HeaderTodo(props) {

  return (
    <div className="card-header">
      <h4 className="card-header-title header">
        Hay {props.todos.length} tareas
      </h4>
    </div>
  )
};

export default HeaderTodo;