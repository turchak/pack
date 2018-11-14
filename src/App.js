// @flow
import * as React from 'react';
import { Layout } from 'antd';
import HeaderMenu from './Components/HeaderMenu';
import Logo from './Components/Logo';
// import Footer from './Components/Footer';
import Button from 'antd/lib/button';
import './App.sass';


const { Content, Header, Footer } = Layout;

type Props = {};

type State = {};

class App extends  React.Component<Props, State> {
  state = {
    name: 'Hello',
  }
  render() {
    const { name } = this.state;
    return (
      <React.Fragment>
        <Header className="header">
          <Logo />
          <HeaderMenu />
        </Header>
        <Content>Hello</Content>
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
