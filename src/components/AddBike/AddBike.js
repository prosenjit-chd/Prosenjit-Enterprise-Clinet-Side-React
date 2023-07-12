import axios from 'axios';
import ReactLoading from 'react-loading';
import React, { useEffect, useRef, useState } from 'react';
import { Form, Row, Button, Container, Col } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import './AddBike.css';
import swal from 'sweetalert';

const AddBike = () => {
    // Use Ref import here for taking input value
    const titleRef = useRef('');
    const priceRef = useRef('');
    const ccRef = useRef('');
    const milezRef = useRef('');
    const deatailsRef = useRef('');
    const imgRef = useRef('');

    // Use handler for create tour event 
    const handleEvent = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const cc = ccRef.current.value;
        const milez = milezRef.current.value;
        const price = priceRef.current.value;
        const type = deatailsRef.current.value;
        const img = imgRef.current.value;
        const data = { title, price, cc, milez, type, img }
        axios.post('https://prosenjit-enterprise-server-side-node.onrender.com/api/products', data)
            .then(res => {
                swal({
                    title: "Thank you Sir",
                    text: "You status added successfully",
                    icon: "success",
                    button: "Go back!",
                });
                e.target.reset();
            })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="12 w-75 mx-auto">
                        {/* Event information taking form */}
                        <Form onSubmit={handleEvent} className=" border border-2 p-4 bg-light shadow">
                            <h3 className="text-primary mb-3">Add More Bike</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Bike Name</Form.Label>
                                    <Form.Control ref={titleRef} type="text" placeholder="Hero Honda 125" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control ref={priceRef} type="text" placeholder="25000" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control ref={imgRef} type="text" placeholder="https//:abc.jpg" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Bike Type</Form.Label>
                                <Form.Control ref={deatailsRef} type="text" placeholder="home/all" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>CC</Form.Label>
                                    <Form.Control ref={ccRef} type="text" placeholder="150" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Mileage</Form.Label>
                                    <Form.Control ref={milezRef} type="text" placeholder="40" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit"><PlusCircleFill />  Add Bike </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default AddBike;