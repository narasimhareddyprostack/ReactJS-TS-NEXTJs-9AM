import React from "react"
let CompB = (props)=>{

    return <React.Fragment>
            <h3>Component B</h3>
            <pre>{JSON.stringify(props)}</pre>
            <h4>Employee Id:{props.eid}</h4>
            <h4>Employee Name:{props.ename}</h4>
            <h4>Employee Salary:{props.details.emp_Sal}</h4>
            <h4>Employee Location:{props.details.loc[2]}</h4>
           </React.Fragment>
}
export default CompB;