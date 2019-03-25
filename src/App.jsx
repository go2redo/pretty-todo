import React, { Component } from 'react';
import Todo from './Todo';
class App extends Component {
  render() {
    return (
      <main className="app-height-1-1 uk-flex uk-flex-wrap uk-flex-center uk-flex-middle uk-background-primary">
        <Todo />
      </main>
    );
  }
}

export default App;
