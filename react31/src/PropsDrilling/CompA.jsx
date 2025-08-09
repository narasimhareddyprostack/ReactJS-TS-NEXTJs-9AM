import CompB from "./CompB";
let CompA=()=>{
    let msg ="Hello!Good Morning"
    return <div>
            <h3>Component A</h3>
            <h5>Data:{msg}</h5>
            <hr/>
            <CompB msg={msg}/>
            </div>
}
export default CompA;