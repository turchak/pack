import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';

class Logo extends Component {
    render() {
        return (
            <div style={{ width: `${100}px`}}>
                <img src={logo} alt="logo"></img>
            </div>
        );
    }
}

export default Logo;
