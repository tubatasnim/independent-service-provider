
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header-section'>
            <h4>World Travel</h4>

            <nav className='header-name mx-3 text-decoration: none'>
                <Link className="mx-3 fw-bold  text-decoration-none text-dark" to="/">Home</Link>
                <Link className='mx-3 fw-bold text-decoration-none text-dark' to="/checkOut">Check Out</Link>
                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/blogs">Blogs</Link>
                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/aboutMe">About Me</Link>
                {
                    user ?
                        <button onClick={handleSignOut} className=' fw-bold border border-info bg-danger rounded-3 p-2' >Sign Out</button>
                        :
                        <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/login">Log in</Link>
                }

                <Link className='mx-3 text-decoration-none fw-bold text-dark' to="/register">Register</Link>
            </nav>

        </div>
    );
};

export default Header;