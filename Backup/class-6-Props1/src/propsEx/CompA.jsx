import CompB from "./CompB";
let CompA=()=>{
    let msg="Welcome to React World"
    let id=101;
    let name="Rahul"
    return <div>
                <h4>Component A</h4>
                <hr />
                <CompB eid={id} ename={name}/>
            </div>
}
export default CompA;