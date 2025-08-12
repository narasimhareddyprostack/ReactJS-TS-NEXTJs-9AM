import React, { useState } from 'react'
const Test = () => {
    let [qty,setQty]=useState(1);
    let [msg,setMsg]=useState("Hello");
    let [flag,setFlag]=useState(true);
    let [users,setUsers]=useState([10,20,30]);
    let [emp,setEmp]=useState({'emp':101});
    return <div>
                <h3>{qty}</h3>
                <h3>{msg}</h3>
                <h3>{flag}</h3>
                <h3>{users}</h3>
                <h3>{JSON.stringify(emp)}</h3>
            </div>
}
export default Test