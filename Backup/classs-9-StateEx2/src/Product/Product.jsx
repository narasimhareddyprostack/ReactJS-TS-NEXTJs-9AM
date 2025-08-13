import React, { useState } from 'react'

let Product = ()=>{
        let [qty,setQty]=useState(1)
        let decrHandler = ()=>{setQty(qty-1)}
        let incrHandler = ()=>{setQty(qty+1)}
        return <div>
                    <h3>Product Component</h3>
                    <button onClick={decrHandler}>-</button>
                    Qty:{qty}
                    <button onClick={incrHandler}>+</button>
                </div>

}
export default Product