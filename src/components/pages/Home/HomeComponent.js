import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
const chartConfigs = {
    type: 'column2d',
    width:600,
    height:400,
    // width:(window.getInnerWidth>800)?600:400,
    // height: (window.getInnerWidth>800)?400:300,
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Monthly profits[2018]",
            "xAxisName": "Months",
            "yAxisName": "Profits(in Rs.)",
            "numberSuffix": "k",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "January",
            "value": "290"
        }, {
            "label": "February",
            "value": "260"
        }, {
            "label": "March",
            "value": "180"
        }, {
            "label": "April",
            "value": "140"
        }, {
            "label": "May",
            "value": "689"
        }, {
            "label": "July",
            "value": "100"
        }, {
            "label": "August",
            "value": "30"
        }, {
            "label": "September",
            "value": "-90"
        },{
            "label": "October",
            "value": "430"
        },{
            "label": "November",
            "value": "830"
        },{
            "label": "December",
            "value": "110"
        }]
    } }
   Charts(FusionCharts);
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout>
                <div style={{display:'flex',flexDirection:'row',marginBottom:20}}>
                    <h2 style={{fontFamily:'sans-seriff'}}>
                        Total Sold:300000
                    </h2>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginBottom:20}}>
                    <h2 style={{fontFamily:'sans-seriff'}}>
                        Total Remaining Amount:300000
                    </h2>
                </div>
                <h2 style={{fontFamily:'sans-seriff'}}>Profit</h2>
                <ReactFC {...chartConfigs} />
            </Layout>
         );
    }
}
 
export default Home;