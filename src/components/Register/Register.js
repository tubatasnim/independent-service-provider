import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import Toast from 'react-bootstrap/Toast';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/checkOut');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Two password didnot match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        verifyEmail();

    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email verifycation sent');
            })
    }
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("email sent")
            })
    }
    return (
        <div className='registetion'>
            <h1 className='register-head'>Register</h1>
            <div className=' w-50 mx-auto'>
                <form onSubmit={handleCreateUser} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Password" required />

                    </Form.Group>
                    <p style={{ color: 'red' }}>{error}</p>
                    <Button className='button-style' variant="primary" type="submit" required>
                        Register
                    </Button>
                    <p className='pt-3'>Already have an account?<Link className="form-link" to="/login">Log in</Link></p>
                    <Toast className='toasts'>
                        <Toast.Header>



                        </Toast.Header>

                        <Toast.Body><Button onClick={handlePasswordReset} variant="link">Reset Password?</Button></Toast.Body>
                    </Toast>
                </form>
            </div>
        </div>
    );
};

export default Register;