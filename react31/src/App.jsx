import Message from "./Message/Message";
import Product from "./Product/Product";
import {Provider} from 'react-redux'
import {store} from './redux/store'
let App=()=>{
   
    return <div>
            <Provider store={store}>
                <h1>App Comp</h1>
                <hr />
                <Message/>
                <hr/>
                <Product/>
            </Provider>
        </div>
}
export default App;