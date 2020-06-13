import React ,{Component}from "react";


// class Comp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             list:["1","12",123,1234,5,6,7,8,9]
//          }
//     }
//     render() { 
//         return ( 
//             <div>
//                 {

//                 this.state.list.map(e=><h1>{e}</h1>)
//                 }
//             </div>
//          );
//     }
// }
 
// export default Comp;



class Comp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input : '',
            tagf:""
        }
    }
    mychange=(e)=>{
        this.setState({input:e.target.value})

    }
    check = ()=>{
        if (this.state.input.toLowerCase() =="shabid"){
            this.setState({tagf:<p>DONE</p>})
        }else{
            this.setState({tagf:<p>Try Again</p>})
        }
    }
    render(){
        return(
            <div>
                <input value={this.state.input} onChange={e=>this.mychange(e)} placeholder='Enter Here' />
                <button onClick={e=>this.check()}>submit</button>
                {this.state.tagf}
            </div>
        )
    }
}

// class Comp extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//     }
//     p=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     d = ()=>{
//         this.setState({count:this.state.count-1})
//     }
//     render(){
//     return  (
//     <div>
//     <button onClick={e=>this.p()}>i</button><br></br><br></br>
//     <p>{this.state.count}</p><br></br>
//     <button onClick={e=>this.d()}>d</button>
//     </div>
//     )
//     }
// }

export  {Comp}
