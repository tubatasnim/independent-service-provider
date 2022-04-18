import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header-section'>
            <h4>World Travel</h4>

            <nav className='header-name mx-3 text-decoration: none'>
                <Link className="mx-3 fw-bold  text-decoration-none text-dark" to="/">Home</Link>
                <Link className='mx-3 fw-bold text-decoration-none text-dark' to="/checkOut">Check Out</Link>
                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/blogs">Blogs</Link>
                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/aboutMe">About Me</Link>
                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/login">Log in</Link>
                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/register">Register</Link>
            </nav>

        </div>
    );
};

export default Header;