import React from "react";
class Message extends React.Component{
    constructor(props){
        console.log("First Constrcutor")
        super(props)
        this.state={msg:"Hello"}
    }
    updateHandler=(value)=>{
        console.log("After render method")
        //console.log(value);
        this.setState({msg:value})
    }
    render(){
        console.log("second render method")
        return  <div>
                    <h3>Message Component</h3>
                  
                    <h3>Message Value:{this.state.msg}</h3>
                    <button onClick={this.updateHandler.bind(this,"GM")}>GM</button>
                    <button onClick={this.updateHandler.bind(this,"GA")}>GA</button>
                    <button onClick={this.updateHandler.bind(this,"GE")}>GE</button>
                    <button onClick={this.updateHandler.bind(this,"GN")}>GN</button>
                </div>
    }
}
export default Message;