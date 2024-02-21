import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../ReactRedux/Slice/productSlice';
import SingleProduct from './SingleProduct';
import './Productlist.css'

function Productlist() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);

    useEffect(() => {
        dispatch(fetchData());
    }, []);
    
    if(status === 'loading'){
        return <h3>loading... </h3>   
    }
    return <div className='productlist'>{products.map(item => <SingleProduct key={item.id} products={item}/>)} </div>;
}

export default Productlist;
