import { useRef, useState } from "react";

let Login = ()=>{
//let [terms,setTerms]=useState(false)
let btnRef=useRef();
let tcHandler = (event)=>{
    console.log(event.target.checked)
    //setTerms(event.target.checked)
    btnRef.current.disabled=!event.target.checked;
}
    return <div className="container">
           
            <div className="row">
            <div className="col-4">
                <form >
                    <div className="form-group">
                        <label >Email:</label>
                        <input type="email" className="form-control" />
                    </div>
                       <div className="form-group">
                        <label >Password:</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-input">
                    <input onInput={tcHandler} type="checkbox" className="form-input-checkbox"/> 
                    Please Accept T&C
                    </div>
                    <input ref={btnRef} type="submit" value={"Login"} className="btn btn-warning" disabled />
                </form>
            </div>
            </div>   
        </div>
}
export default Login;