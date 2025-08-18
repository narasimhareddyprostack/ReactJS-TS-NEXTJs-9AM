import React, { Fragment, useState } from 'react'
const Message = () => {
    let [msg,setMsg]  = useState("Hello");
    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let gaHandler = ()=>{
        setMsg("Good Afternoon")
    }
    let geHandler = ()=>{
        setMsg("Good Evening")
    }
    let gnHandler = ()=>{
        setMsg("Good Night")
    }
  return <Fragment>
            <h3>Message component</h3>
            <h3>Message Value:{msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            <button onClick={geHandler}>GE</button>
            <button onClick={gnHandler}>GN</button>
        </Fragment>
}

export default Message;