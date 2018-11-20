import React from 'react';
import {Form,Button,Icon} from "semantic-ui-react";
import Validator from 'validator';
import InlineError from './../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends React.Component{
    state={
        data:{
            email:'',
            password:'',
        },
        loading:false,
        errors:{}
    }

    onChange=e=>this.setState({data:{
        ...this.state.data,[e.target.name]:e.target.value
    }});

    onSubmit=()=>{
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.props.submit(this.state.data);
        }
    }

    validate=(data)=>{
        const errors ={};
        if(!Validator.isEmail(data.email)) errors.email="Invalid email"
        if(!data.password) errors.password="Can't be blank"
        return errors;
    }

    render(){
        const {errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit} style={{width:500,height:300,display:'flex',flexDirection:'column',alignSelf:'centre',backgroundColor:'transparent',borderRadius:40}}>
                <div style={{alignSelf:'center',margin:20}}>
                <Form.Field error={!!errors.email} style={{display:'flex',flexDirection:'column'}}>
                    <label htmlFor="email" style={{fontFamily:'Courier New',fontSize:20}}>Email</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.data.email}
                        placeholder="example@example.com"
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                </div>
                <div style={{alignSelf:'center',marginBottom:20}}>
                <Form.Field error={!!errors.password} style={{display:'flex',flexDirection:'column'}}>
                    <label htmlFor="password" style={{fontFamily:'Courier New',fontSize:20}}>Password</label>
                    <input
                        style={{width:300,borderRadius:20}}
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.data.password}
                        placeholder="Enter secure password"
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                </div>
                <div style={{marginLeft:100}} >
                <Button animated style={{backgroundColor:'#D7CCC8',borderRadius:15}}>
                    <Button.Content visible style={{fontSize:17}}>Login</Button.Content>
                    <Button.Content hidden>
                    <Icon name='arrow right' />
                    </Button.Content>
                    </Button>
                </div>
            </Form>
        )
    }
}

LoginForm.propTypes={
    submit:PropTypes.func.isRequired
}

export default LoginForm;