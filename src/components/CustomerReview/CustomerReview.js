import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import './CustomerReview.css';

const CustomerReview = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const dateRef = useRef('');
    const startRef = useRef('');
    const descriptionRef = useRef('');
    useEffect(() => {
        axios.get(`http://localhost:5000/bikescollection/${id}`)
            .then(res => setEvent(res.data))
    }, [])

    //Add Tour event button handler 
    const handleUser = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const photo = user.photoURL;
        const title = event.title;
        const deatails = event.description;
        const img = event.img;
        const status = false;
        const date = dateRef.current.value;
        const start = startRef.current.value;
        const description = descriptionRef.current.value;
        const data = { name, email, photo, title, deatails, img, date, start, description, status }
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                swal({
                    title: "Thank you Sir",
                    text: "You review added successfully",
                    icon: "success",
                    button: "Go back!",
                });
                e.target.reset();
            })
        console.log(data);
    }

    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col lg="12" className="d-flex justify-content-between flex-column w-50 mx-auto shadow">
                        <Form onSubmit={handleUser} className="w-100 mx-auto border border-1 p-5">
                            <h3 className="t-color mb-3">Write your valuable Review</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <div className="mx-auto text-center mb-3"><img style={{ height: 120, width: 120 }} src={user.photoURL} alt="user" /> </div>
                                <Form.Control value={user.displayName} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Full Name" />
                                <Form.Control value={user.email} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="email" placeholder=" Email" />
                                <Form.Control ref={startRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="star" />
                                <Form.Control ref={descriptionRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Details" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="register-submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CustomerReview;