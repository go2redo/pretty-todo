import React, { Component } from 'react';
import TodoListInput from '../components/TodoListInput';

import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

class TodoInputContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { addTodo } = this.props;
    e.preventDefault();
    addTodo(e.target['addTodo'].value);
    e.target['addTodo'].value = '';
  }

  render() {
    return <TodoListInput addTodo={this.handleSubmit} />;
  }
}

export default connect(
  null,
  dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
  }),
)(TodoInputContainer);
