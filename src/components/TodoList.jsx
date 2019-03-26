import React from 'react';
import TodoListItemContainer from '../containers/TodoListItemContainer';

const TodoList = ({ todos }) => {
  const createList = todos =>
    todos.map(item => <TodoListItemContainer key={item.id} data={item} />);

  return <ul className="uk-list">{createList(todos)}</ul>;
};

export default TodoList;
