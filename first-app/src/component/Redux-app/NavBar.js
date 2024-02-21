import './navBar.css';
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';

function NavBar() {
    const cart = useSelector(state => state.cartReducer.cart);
    let  count = 0;
    cart.forEach((item) => (count += item.quantity));

    return (
        <div>
            <nav>
                <h2 className="banner">MyStore</h2>
                <div className="right-layout">
                    <div className="cart-layout">
                        <CiShoppingCart />
                        <p>{count} </p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
