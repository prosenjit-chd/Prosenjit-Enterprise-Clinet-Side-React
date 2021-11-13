import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';


const MyOrders = () => {
    // Use useAuth here 
    const { user } = useAuth();
    // Use UseState here 
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        axios.get('https://arcane-plains-11484.herokuapp.com/orders/')
            .then(res => filterMyEvent(res.data))
    }, [])

    // Filter user indivudiual data 
    const filterMyEvent = (data) => {
        setMyEvents(data.filter(event => event.email === user.email))
    }


    // Delete button handler 
    const handleEventDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://arcane-plains-11484.herokuapp.com/orders/${id}`)
                        .then(res => {
                            const remainingEvents = myEvents.filter(e => e._id !== id);
                            setMyEvents(remainingEvents);
                        }).catch(err => console.log(err))
                    swal("Your order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your order is safe!");
                }
            });


    }
    return (
        <div className="container">
            <Row xs={1} md={2} lg={2} className="g-4 mb-4">
                {/* Self tour card  */}
                {
                    myEvents.map(e => <Col>
                        <Card className="border-0 bg-light p-4 h-100 shadow-lg rounded">
                            <Row>
                                <Col lg="6">
                                    <Card.Img variant="" className="img-fluid mx-auto" src={e.img} />
                                </Col>
                                <Col lg="6">
                                    <Card.Body className="text-center mt-5">
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>
                                            <b> Status: {!e.status ? "Pending" : "Shipped"} </b>
                                        </Card.Text>
                                        <Card.Text>
                                            {e.phone}
                                        </Card.Text>
                                        <Card.Text>
                                            {e.address}
                                        </Card.Text>
                                        <Card.Text>
                                            <b>{e.price}</b>
                                        </Card.Text>
                                        <Button onClick={() => handleEventDelete(e._id)} variant="danger">Cancle</Button>
                                    </Card.Body>
                                </Col>
                            </Row>

                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;