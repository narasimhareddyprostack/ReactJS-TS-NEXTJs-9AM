import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {gmAction,gaAction} from '../redux/message/message.action'
const Message = () => {
 let dispatch= useDispatch();
 let message= useSelector((state)=>{
    return state;
 })
 let gmHandler = ()=>{
    dispatch(gmAction())
 }
 let gaHandler = ()=>{
    dispatch(gaAction())
 }
 return <div>
         <pre>Message Component</pre>   
         <pre>{JSON.stringify(message)}</pre>   
         <h3>Value:{message.msg}</h3>
         <button onClick={gmHandler}>GM</button>
         <button onClick={gaHandler}>GA</button>

        </div>
}

export default Message