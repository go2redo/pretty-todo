import React from 'react';

const TodoModal = ({ setUserName, username }) => {
  return (
    <div>
      <span className="uk-link" href="" uk-toggle="#modal">
        <span uk-icon="icon: more" />
      </span>
      <div id="modal" className="uk-modal-full" uk-modal="true">
        <div
          className="uk-modal-dialog uk-padding uk-flex uk-flex-wrap uk-flex-center uk-flex-middle"
          uk-height-viewport="true"
        >
          <button
            className="uk-modal-close-full uk-close-large"
            type="button"
            uk-close="true"
          />
          <div>
            <form onSubmit={setUserName}>
              <div className="uk-flex uk-flex-middle">
                <input
                  className="uk-input uk-margin-right uk-width-1-1"
                  type="text"
                  placeholder="Enter your name..."
                  required
                  name="setUserName"
                  defaultValue={username}
                />
                <button type="submit" className="uk-button uk-button-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoModal;
