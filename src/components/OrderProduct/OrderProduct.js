import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Form, Button, Card, Row, Col, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import './OrderProduct.css';


const OrderProduct = () => {
    // Here Use useRef, UseAuth, UseParams, UseState 
    const { id } = useParams();
    const [selectProduct, setSelectProduct] = useState({});
    const { user, token } = useAuth();
    const dateRef = useRef('');
    const phoneRef = useRef('');
    const addressRef = useRef('');

    useEffect(() => {
        axios.get(`https://blooming-dusk-51251.herokuapp.com/api/products/${id}`)
            .then(res => setSelectProduct(res.data))
    }, [])

    //Add Tour event button handler 
    const handleUser = (e) => {
        e.preventDefault();
        // const name = user.displayName;
        // const email = user.email;
        // const title = event.title;
        // const deatails = event.description;
        // const img = event.img;
        // const status = false;
        // const date = dateRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const product = selectProduct._id;
        const data = { phone, address, product }
        const header = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }
        axios.post('https://blooming-dusk-51251.herokuapp.com/api/orders', data, header)
            .then(res => {
                swal({
                    title: "Thank you Sir",
                    text: "You order added successfully",
                    icon: "success",
                    button: "Go back!",
                });
                e.target.reset();
            })
        // console.log(data);
    }

    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col lg="5" className="d-flex justify-content-between flex-column">
                        <h3 className="text-primary">{selectProduct.title}</h3>
                        <h5 className="text-dark">Cost Per Person: {selectProduct.price} BDT</h5 >
                        <img className="img-fluid" src={selectProduct.img} alt="ad" />

                    </Col>

                    <Col lg="7" className="d-flex justify-content-between flex-column">
                        <Form onSubmit={handleUser} className="w-100 mx-auto border border-1 p-5">
                            <h3 className="text-dark mb-3">Kindly, fillup the form carefully</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Control value={user.displayName} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Full Name" /> */}
                                {/* <Form.Control value={user.email} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="email" placeholder="Username or Email" /> */}
                                {/* <Form.Control ref={dateRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="date" placeholder="Date" /> */}
                                <Form.Control ref={phoneRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Mobile Number" />
                                <Form.Control ref={addressRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Details Address" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="register-submit">
                                Order Now
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default OrderProduct;