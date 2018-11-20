import React, { Component } from 'react';
import { Layout,Tabs } from 'antd';
import ReactTable from "react-table";
import "react-table/react-table.css";
const TabPane = Tabs.TabPane;

class ViewStock extends Component {

    callback=(key)=> {
        console.log(key)
      }
    state = { 
        data:[{
            name:"Patalo Dhan",
            category:'Dhan',
            unitPrice:2560,
            noofStocks:122,
        },{
            name:"Kanika Chamal",
            category:'Chamal',
            unitPrice:2437,
            noofStocks:1232,
        }]
     }
    render() { 
        return ( 
        <div style={{}}>
                <ReactTable
                        data={this.state.data}
                        columns={[
                        {
                            columns: [
                            {
                                Header: "Name",
                                id:"name",
                                accessor: "name"
                            },
                            {
                                Header: "Category",
                                id: "category",
                                accessor:"category"
                            },
                            {
                                Header: "Unit Price",
                                id: "unitPrice",
                                accessor:"unitPrice"
                            },
                            {
                                Header: "Number of Stocks",
                                id: "noofStocks",
                                accessor:"noofStocks"
                            },
                            ]
                        }
                        ]}
                    className="-striped -highlight"
                    />        
        </div>
      );
    }
}
 
export default ViewStock;