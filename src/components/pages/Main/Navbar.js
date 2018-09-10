import React, { Component } from 'react';
import { Layout, Icon,Dropdown,Menu } from 'antd';
import './../../../index.css'

class Navbar extends Component {

  menu = (
    <Menu>
      <Menu.Item key="1" style={{fontSize:20,fontFamily:'sans-seriff',padding:'10px 20px'}}>Profile</Menu.Item>
      <Menu.Item key="2" style={{fontSize:20,fontFamily:'sans-seriff',padding:'10px 20px'}}>Logout</Menu.Item>
      {/* <Menu.Item key="3" style={{fontSize:20,fontFamily:'sans-seriff'}}>3rd menu item</Menu.Item> */}
    </Menu>
  );
  render() {
    return (
      <Layout.Header style={{ background: '#EEEEEE', padding: 0,display:'flex',flexDirection:'row',height:70 }}>
        <Icon
          style={{color:'#000'}}
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <div>
          <h1 style={{fontFamily:'sans-seriff',fontSize:30,marginTop:13,marginLeft:20,color:'#000'}}>Stock Management</h1>
        </div>
        <div style={{display:'flex',flex:1,justifyContent:'flex-end',margin:10}}>
          <img style={{width:50,height:50,borderRadius:40}} src={require('./../../../images/ronaldo.jpg')} />
          <Dropdown overlay={this.menu}>
            <Icon style={{fontSize:20,margin:15,marginLeft:30}} type="caret-down" />
          </Dropdown>
        </div>
      </Layout.Header>
    );
  }
}

export default Navbar;