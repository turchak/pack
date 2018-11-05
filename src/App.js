// @flow
import React, { Component } from 'react';
import './App.css';

type Props = {};

type State = {
  name: string
};

class App extends  Component<Props, State> {
  state = {
    name: 'sergey',
  }
  render() {
    const { name } = this.state;
    return (
      <div className="App">
        {name}
      </div>
    );
  }
}

export default App;
