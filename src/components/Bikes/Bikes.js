import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Bike from '../Bike/Bike';
import './Bikes.css';


const Bikes = () => {
    // Use USe State here 
    const [service, setService] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://blooming-dusk-51251.herokuapp.com/api/products')
            .then(res => res.json())
            .then(data => setService(data.products))
    }, []);
    return (
        // Side Bar here 
        <Container style={{ "marginTop": "80px" }}>
            <Row className="g-4">
                <Col xs="12" md="2" lg="3" className="side-bar">

                    <ListGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Search Name"
                            />
                        </InputGroup>
                        <ListGroup.Item>Suzuki RS-1</ListGroup.Item>
                        <ListGroup.Item>Yamaha TD-4</ListGroup.Item>
                        <ListGroup.Item>Yamaha G72</ListGroup.Item>
                        <ListGroup.Item>Honda J12</ListGroup.Item>
                        <ListGroup.Item>Suzuki FZ v-02</ListGroup.Item>
                        <ListGroup.Item>Honda R15 v-02</ListGroup.Item>
                        <ListGroup.Item>Yamaha Nazo v-02</ListGroup.Item>
                        <ListGroup.Item>Honda ZX v-04</ListGroup.Item>
                        <ListGroup.Item>Yamaha ZX v-04</ListGroup.Item>
                        <ListGroup.Item>Suzuki RS-1</ListGroup.Item>
                        <ListGroup.Item>Yamaha TD-4</ListGroup.Item>
                        <ListGroup.Item>Yamaha G72</ListGroup.Item>
                        <ListGroup.Item>Honda J12</ListGroup.Item>
                        <ListGroup.Item>Suzuki FZ v-02</ListGroup.Item>
                        <ListGroup.Item>Honda R15 v-02</ListGroup.Item>
                        <ListGroup.Item>Yamaha Nazo v-02</ListGroup.Item>
                        <ListGroup.Item>Honda ZX v-04</ListGroup.Item>
                        <ListGroup.Item>Yamaha ZX v-04</ListGroup.Item>
                        <ListGroup.Item>Suzuki RS-1</ListGroup.Item>
                        <ListGroup.Item>Yamaha TD-4</ListGroup.Item>
                        <ListGroup.Item>Yamaha G72</ListGroup.Item>
                        <ListGroup.Item>Honda J12</ListGroup.Item>
                    </ListGroup>
                </Col>
                {/* Data Maping here  */}
                <Col xs="12" md="2" lg="9">
                    <h2 className="t-color">Explore our all bikes</h2>
                    <Row xs={1} md={2} lg={2} className="g-5 mb-4">
                        {
                            service.map(t => <Bike key={t.id} t={t} />)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Bikes;