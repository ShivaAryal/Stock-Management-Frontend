import React from 'react';
import LoginForm from './../forms/LoginForm';
import Auth from './../../services/LoginService';
import Main from './Main'
import './../../index.css'
import Background from './../../images/rice.jpg';
class LoginPage extends React.Component{
    state={
        loggedIn:false,
    }

    onLogOut=()=>{
        this.setState({loggedIn:false})
        console.log(this.state.loggedIn)
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
                    <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center',backgroundImage: `url(${Background})`,height:631}}>
                    <LoginForm submit={this.submit}/>
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