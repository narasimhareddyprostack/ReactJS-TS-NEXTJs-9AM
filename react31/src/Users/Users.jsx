import React, { useState, useEffect } from "react";
import Axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []); // empty dependency → runs once like componentDidMount

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

export default Users;
