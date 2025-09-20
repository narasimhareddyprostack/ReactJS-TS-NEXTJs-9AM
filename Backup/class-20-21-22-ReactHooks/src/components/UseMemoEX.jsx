import React,{useMemo, useState} from 'react';
let UseMemoEX= ()=>{
    let [counter,setCounter]=useState(0)
    let [number,setNumber]=useState(4)
    
    //let factNumber = fact(number);
    let factNumber = useMemo(()=>{return fact(number)},[number]);
    return <div>
              <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
              <button onClick={()=>{setNumber(number+1)}}>Factorial-{number}</button>
              <h1>Counter Value:{counter}</h1>
              <h1>Factorial of {number} is:{factNumber}</h1>
            </div>
}

let fact = (n)=>{
    console.log("Test Case 123")
    let result =1;
    for(let i=n; i>=1;i--){
        result = result *i;
    }
    console.log(result)
    return result;
}
export default UseMemoEX;