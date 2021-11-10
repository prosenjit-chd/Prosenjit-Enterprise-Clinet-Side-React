import React, { useState } from 'react';
import './Register.css';
import { Container, Form, Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { registerNewUser, error, setError } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        else {
            registerNewUser(email, password, name);
            history.push("/signin");

        }
    }
    return (
        <div className="home-main pt-2 mt-5">
            <Container className="mt-5">
                <div className="py-5 mx-auto home-detaimain">
                    <h3 className="text-center mb-3 mt-2">Registration</h3>
                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
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
                                Sign Up
                            </Button>
                            <br />
                            <Link className="text-center" to="/signin">Already Have Account? SignIN</Link>
                            <hr />
                            <p className="text-center">.........OR...........</p>
                            <Button className="text-light" variant="primary">
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

export default Register;