import React from 'react';

const TodoListItem = () => (
  <React.Fragment>
    <li className="uk-flex uk-flex-middle">
      <span className="uk-margin-right">
        <input id="id1" className="uk-checkbox" type="checkbox" />
      </span>
      <div className="uk-inline uk-width-1-1">
        <button
          type="submit"
          className="app-outline-none uk-form-icon uk-form-icon-flip uk-text-danger"
          uk-icon="icon: minus-circle"
        />
        <input
          className="uk-input uk-form-blank uk-form-width-expand app-line-through"
          type="text"
          value="Form blank"
        />
      </div>
    </li>
    <li className="uk-flex uk-flex-middle">
      <span className="uk-margin-right">
        <input id="id2" className="uk-checkbox" type="checkbox" />
      </span>
      <div className="uk-inline uk-width-1-1">
        <button
          type="submit"
          className="app-outline-none uk-form-icon uk-form-icon-flip uk-text-danger"
          uk-icon="icon: minus-circle"
        />
        <input
          className="uk-input uk-form-blank uk-form-width-expand"
          type="text"
          value="Form blank"
        />
      </div>
    </li>
  </React.Fragment>
);

export default TodoListItem;
