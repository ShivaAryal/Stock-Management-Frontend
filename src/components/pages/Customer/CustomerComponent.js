import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import CustomerService from './../../../services/CustomerService';
import './../../../index.css'
class Customer extends Component {
    state = { 
        customers:[],
        showTransaction:false,
        visible:false
    }

    componentDidMount(){
        CustomerService.getCustomer().then(res=>{
            let customers = res.data;
            this.setState({customers:customers})
            this.state.customers.map(customer=>(
                CustomerService.getCustomerTransaction(customer._id).then(response=>{
                    let transactions = response.data;
                    customer.transactions=transactions
                })
            )) 
        })
    }

    render() { 
        return ( 
            <div>
                <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={()=>this.setState({visible:false})}
                            onCancel={()=>this.setState({visible:false})}
                            >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                {this.state.customers.map((customer,i)=>(                   
                    <div key={i} style={{padding:5,paddingLeft:15,margin:5,backgroundColor:'#E0E0E0'}} onClick={()=>this.setState({visible:true})} >
                        <div style={{fontSize:22,color:'#000',fontFamily:'sans-seriff'}} >{customer.name}</div>
                        <div style={{fontSize:15}}>{customer.address},    {customer.contactNumber}</div>
                        <div style={{fontSize:20,fontFamily:'sans-seriff'}}>Remaining Amount: {customer.remainingAmount}</div>
                        {/* <div style={{fontSize:12,fontFamily:'sans-sariff',fontWeight:10}} 
                            onClick={()=>{this.state.showTransaction==true?this.setState({showTransaction:false}):this.setState({showTransaction:true})}}>
                            {this.state.showTransaction==false?<div>Show all transactions</div>:<div>Hide transactions</div>}
                        </div>
                        {this.state.showTransaction == true? <div>data</div>: null } */}
                        
                        
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Customer;