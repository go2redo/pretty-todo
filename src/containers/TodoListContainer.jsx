import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editTodo, toogleTodo, deleteTodo } from '../store/actions';

import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleToogle = this.handleToogle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToogle(e) {
    this.props.toogleTodo(e.id);
  }

  handleDelete(e) {
    this.props.deleteTodo(e.id);
  }

  handleChange(e, data) {
    this.props.editTodo({
      ...data,
      text: e.target.value,
    });
  }

  render() {
    return (
      <TodoList
        todos={this.props.todos}
        toogleTodo={this.handleToogle}
        editTodo={this.handleChange}
        deleteTodo={this.handleDelete}
      />
    );
  }
}

export default connect(
  state => ({ todos: state.todos }),
  dispatch => ({
    toogleTodo: id => dispatch(toogleTodo(id)),
    editTodo: payload => dispatch(editTodo(payload)),
    deleteTodo: id => dispatch(deleteTodo(id)),
  }),
)(TodoListContainer);
