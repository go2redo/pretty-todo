import React from 'react';

const TodoListInput = () => (
  <li className="uk-flex uk-flex-middle uk-margin-bottom">
    <form className="uk-width-1-1">
      <div className="uk-inline uk-width-1-1">
        <button
          type="submit"
          className="app-outline-none uk-form-icon uk-form-icon-flip"
          uk-icon="icon: plus-circle"
        />
        <input
          className="uk-input uk-width-1-1"
          type="text"
          placeholder="What needs to be done?"
          required
        />
      </div>
    </form>
  </li>
);

export default TodoListInput;
