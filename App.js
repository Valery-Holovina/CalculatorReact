import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    x: "",
    y: "",
    result: 0,

  }


    getX = (x) =>{
      this.setState({
        x: x.target.value
      })
    }

     getY = (y) =>{
      this.setState({
        y: y.target.value
      })
    }
  add = () => {
    const num1 = this.state.x;
    const num2 = this.state.y;
    const res = Number(num1) + Number(num2);

    this.setState({
      result: res
    })

  }


  minus = () =>{
    const num1 = this.state.x;
    const num2 = this.state.y;
    const res = Number(num1) - Number(num2);

    this.setState({
      result: res
    })
  }


    mult = () =>{
    const num1 = this.state.x;
    const num2 = this.state.y;
    const res = Number(num1) * Number(num2);

    this.setState({
      result: res
    })
  }

    divide = () =>{
    const num1 = this.state.x;
    const num2 = this.state.y;
    const res = Number(num1) / Number(num2);

    this.setState({
      result: res
    })
  }

  
  render(){

 
  return(
    <div className="App">
      <h1>Calculator</h1>
       <input type='text' style={{ margin: "10px" }} value={this.state.x} onChange={this.getX}/>
       <input type='text' style={{ margin: "10px" }} value={this.state.y} onChange={this.getY} />
      <button onClick={this.add}  style={{ padding: "8px"}} >+</button>
      <button onClick={this.minus} style={{ padding: "8px"}} >-</button>
      <button onClick={this.mult} style={{ padding: "8px"}} >*</button>
      <button onClick={this.divide} style={{ padding: "8px"}} >/</button>
      <h1>{this.state.result}</h1>
      </div>
  )
}
}

export default App;
