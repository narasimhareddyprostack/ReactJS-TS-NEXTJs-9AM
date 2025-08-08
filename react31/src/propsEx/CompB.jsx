let CompB=(props)=>{

    return <div>
                <h4>Component B</h4>
                <pre>{JSON.stringify(props)}</pre>
                <h4>Employee Id:{props.eid}</h4>
                <h4>Employee Name:{props.ename}</h4>
            </div>
}
export default CompB;