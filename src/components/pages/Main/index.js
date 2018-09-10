import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Layout, Menu, Icon } from 'antd';
import Home from './../Home/HomeComponent';
import Customer from './../Customer/CustomerComponent'

const { Header, Content } = Layout;
class Main extends Component {
  state = {
    collapsed: false,
    route:Home
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onPress=(key)=>{
    if(key==1){ this.setState({route:Home});}
    if(key==2){ this.setState({route:Customer});}
    // if(key===3) this.setState({route:Owner})
    // if(key===4) this.setState({route:Profit})
    // if(key===5) this.setState({route:Loss})
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