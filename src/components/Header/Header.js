import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href="../Shop/Shop.js">Shop</a>
                <a href="/review">Order</a>
                <a href="/manage">Manage</a><
                /nav>
        </div>
    );
};

export default Header;