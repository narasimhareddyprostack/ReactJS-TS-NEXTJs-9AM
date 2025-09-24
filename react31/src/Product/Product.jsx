import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incrAction,decrAction} from '../redux/product/product.action'
const Product = () => {
  let dispatch=useDispatch();
  let product=useSelector((state)=>{
    return state.product;
  })
  let incrHandler = ()=>{
    dispatch(incrAction())
  }
  return <div>
            <h3>Product Component</h3>
            <pre>{JSON.stringify(product)}</pre>
            <h5>Product Name:{product.product_Name}</h5>
            <h5>Product Price:{product.price}</h5>
            <button onClick={()=>{dispatch(decrAction())}}>-</button>
            {product.qty}
            <button onClick={incrHandler}>+</button>
        </div>
}

export default Product