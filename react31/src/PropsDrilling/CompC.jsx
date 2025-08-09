import { jsx } from "react/jsx-runtime";
import CompD from "./CompD";
let CompC=(props)=>{

    return <div>
                <h3>Component C</h3>
                {/* <pre>{JSON.stringify(props)}</pre> */}
                <hr />
                <CompD msg={props.msg}/>
            </div>
}
export default CompC;