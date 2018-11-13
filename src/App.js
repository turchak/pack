// @flow
import * as React from 'react';
import { Layout } from 'antd';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import Button from 'antd/lib/button';
import './App.sass';
const { Content, Header, Footer } = Layout;

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
      <React.Fragment>
        <Header />
        
        <Content>Hello</Content>
        <Footer />  
      </React.Fragment>
    );
  }
}

export default App;
