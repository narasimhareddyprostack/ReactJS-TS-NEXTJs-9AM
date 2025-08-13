import React from "react";
class Product extends React.Component{
    state={
        qty:1
    }
    incrHandler = ()=>{
        this.setState({qty:this.state.qty+1})
    }
    decrHandler = ()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        console.log("Test Case 123")
        return <div>
                    <h4>Product Component</h4>
                    <button onClick={this.decrHandler}>-</button>
                    <h4>Product Qty:{this.state.qty}</h4>
                    
                    <button onClick={this.incrHandler}>+</button>
                </div>
    }
}
export default Product