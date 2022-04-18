import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header-section'>
            <div> <h4>World Travel</h4></div>
            <div >
                <nav className='header-name'>
                    <Link to="/">Home</Link>
                    <Link to="/checkOut">Check Out</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/aboutMe">About Me</Link>
                    <Link to="/login">Log in</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;