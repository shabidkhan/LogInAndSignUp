import React, { Component } from 'react';
import data from '../api/Data/data.json';
import axios from "axios";
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Username:'',
            Password:'',
            DOB:'',
            Number:'',
            message:''
         }
         

    }
    user = (e)=>{
        this.setState({Username:e.target.value})
    }
    pass = (e)=>{
        this.setState({Password:e.target.value})
    }
    mno = (e)=>{
        this.setState({Number:e.target.value})
    }
    dob = (e)=>{
        this.setState({DOB:e.target.value})
    }
    check = () =>{
        
        if (this.state.Username.length < 7){
            this.setState({message:'Invalid Email'})
        }else if(this.state.Username in data ){
            this.setState({message:'Username already exist'})
        }else{
            
            axios.post("http://localhost:3000/",this.state).then(e=>console.log(e))            
            this.setState({message:'DONE'})
        }
        

    }
    render() { 
        return ( 
            <div>
                <p>Username : <input value={this.state.Username.value} placeholder='Username' onChange={e=>this.user(e)} /> </p>
                <p>Password : <input value={this.state.Password} placeholder='Pxyz@123' onChange={e=>this.pass(e)} type='password' /> </p>
                <p>M.Number : <input value={this.state.Number} placeholder='xxxxxxxxxx' onChange={e=>this.mno(e)} /> </p>
                <p> Born date: <input value={this.state.DOB} placeholder='xx/xx/20xx' onChange={e=>this.dob(e)} /> </p>

                <button onClick={e=>this.check()} >submit</button><br></br>
                {this.state.message}
            </div>
         );
    }
}
 
export default SignUp;