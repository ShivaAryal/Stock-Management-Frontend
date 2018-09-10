import React, { Component } from 'react';
import { Layout, Menu, Icon,message } from 'antd';
import './../../../index.css'
const { Sider } = Layout;

class Sidebar extends Component {
  onPress=(key)=>{
    this.props.onPress(key.key);
  }
  element(){
    if(!this.props.collapsed) return(<img style={{width:125,height:125,borderRadius:100,alignSelf:'center',margin:20}} src={require('./../../../images/ronaldo.jpg')}/>)
  }
  render() {
    return (
      <Sider
          style={{backgroundColor:'#EEEEEE'}}
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          {this.element()}
          <Menu style={{backgroundColor:'#EEEEEE'}} mode="inline" defaultSelectedKeys={['1']} onClick={this.onPress}>
            <Menu.Item key="1">
                <Icon type="home" />
                <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                <span>Customer</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="meh-o" />
              <span>Owner</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="smile-o" />
              <span>Profit</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="frown-o" />
              <span>Loss</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default Sidebar;