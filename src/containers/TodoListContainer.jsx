import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
  render() {
    return <TodoList todos={this.props.todos} />;
  }
}

export default connect(state => ({ todos: state.todos }))(TodoListContainer);
