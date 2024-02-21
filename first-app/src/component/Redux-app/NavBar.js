import './navBar.css';
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

function NavBar() {
    return (
        <div>
            <nav>
                <h2 className="banner">MyStore</h2>
                <div className="right-layout">
                    <div className="cart-layout">
                        <CiShoppingCart />
                        <p> 8 </p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
