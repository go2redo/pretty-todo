import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';

class TodoContainer extends Component {
  render() {
    return <Todo data={this.props.data} />;
  }
}

export default connect(state => ({ data: state }))(TodoContainer);
