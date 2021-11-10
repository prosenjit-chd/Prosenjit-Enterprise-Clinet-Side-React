import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BadgeCcFill, Bezier, Calendar2DateFill, CheckCircleFill, GeoAltFill } from 'react-bootstrap-icons';
import './Bike.css';

const Bike = (props) => {
    const { _id, title, price, cc, img, milez, deatails } = props.t;
    // use use History function 
    const history = useHistory();
    // use handaler 
    const handleRegistration = (id) => {
        history.push(`/orderproducts/${id}`)
    }
        return (
            <div>
                <Col>
                    <Card className="h-100 bg-light p-2 shadow">
                        <Card.Img variant="top" src={img} className="card-img img-fluid" />
                        <Card.Body>
                            <Card.Title className="card-title" style={{ color: "#e6520e" }}>{title}</Card.Title>
                            <Card.Text className="cart-text">
                                <b className="text-primary">Unit Price: </b>{price} BDT
                            </Card.Text>
                            <Card.Text className="text-dark">
                                {/* {deatails.slice(0, 100)} */}
                            </Card.Text>
                            <div className="card-details">
                                <BadgeCcFill/> Cubic Capacity: <b>{cc} </b> <span className="card-md-icon-1 me-3"> </span><GeoAltFill /> <b>{milez}</b> km/L
                            </div>
                            <Button
                                // Workable button this is
                                className="mt-2"
                                variant="info"
                                onClick={() => handleRegistration(_id)}
                            ><CheckCircleFill /> Order</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div >
        );
    };

    export default Bike;