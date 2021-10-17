import React from 'react';
import ToDo from './ToDo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div class="todo-container">
      <ul class="todo-list">
        {filteredTodos.map(todo => (
          <ToDo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;