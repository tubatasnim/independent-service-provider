import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/checkOut')
    }
    return (
        <div className='login-style'>
            <h1 className='login-head'>Login</h1>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <Button className='button-style' variant="primary" type="submit" required>
                        Log in
                    </Button>
                    <p className='pt-3'>New to world traveler?<Link className="form-link" to="/register">Create an account</Link></p>
                </form>
            </div>
        </div >
    );
};

export default Login;