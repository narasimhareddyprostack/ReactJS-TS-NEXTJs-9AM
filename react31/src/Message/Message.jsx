import React, { useState } from 'react'
const Message = () => {
        let [msg,setMsg]=useState("Hello...");
        
        let gmHandler=()=>{
            setMsg("Good Morning")
        }
        let gnHandler=()=>{
            setMsg("Good Night")
        }
        return <React.Fragment>
                <h3>Message Componnent</h3>
                <h3>Messag value:{msg}</h3>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gnHandler}>GN</button>
              </React.Fragment>
  
}
export default Message