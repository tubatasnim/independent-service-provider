import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/checkOut">Check Out</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Header;