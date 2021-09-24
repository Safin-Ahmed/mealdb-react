import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <nav className = "primary-menu">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/track">Track</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;