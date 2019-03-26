import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setUserName } from '../store/actions';

import TodoModal from '../components/TodoModal';
class TodoModalContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { setUserName } = this.props;
    e.preventDefault();
    setUserName(e.target['setUserName'].value);
  }

  render() {
    return <TodoModal setUserName={this.handleSubmit} />;
  }
}

export default connect(
  null,
  dispatch => ({
    setUserName: text => dispatch(setUserName(text)),
  }),
)(TodoModalContainer);
