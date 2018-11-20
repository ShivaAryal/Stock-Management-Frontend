import React, { Component } from 'react';
import { Tabs,Icon } from 'antd';
import ChamalSales from './ChamalSales';
import BranSales from './BranSales';
import KanikaSales from './KanikaSales';
import BhushSales from './BhushSales';

const TabPane = Tabs.TabPane;
class Sales extends Component {
    // state = { sales:[{

    // }] }
    render() { 
        return ( <div style={{flex:1}}>
            <Tabs type="card">
      <TabPane tab="Chamal Sales" key="1">
        <ChamalSales/>
      </TabPane>
      <TabPane tab="Bran Sales" key="2">
        <BranSales/>
      </TabPane>
      <TabPane tab="Kanika Sales" key="3">
        <KanikaSales/>
      </TabPane>
      <TabPane tab="Bhush Sales" key="4">
        <BhushSales/>
      </TabPane>
    </Tabs>
        </div> );
    }
}
 
export default Sales;