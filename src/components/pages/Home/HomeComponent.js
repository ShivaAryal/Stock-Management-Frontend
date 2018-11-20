// import React, { Component } from 'react';
// import { Layout, Menu, Icon } from 'antd';
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// const chartConfigs = {
//     type: 'column2d',
//     width:'60%',
//     height:'60%',
//     // width:(window.getInnerWidth>800)?600:400,
//     // height: (window.getInnerWidth>800)?400:300,
//     dataFormat: 'json',
//     dataSource: {
//         // Chart Configuration
//         "chart": {
//             "caption": "Monthly profits[2018]",
//             "xAxisName": "Months",
//             "yAxisName": "Profits(in Rs.)",
//             "numberSuffix": "k",
//             "theme": "fusion",
//         },
//         // Chart Data
//         "data": [{
//             "label": "January",
//             "value": "290"
//         }, {
//             "label": "February",
//             "value": "260"
//         }, {
//             "label": "March",
//             "value": "180"
//         }, {
//             "label": "April",
//             "value": "140"
//         }, {
//             "label": "May",
//             "value": "689"
//         }, {
//             "label": "July",
//             "value": "100"
//         }, {
//             "label": "August",
//             "value": "30"
//         }, {
//             "label": "September",
//             "value": "-90"
//         },{
//             "label": "October",
//             "value": "430"
//         },{
//             "label": "November",
//             "value": "830"
//         },{
//             "label": "December",
//             "value": "110"
//         }]
//     } }
//    Charts(FusionCharts);
// class Home extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <Layout>
//                 <div style={{display:'flex',flexDirection:'row',marginBottom:20}}>
//                     <h2 style={{fontFamily:'sans-seriff'}}>
//                         Total Sold:300000
//                     </h2>
//                 </div>
//                 <div style={{display:'flex',flexDirection:'row',marginBottom:20}}>
//                     <h2 style={{fontFamily:'sans-seriff'}}>
//                         Total Remaining Amount:300000
//                     </h2>
//                 </div>
//                 <h2 style={{fontFamily:'sans-seriff'}}>Profit</h2>
//                 <ReactFC {...chartConfigs} />
//             </Layout>
//          );
//     }
// }
 
// export default Home;


import React,{Component} from 'react';
// import {Layout, Menu} from 'antd';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)
export default class Home extends Component{
    state={
        monthlySalesData:{
            "Jan":20000,
            "Feb":40000,
            "Mar":500,
            "Apr":45322,
            "May":56522,
            "June":36377,
            "July":63387,
            "Aug":36783,
            "Sept":47833,
            "Oct":35762,
            "Nov":38978,
            "Dec":42722
        },
        yearlySalesData:{
            "2071":200000,
            "2072":400004,
            "2073":505003,
            "2074":953222,
            "2075":565225,
            "2076":363774,
            "2077":633827,
            "2078":867383,
            "2079":478233,
            "2080":357642,
            "2081":389784,
            "2082":427224 
        },
        monthlyProfitData:{
            "Jan":2000,
            "Feb":4000,
            "Mar":5500,
            "Apr":4322,
            "May":5522,
            "June":3377,
            "July":6387,
            "Aug":3683,
            "Sept":4733,
            "Oct":3572,
            "Nov":3878,
            "Dec":4722
        },
        yearlyProfitData:{
            "2071":20000,
            "2072":40004,
            "2073":50003,
            "2074":43222,
            "2075":56225,
            "2076":36774,
            "2077":63827,
            "2078":36383,
            "2079":47233,
            "2080":35642,
            "2081":38784,
            "2082":42724 
        },
    }
    componentDidMount(){

    }
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                    <div style={{backgroundColor:'#ECEFF1',marginRight:200,padding:10,width:300,height:90}}>
                        <div style={{fontSize:25,fontFamily:'sans-seriff'}}>This month sale</div>
                        <div style={{fontSize:22,fontFamily:'sans-seriff'}}>Rs. 2,000,000</div>
                    </div>
                    <div style={{backgroundColor:'#ECEFF1',padding:10,width:300,height:90}}>
                        <div style={{fontSize:25,fontFamily:'sans-seriff'}}>This year sale</div>
                        <div style={{fontSize:22,fontFamily:'sans-seriff'}}>Rs. 20,000,000</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                    <div style={{backgroundColor:'#ECEFF1',marginRight:200,padding:10,width:300,height:90}}>
                        <div style={{fontSize:25,fontFamily:'sans-seriff'}}>This month profit</div>
                        <div style={{fontSize:22,fontFamily:'sans-seriff'}}>Rs. 200,000</div>
                    </div>
                    <div style={{backgroundColor:'#ECEFF1',padding:10,width:300,height:90}}>
                        <div style={{fontSize:25,fontFamily:'sans-seriff'}}>This year profit</div>
                        <div style={{fontSize:22,fontFamily:'sans-seriff'}}>Rs. 2,000,000</div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                    <div style={{backgroundColor:'#ECEFF1',marginRight:100,padding:10,width:450,height:350}}><div style={{fontSize:22,fontFamily:'sans-seriff',marginBottom:10,marginLeft:10,fontWeight:'bold'}}>Monthly Sales</div><LineChart data={this.state.monthlySalesData} xtitle="Months" ytitle="Rs. in thousands" /></div>
                    <div style={{backgroundColor:'#ECEFF1',padding:10,width:450,height:350}}><div style={{fontSize:22,fontFamily:'sans-seriff',marginBottom:10,marginLeft:10,fontWeight:'bold'}}>Yearly Sales</div><LineChart data={this.state.yearlySalesData} xtitle="Years" ytitle="Rs. in thousands" /></div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                    <div style={{backgroundColor:'#ECEFF1',marginRight:100,padding:10,width:450,height:350}}><div style={{fontSize:22,fontFamily:'sans-seriff',marginBottom:10,marginLeft:10,fontWeight:'bold'}}>Monthly Profits</div><LineChart data={this.state.monthlyProfitData} xtitle="Months" ytitle="Rs. in thousands" /></div>
                    <div style={{backgroundColor:'#ECEFF1',padding:10,width:450,height:350}}><div style={{fontSize:22,fontFamily:'sans-seriff',marginBottom:10,marginLeft:10,fontWeight:'bold'}}>Yearly Profits</div><LineChart data={this.state.yearlyProfitData} xtitle="Years" ytitle="Rs. in thousands" /></div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:10}}>
                    <div style={{backgroundColor:'#ECEFF1',marginRight:200,padding:10,width:300,height:90}}>
                        <div style={{fontSize:25,fontFamily:'sans-seriff'}}>Predicted Next Month Sale</div>
                        <div style={{fontSize:22,fontFamily:'sans-seriff'}}>Rs. 2,000,000</div>
                    </div>
                    <div style={{backgroundColor:'#ECEFF1',padding:10,width:300,height:90}}>
                        <div style={{fontSize:25,fontFamily:'sans-seriff'}}>Predicted Next Year Sale</div>
                        <div style={{fontSize:22,fontFamily:'sans-seriff'}}>Rs. 50,000,000</div>
                    </div>
                </div>
            </div>
        );
    }
}
