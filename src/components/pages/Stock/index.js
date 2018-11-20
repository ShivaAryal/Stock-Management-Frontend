import React, { Component } from 'react';
import { Tabs,Icon } from 'antd';
import DhanStock from './DhanStock'
import ChamalStock from './ChamalStock';
import BranStock from './BranStock';
import KanikaStock from './KanikaStock';
import BhushStock from './BhushStock';

const TabPane = Tabs.TabPane;
class Stock extends Component {
    render() { 
        return ( <div style={{flex:1}}>
            <Tabs type="card">
      <TabPane tab="Chamal Stock" key="1">
        <ChamalStock/>
      </TabPane>
      <TabPane tab="Bran Stock" key="2">
        <BranStock/>
      </TabPane>
      <TabPane tab="Kanika Stock" key="3">
        <KanikaStock/>
      </TabPane>
      <TabPane tab="Bhush Stock" key="4">
        <BhushStock/>
      </TabPane>
      <TabPane tab="Dhan Stock" key="5">
        <DhanStock/>
      </TabPane>
    </Tabs>
        </div> );
    }
}
 
export default Stock;