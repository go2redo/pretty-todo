import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserName } from '../store/actions';

import Todo from '../components/Todo';

class TodoContainer extends Component {
  render() {
    return <Todo data={this.props.data} setUserName={this.props.setUserName} />;
  }
}

export default connect(
  state => ({ data: state }),
  dispatch => ({
    setUserName: text => dispatch(setUserName(text)),
  }),
)(TodoContainer);
