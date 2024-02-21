import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromCart } from '../ReactRedux/Slice/cartSlice';

function SingleProduct({products}) {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const currItem = cart.find(item => item.id === products.id);
  const currQuantity = currItem ? currItem.quantity: 0;

  return (
    <div className='SingleProduct'>
      <img className= "productImg" src={products.images[0]} alt={products.title} />
      <div className="productinfo">
        <div className="productTitle">{products.title}</div>
        <div className="productPrice">{products.price}</div>
      </div>
      <div className="cartInfo">
        <button className='button' onClick={() => dispatch(addTocart(products.id))}>+</button>
        <span>{currQuantity}</span>
        <button className='button' onClick={() => dispatch(removeFromCart(products.id))}>-</button>
      </div>
    </div>
  )
}

export default SingleProduct