// @flow
import * as React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from 'antd/lib/button';
import './App.sass';

type Props = {};

type State = {
  name: string
};

class App extends  React.Component<Props, State> {
  state = {
    name: 'Hello',
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <Header />
        <Button type="primary">Button</Button>
        <Footer />  
      </div>
    );
  }
}

export default App;
