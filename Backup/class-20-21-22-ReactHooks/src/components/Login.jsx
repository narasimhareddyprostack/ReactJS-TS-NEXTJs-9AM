import { useRef, useState } from "react";
let Login = ()=>{
    let btnRef = useRef();
    let acceptTC = (event)=>{
        let flag = event.target.checked;
        console.log(flag)
        btnRef.current.disabled=!flag;
    }
    return <div>
            <form >
            Email Id::: <input type="email" /> <br />
            Password:   <input type="password" /> <br />
                        <input type="checkbox" onInput={acceptTC} /> Pls Accept Terms & conditions <br />
                        <input type="submit" value="Login"  disabled  ref={btnRef}/>  
            </form>
            </div>
}
export default Login;