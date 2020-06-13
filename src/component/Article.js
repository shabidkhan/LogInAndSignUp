import React, { Component } from 'react';
class Article extends Component {
    constructor(props) {
        super(props);
    this.state = { 
        message:''
     }
    }
    render() { 
        return ( 
            <div>
                <h1>you'r LoggedIn now :)</h1>
                <button style={{backgroundColor:'red',color:'white'}} onClick={e=>this.props.LogOut()} >LogOut</button>
            </div>
         );
    }
}
 
export default Article;