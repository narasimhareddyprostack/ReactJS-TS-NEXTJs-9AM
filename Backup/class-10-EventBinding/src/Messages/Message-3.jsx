import React, { Fragment, useState } from 'react'
const Message = () => {
    let [msg,setMsg]  = useState("Hello");
    let updateHandler=(value)=>{
        setMsg(value)
        //setMsg("GM")
    }
    return <Fragment>
                <h3>Message component</h3>
                <h3>Message Value:{msg}</h3>
                <button onClick={updateHandler.bind(null,"GM")}>GM</button>
                <button onClick={updateHandler.bind(null,"GA")}>GA</button>
                <button onClick={updateHandler.bind(null,"GE")}>GE</button>
                <button onClick={updateHandler.bind(null,"GN")}>GN</button>
            </Fragment>
    }

export default Message;