import {GM,GA} from './message.action'
let initialState={
    "msg":"Hello"
}
let messageReducer =(state=initialState,action)=>{
    console.log("Inside Reducer")
    console.log(action.type)
    switch(action.type){
        case GM:
            return {"msg":"Good Morning"}
        case GA:
            return {"msg":"Good Afternoon"}
        default:
            return state
    }
}
export {messageReducer}