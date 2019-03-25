import React from 'react';
import TodoModal from './TodoModal';
import TodoList from './TodoList';

const Todo = () => (
  <section className="app-todo-container uk-width-xlarge uk-card uk-card-default uk-card-hover ">
    <div className="uk-card-header">
      <h1 className="uk-h2  uk-margin-small-bottom uk-flex uk-flex-between">
        <div>Hello gotoredo!</div>
        <TodoModal />
      </h1>
      <h2 className="uk-h6 uk-margin-remove uk-text-uppercase uk-flex uk-flex-middle">
        <span className="uk-badge uk-margin-small-right">1</span>
        <span className="uk-text-muted">to do</span>
      </h2>
    </div>
    <div className="uk-card-body">
      <TodoList />
    </div>
  </section>
);

export default Todo;
