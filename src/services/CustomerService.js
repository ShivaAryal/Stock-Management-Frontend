import React, { Component } from 'react';
class CustomerService extends Component {
    static getCustomer(){
        console.log("Im ere")
        return new Promise((resolve,reject)=>{
            fetch("http://192.168.100.125:4000/api/admin/getCustomer",{
            method:'GET',
            mode:'cors',
            headers:{
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNGI1YTkxODIzZjhjMWQ3ODAxNzVhNiIsImlhdCI6MTUzMzgzMDc0MH0.uELZtdZKzP3nzAzmxlVYlox1ydHxHUfb7KASAUvHMhY',
            }
        }).then(res=>res.json()).then(res=>resolve(res)).catch(err=>reject(err))
    })
}

    static getCustomerTransaction(id){
        // console.log(id)
        return new Promise((resolve,reject)=>{
            fetch(`http://192.168.100.125:4000/api/admin/getCustomerTransaction/${id}`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNGI1YTkxODIzZjhjMWQ3ODAxNzVhNiIsImlhdCI6MTUzMzgzMDc0MH0.uELZtdZKzP3nzAzmxlVYlox1ydHxHUfb7KASAUvHMhY',
                }
            }).then(res=>res.json()).then(res=>resolve(res)).catch(err=>reject(err))
        })
    }
}

export default CustomerService;