import React from 'react';
import LoginForm from './../forms/LoginForm';
import Auth from './../../services/LoginService';
import Main from './Main'
import './../../index.css'
class LoginPage extends React.Component{
    state={
        loggedIn:false,
    }
    submit=data=>{
        console.log(data);
        Auth.login(data.email,data.password).then(user=>{
            // console.log("User:",user) 
            this.setState({loggedIn:true})
            console.log(this.state.loggedIn)
        })
    }
    render(){
            if(this.state.loggedIn){
                return(
                <div>
                    <h2>Login </h2>
                    <LoginForm submit={this.submit} />
                </div>
                )
            }else{
                return(
                <div>
                    <Main/>
                </div>
                )
            }
    }
}

export default LoginPage