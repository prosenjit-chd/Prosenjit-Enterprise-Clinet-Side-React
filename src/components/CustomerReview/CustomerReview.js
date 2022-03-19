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
import userphoto from '../../img/user.png';


const CustomerReview = () => {
    // const { id } = useParams();
    // const [event, setEvent] = useState({});
    const { user } = useAuth();
    // const dateRef = useRef('');
    const startRef = useRef('');
    const descriptionRef = useRef('');
    const { token } = useAuth();
    // useEffect(() => {
    //     axios.get(`https://arcane-plains-11484.herokuapp.com/bikescollection/${id}`)
    //         .then(res => setEvent(res.data))
    // }, [])

    //Add Tour event button handler 
    const handleUser = (e) => {
        e.preventDefault();
        const rating = startRef.current.value;
        const comment = descriptionRef.current.value;
        const data = { rating, comment }
        // console.log(data)
        const header = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }

        axios.post('https://blooming-dusk-51251.herokuapp.com/api/reviews', data, header)
            .then(res => {
                swal({
                    title: "Thank you Sir",
                    text: "You review added successfully",
                    icon: "success",
                    button: "Go back!",
                });
                e.target.reset();
            })
            .catch(err => console.log(err))
        console.log(data);
    }

    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col lg="12" className="d-flex justify-content-between flex-column w-75 mx-auto shadow mt-4">
                        <div className="mx-auto text-center mb-3"><img style={{ height: 120, width: 120 }} src={user.photoURL || userphoto} alt="user" /> </div>
                        <Form onSubmit={handleUser} className="w-100 mx-auto border border-1 p-5">
                            <h3 className="t-color mb-3">Write your valuable Review</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                {/* <Form.Control value={user.displayName} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Full Name" />
                                <Form.Control value={user.email} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="email" placeholder=" Email" /> */}
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