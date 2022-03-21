import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to React Website</h2>
            <nav className='menu'>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                </nav>
        </div>
    );
};

export default Header;