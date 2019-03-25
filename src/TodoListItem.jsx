import React from 'react';

const TodoListItem = () => (
  <React.Fragment>
    <li className="uk-flex uk-flex-middle">
      <span className="uk-margin-right">
        <input id="id1" className="uk-checkbox" type="checkbox" />
      </span>
      <input
        className="uk-input uk-form-blank uk-form-width-expand app-line-through"
        type="text"
        value="Form blank"
      />
    </li>
    <li className="uk-flex uk-flex-middle">
      <span className="uk-margin-right">
        <input id="id2" className="uk-checkbox" type="checkbox" />
      </span>
      <input
        className="uk-input uk-form-blank uk-form-width-expand"
        type="text"
        value="Form blank"
      />
    </li>
  </React.Fragment>
);

export default TodoListItem;
