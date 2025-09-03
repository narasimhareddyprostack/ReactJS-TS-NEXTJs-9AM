import { useState } from "react";
let Login = ()=>{
    let [user,setUser]=useState({"email":"","password":""})
    let updateHandler  = (event)=>{
        setUser({...user, [event.target.name]:event.target.value})
    }
    let submitHandler = (event)=>{
        event.preventDefault();
        console.log(user)
    }
    return <div><pre>{JSON.stringify(user)}</pre>
                <h5>Login Details</h5>
                <form onSubmit={submitHandler} >
                EmailId:::: : <input type="text" name="email" onChange={updateHandler} />   <br /><br />
                Password : <input type="password" name="password" onChange={updateHandler} />  <br/>
                <input type="submit" value="Login" />
                </form>
            </div>
}
export default Login;