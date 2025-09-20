import React,{useState,useEffect} from 'react'
import Axios from 'axios'

let Employees= ()=>{
    let [employees,setEmployees]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setEmployees(resp.data)
        })
        .catch()
        console.log("after return statement")
    },[]);

    return <div>
            <pre>{JSON.stringify(employees)}</pre>
                <h3>Employees Component</h3>
                {
                    employees.length>0 ? 
                    <>
                    <table border={2}>
                    <thead>
                        <tr>
                            <th>Emplyee Id:</th>
                            <th>Emplyee Name</th>
                            <th>Emplyee comapany</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((emp)=>{
                            return <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.username}</td>
                                        <td>{emp.company.name}</td>
                                    </tr>
                        })

                    }
                    </tbody>
                    </table>
                    
                    </>:<h4>No Data</h4>
                }
            </div>
}
export default Employees;