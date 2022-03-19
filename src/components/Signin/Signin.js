import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Signin.css';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, processLogin, setIsLoading, error, setError, saveUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // const handleGoogleSignIn = (location, history) => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             const { email, displayName } = result.user;
    //             saveUser(email, displayName, 'put');
    //             history.push(redirect_url)
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSimpleSignIn = (e) => {
        e.preventDefault();
        processLogin(email, password)
            .then(result => {
                setError('')
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="home pt-2 mt-5">
            <Container className="mt-5">
                <div className="mt-5 py-3 px-5 mx-auto home-detail">
                    <h3 className="text-center mb-4">Signin</h3>
                    <Form onSubmit={handleSimpleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-flex flex-column justify-content-center">
                            <Button variant="info" type="submit">
                                Sign In
                            </Button>
                            <br />
                            <Link className="text-center" to="/register">Create A New Account</Link>
                            <hr />
                            <p className="text-center">........OR..........</p>
                            <Button className="text-light" variant="primary" onClick={handleGoogleSignIn}>
                                <Google /> <span className="fw-bold">Sign In With Google</span>
                            </Button>
                        </div>
                    </Form>
                    <p className="text-danger">{error}</p>
                </div>
            </Container>
        </div>
    );
};

export default Signin;