import React, { Component } from "react";
import Axios from "axios";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {  users: [],};
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        this.setState({ users: resp.data });
      })
      .catch((err) => {console.error("Error fetching users:", err);});
  }
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Users Component</h4>
            <pre>{JSON.stringify(users)}</pre>
            <table className="table">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>User Name</th>
                  <th>User Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
