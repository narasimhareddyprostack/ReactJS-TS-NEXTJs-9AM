import Message from "./Message/Message";
import {Provider} from 'react-redux'
import {store} from './redux/store'
let App=()=>{
   
    return <div>
            <Provider store={store}>
                <h1>App Comp</h1>
                <hr />
                <Message/>
            </Provider>
        </div>
}
export default App;