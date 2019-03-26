import React, { Component } from 'react';
import TodoListItem from '../components/TodoListItem';

import { connect } from 'react-redux';
import { editTodo, toogleTodo, deleteTodo } from '../store/actions';

class TodoListItemContainer extends Component {
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

  handleChange(e) {
    console.log(e.id, e.text);
    this.props.editTodo(e.id, e.text);
  }

  render() {
    return (
      <TodoListItem
        data={this.props.data}
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
    editTodo: (id, text) => dispatch(editTodo(id, text)),
    deleteTodo: id => dispatch(deleteTodo(id)),
  }),
)(TodoListItemContainer);
