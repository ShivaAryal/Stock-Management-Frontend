import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Layout, Menu, Icon } from 'antd';
import Home from './../Home/HomeComponent';
import LoginPage from './../LoginPage'
import Transactioner from './../Transactioner'
import Sales from './../Sales';
import Stock from './../Stock';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
 
const { Header, Content } = Layout;
class Main extends Component {
  state = {
    collapsed: false,
    route:Home,
    logOut:false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onPress=(key)=>{
    if(key==1){ this.setState({route:Home});}
    if(key==2){this.setState({route:Transactioner})}
    if(key==3){this.setState({route:Sales})}
    if(key==4){this.setState({route:Stock})}
  }
  render() {
    return (
      <Layout id="dashboard">
        <Sidebar collapsed={this.state.collapsed} onPress={this.onPress}/>
        <Layout>
          <Navbar collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content style={{margin:'5px 5px',padding:5}}>
            <Route path={''} exact component={this.state.route} />
            {/* <Route path={'/customer'} exact component={Home} /> */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;