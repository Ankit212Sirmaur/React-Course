import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../ReactRedux/Slice/productSlice';
import SingleProduct from './SingleProduct';
import './Productlist.css'

function Productlist() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        dispatch(loadProducts(data));
    }

    return <div className='productlist'>{products.map(item => <SingleProduct key={item.id} products={item}/>)} </div>;
}

export default Productlist;
