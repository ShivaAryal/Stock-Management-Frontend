import React, { Component } from 'react';
import {Form,Button} from "semantic-ui-react";
import { Menu, Dropdown, Icon, message } from 'antd';

class AddTransactioner extends Component {
    onClick = ({key}) =>{
        this.setState({data:{transactioner:key}})    
    }
   
    menu = (
        <Menu onClick={this.onClick}>
          <Menu.Item key="owner">Owner</Menu.Item>
          <Menu.Item key="customer">Customer</Menu.Item>

        </Menu>
      );
    
    onChange=e=>{
        this.setState({data:{
        ...this.state.data,[e.target.name]:e.target.value
        
        }});
    }

    

    onSubmit = data => console.log(this.state.data.name)


    state = { 
        data:{
            name:'',
            address:'',
            transactioner:''
        }
     }
    render() { 
        return (
        <div>
            <div style={{fontSize:22,fontFamily:'sans-seriff helvetica',marginLeft:20}}>Please Enter the New Owner or Customer Information</div>
            <Form onSubmit={this.onSubmit} style={{width:500,height:300,marginLeft:20,marginTop:20,display:'flex',flexDirection:'column',alignSelf:'centre',backgroundColor:'transparent',borderRadius:40}}>
                <div style={{display:'flex',flexDirection:'row'}} >
                <Form.Field style={{display:'flex',flexDirection:'column'}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Name</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="name"
                        name="name"
                        value={this.state.name}
                        placeholder="John Doe"
                        onChange={this.onChange}
                    />
                </Form.Field>
                
                <Form.Field style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Address</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="address"
                        name="address"
                        value={this.state.address}
                        placeholder="Enter the address"
                        onChange={this.onChange}
                    />
                   
                </Form.Field>
                <Form.Field style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Owner/Customer</label>
                    <div style={{width:300,borderRadius:20,backgroundColor:'#fff',padding:8}} > 
                    <Dropdown overlay={this.menu} >
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    {!this.state.data.transactioner && <div style={{fontWeight:'100'}}>Select transactioner type</div> || this.state.data.transactioner} <Icon style={{marginTop:3,fontSize:15}} type="down" />
                    </div>
                    </Dropdown>
                   </div>
                </Form.Field>
                
                </div>


                <div style={{display:'flex',flexDirection:'row',marginTop:5}} >
                <Form.Field style={{display:'flex',flexDirection:'column'}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>State</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="state"
                        name="state"
                        value={this.state.state}
                        placeholder="Enter your state no."
                        onChange={this.onChange}
                    />
                </Form.Field>
                
                <Form.Field style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Pincode</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="pincode"
                        name="pincode"
                        value={this.state.pincode}
                        placeholder="Enter the pincode"
                        onChange={this.onChange}
                    />
                   
                </Form.Field>
                <Form.Field style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Contact Number</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="contactNumber"
                        name="contactNumber"
                        value={this.state.contactNumber}
                        placeholder="Enter the Contact Number"
                        onChange={this.onChange}
                    />
                </Form.Field>
                
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:5}} >
                <Form.Field style={{display:'flex',flexDirection:'column'}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Email Id</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter your Email Id"
                        onChange={this.onChange}
                    />
                </Form.Field>
                
                <Form.Field style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Pan Number</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="panNumber"
                        name="panNumber"
                        value={this.state.panNumber}
                        placeholder="Enter the pan number"
                        onChange={this.onChange}
                    />

                </Form.Field>
                <Form.Field style={{display:'flex',flexDirection:'column',marginLeft:20}}>
                    <label style={{fontFamily:'Courier New',fontSize:20,marginLeft:5}}>Sales Tax Number</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        id="salesTax"
                        name="salesTax"
                        value={this.state.salesTax}
                        placeholder="Enter the Sales Tax Number"
                        onChange={this.onChange}
                    />
                </Form.Field>
                </div>
                <Button animated style={{backgroundColor:'#D7CCC8',borderRadius:15,width:100,marginTop:22}}>
                    <Button.Content visible style={{fontSize:25,fontFamily:'sans-seriff'}}>Save</Button.Content>
                    <Button.Content hidden>
                    <Icon type="check" theme="outlined" />  
                    </Button.Content>
                </Button>
            </Form>
        </div>
        );
    }
}
 
export default AddTransactioner;
