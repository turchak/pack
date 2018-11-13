import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HeaderMenu extends Component {
    state = {
        current: 'calculate',
      }
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render() {
        return (
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="about">
                <Icon type="exclamation-circle" theme="twoTone" />About us
            </Menu.Item>
            <Menu.Item key="calculate">
                <Icon type="calculator" theme="twoTone" />Calculate
            </Menu.Item>
            <Menu.Item key="price">
                <Icon type="dollar" theme="twoTone" />Price
            </Menu.Item>
            <Menu.Item key="delivery-payment">
                <Icon type="car" theme="twoTone" /><Icon type="credit-card" theme="twoTone" />Delivery&Payment
            </Menu.Item>
          </Menu>
        );
      }
}

export default HeaderMenu;
