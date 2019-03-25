import React from 'react';
import TodoListItem from './TodoListItem';
import TodoListInput from './TodoListInput';

const TodoList = () => (
  <ul className="uk-list">
    <TodoListInput />
    <TodoListItem />
  </ul>
);

export default TodoList;
