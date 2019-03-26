import React, { Component } from 'react';
import TodoModal from '../components/TodoModal';
import UIkit from 'uikit';

import { save, get, exist } from '../localStorage';

class TodoModalContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!exist()) {
      UIkit.modal('#modal').show();
    }
  }

  handleSubmit(e) {
    const { setUserName } = this.props;
    e.preventDefault();
    setUserName(e.target['setUserName'].value);
    UIkit.modal('#modal').hide();
  }

  render() {
    return (
      <TodoModal
        username={this.props.username}
        setUserName={this.handleSubmit}
      />
    );
  }
}

export default TodoModalContainer;
