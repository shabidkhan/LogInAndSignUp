import React ,{Component}from 'react'
import Article from './Article'
import data from '../api/Data/data.json'
class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Username:'',
            Password:'',
            message:''
         }
    }
    LogOut=()=>{
        this.setState({message:'',Username:'',Password:''})
    }
    user = (e) =>{
        // console.log(e.target.value)
        this.setState({Username:e.target.value})
    }
    pass = (e)=>{
        this.setState({Password:e.target.value})
    }
    check = () =>{
        if (this.state.Username in data){
            if(this.state.Password===data[this.state.Username].password){
                this.setState({message: "LogedIn"})
        }else{
            this.setState({message:<p>Invalid password</p>})
        } 
        }else{
            this.setState({message:<p>Try again</p>})
        }
        return ''
    }
    logincheck=()=>{
        // console.log(this.state.message);
        
        if (this.state.message==="LogedIn"){
            return <Article LogOut={this.LogOut} />
        }
        return  <div><br/>
        <p>Username : <input value={this.state.Username} placeholder='Username' onChange={e=>this.user(e)} /> </p>
        <p>Password : <input value={this.state.Password} placeholder='Password' onChange={e=>this.pass(e)} type='password' /><br/></p>


        <button style={{backgroundColor:'#3B3B98',color:'#fff'}} onClick={e=>this.check()} >LogIn</button><br></br>
        {this.state.message}
    </div>
    }
    
    render() { 
        return ( 
           <div>
                {this.logincheck()}
           </div>
           
         );
    }
}
 
export default LogIn;