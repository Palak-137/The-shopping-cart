import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
    constructor(props){
        super(props);
       this.state={
            count:0,
            counter:[
              { id:1,value:0},
              { id:2,value:0},
              { id:3,value:0},
              { id:4,value:0}

            ]
        }
        }
        increment=()=>{
         this.setState({ count: this.state.count+1});
        }
        decrement=()=>{
            this.setState({count:this.state.count-1});
        }
        delete(id){
                 const list =[...this.state.counter];
                 const update = list.filter(item=>item.id!==id);
                 this.setState({list:update})
        }
        render(){
            return(
                <div className="container">
                     {this.state.counter.map(item=>{
                     <div>
                    <span className="badge" value={item.value} key={item.id}>{this.state.count}</span>
                   <button className="btn btn-primary m-2" onClick={()=>this.increment} key={item.id}> +</button>
                   <button className="btn btn-danger m-2" onClick={()=>this.decrement} key={item.id}>-</button>
                   <button className="btn btn-danger m-2"onClick={()=>this.delete(item.id)}>delete</button>
                   </div>
                })};
                </div>
            )
        }
      
      }
    

export default App;