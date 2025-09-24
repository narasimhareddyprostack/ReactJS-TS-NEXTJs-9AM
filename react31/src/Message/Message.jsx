import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {gmAction,gaAction} from '../redux/message/message.action'
const Message = () => {
 let dispatch= useDispatch();

 let storeData=useSelector((state)=>{
   return state;
 })
 let message= useSelector((state)=>{
    return state.message;
 })
 let gmHandler = ()=>{
    dispatch(gmAction())
 }
 let gaHandler = ()=>{
    dispatch(gaAction())
 }
 return <div>
         <h5>Store Data</h5>
         <pre>{JSON.stringify(storeData)}</pre>   
         <hr/>
         <pre>Message Component</pre>   
         
         <pre>{JSON.stringify(message)}</pre>   
         <h3>Value:{message.msg}</h3>
         <button onClick={gmHandler}>GM</button>
         <button onClick={gaHandler}>GA</button>

        </div>
}

export default Message