import { useState } from "react";
import Axios from "axios";
let Users=()=>{
    let [users,setUsers]  = useState([])
    let get_Data=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch()
    }
    return <div>
                <h3>User Comp</h3>
                <hr/>
                <button onClick={get_Data}>Get data</button>
                <pre>{JSON.stringify(users)}</pre>
            </div>
}
export default Users;