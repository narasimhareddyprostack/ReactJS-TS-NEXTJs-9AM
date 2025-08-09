let CompD=(props)=>{

    return <div>
            <h3>Component D</h3>
            <pre>{JSON.stringify(props)}</pre>
            <h4>Welcome Message:{props.msg}</h4>
            </div>
}
export default CompD;