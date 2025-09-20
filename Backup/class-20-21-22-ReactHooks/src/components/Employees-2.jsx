const { useEffect } = require("react")

let Employees= ()=>{
    
    useEffect(()=>{
        console.log("after return statement")
    },[]);

    return <div>
                <h3>Employees Component</h3>
            </div>
}
export default Employees;