import React, { Component } from 'react';
import { Layout,Tabs } from 'antd';
import ReactTable from "react-table";
import "react-table/react-table.css";
const TabPane = Tabs.TabPane;

class ViewTransactioner extends Component {

    callback=(key)=> {
        console.log(key)
      }
    state = { 
        customerData:[{
            name:"Hari Arual",
            address:'Thapathali, Kathmandu',
            state:2,
            pinCode:1221,
            contactNumber:9818484593,
            emailId:'lostinhell99@gmail.com',
            panNumber:'275A',
            salesTaxNumber:'175243A',
            remainingAmount:100000

        },{
            name:"Hari Arual",
            address:'Thapathali, Kathmandu',
            state:2,
            pinCode:1221,
            contactNumber:9818484593,
            emailId:'lostinhell99@gmail.com',
            panNumber:'275A',
            salesTaxNumber:'175243A',
            remainingAmount:100000
        }],
        ownerData:[{
            name:"Shiva Aryal",
            address:"Kupondole, Lalitpur",
            state:5,
            pinCode:4521,
            contactNumber:9867104683,
            emailId:'shivaaryalj7@gmail.com',
            panNumber:'475A',
            salesTaxNumber:'675243E',
            remainingAmount:4000000
        },
        {
            name:"Hari Arual",
            address:'Thapathali, Kathmandu',
            state:2,
            pinCode:1221,
            contactNumber:9818484593,
            emailId:'lostinhell99@gmail.com',
            panNumber:'275A',
            salesTaxNumber:'175243A',
            remainingAmount:10000000
        }    
    ]
     }
    render() { 
        return ( 
        <div style={{}}>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Customer" key="1">
                <ReactTable
                        data={this.state.customerData}
                        columns={[
                        {
                            columns: [
                            {
                                Header: "Name",
                                id:"name",
                                accessor: "name"
                            },
                            {
                                Header: "Address",
                                id: "address",
                                accessor:"address"
                            },
                            {
                                Header: "State",
                                id: "state",
                                accessor:"state"
                            },
                            {
                                Header: "Contact Number",
                                id: "contactNumber",
                                accessor:"contactNumber"
                            },
                            {
                                Header: "Email Id",
                                id: "emailId",
                                accessor:"emailId"
                            },
                            {
                                Header: "Pan Number",
                                id: "panNumber",
                                accessor:"panNumber"
                            },
                            {
                                Header: "Sales Tax Number",
                                id: "salesTaxNumber",
                                accessor:"salesTaxNumber"
                            },
                            {
                                Header: "Remaining Amount",
                                id: "remainingAmount",
                                accessor:"remainingAmount"
                            },
                            ]
                        }
                        ]}
                    className="-striped -highlight"
                    />        
                </TabPane>
                <TabPane tab="Owner" key="2">
                    <ReactTable
                        data={this.state.ownerData}
                        columns={[
                        {
                            columns: [
                            {
                                Header: "Name",
                                id:"name",
                                accessor: "name"
                            },
                            {
                                Header: "Address",
                                id: "address",
                                accessor:"address"
                            },
                            {
                                Header: "State",
                                id: "state",
                                accessor:"state"
                            },
                            {
                                Header: "Contact Number",
                                id: "contactNumber",
                                accessor:"contactNumber"
                            },
                            {
                                Header: "Email Id",
                                id: "emailId",
                                accessor:"emailId"
                            },
                            {
                                Header: "Pan Number",
                                id: "panNumber",
                                accessor:"panNumber"
                            },
                            {
                                Header: "Sales Tax Number",
                                id: "salesTaxNumber",
                                accessor:"salesTaxNumber"
                            },
                            {
                                Header: "Remaining Amount",
                                id: "remainingAmount",
                                accessor:"remainingAmount"
                            },
                            ]
                        }
                        ]}
                    className="-striped -highlight"
                    />
                </TabPane>
            </Tabs>
        </div>
      );
    }
}
 
export default ViewTransactioner;