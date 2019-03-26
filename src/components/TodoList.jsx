import React from 'react';
import TodoListItem from '../components/TodoListItem';

const TodoList = ({ todos, editTodo, toogleTodo, deleteTodo }) => {
  const createList = todos =>
    todos.map(item => (
      <TodoListItem
        key={item.id}
        data={item}
        toogleTodo={toogleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    ));

  return <ul className="uk-list">{createList(todos)}</ul>;
};

export default TodoList;
