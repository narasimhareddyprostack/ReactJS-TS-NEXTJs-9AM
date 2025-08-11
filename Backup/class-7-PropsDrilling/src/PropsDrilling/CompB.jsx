import CompC from "./CompC";
let CompB=(props)=>{

    return <div>
                <h3>Component B</h3>
                {/* <pre>{JSON.stringify(props)}</pre> */}
                <hr/>
                <CompC msg={props.msg}/>
            </div>
}
export default CompB;