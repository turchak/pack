// @flow
import * as React from 'react';
import { Layout } from 'antd';
import HeaderMenu from './Components/HeaderMenu';
import Logo from './Components/Logo';
import Сalculator from './Components/Сalculator/';
// import Footer from './Components/Footer';
import Button from 'antd/lib/button';
import './App.sass';


const { Content, Header, Footer } = Layout;

type Props = {};

type State = {};

class App extends  React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <Header className="header">
          <Logo />
          <HeaderMenu />
        </Header>
        <Content className="main">
          <Сalculator />
        </Content>
        <Footer className="footer">2018</Footer>
      </React.Fragment>
    );
  }
}

export default App;
