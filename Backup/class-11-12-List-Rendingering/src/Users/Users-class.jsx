import React from "react";
import Axios from 'axios'
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={users:[]}
    }
    get_Data=()=>{  
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState({users:resp.data})
        })
        .catch(()=>{})
    }
    render(){
        return <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <h4>Users Component</h4>
                    <pre>{JSON.stringify(this.state.users)}</pre>
                    <button onClick={this.get_Data}>Get Data</button>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((user)=>{
                                return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                            })
                        }
                        </tbody>
                    </table>
                            </div>
                        </div>
                    
                </div>
    }
}

export default Users;