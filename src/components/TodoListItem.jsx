import React from 'react';

const TodoListItem = ({ data, editTodo, toogleTodo, deleteTodo }) => {
  const { id, text, completed } = data;

  return (
    <React.Fragment>
      <li className="uk-flex uk-flex-middle uk-animation-slide-bottom-small">
        <span className="uk-margin-right">
          <input
            id={id}
            className="uk-checkbox"
            type="checkbox"
            defaultChecked={completed}
            onClick={() => toogleTodo(data)}
            name="toogleTodo"
          />
        </span>
        <div className="uk-inline uk-width-1-1">
          <button
            type="button"
            className="app-outline-none uk-form-icon uk-form-icon-flip uk-text-danger"
            uk-icon="icon: minus-circle"
            onClick={() => deleteTodo(data)}
            name="deleteTodo"
          />
          <input
            className={`uk-input uk-form-blank uk-form-width-expand ${
              completed ? 'app-line-through' : ''
            }`}
            type="text"
            defaultValue={text}
            onChange={e => editTodo(e, data)}
            name="editTodo"
          />
        </div>
      </li>
    </React.Fragment>
  );
};
export default TodoListItem;
