import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';

const MakeAdmin = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="12 w-50 mx-auto">
                        {/* Event information taking form */}
                        <Form className=" border border-2 p-4 bg-light shadow">
                            <h3 className="text-primary mb-3">Add Admin</h3>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Enter Email</Form.Label>
                                    <Form.Control type="email" placeholder="admin@gmail.com" />
                                </Form.Group>
                            <Button className="mt-3" variant="primary" type="submit"><PlusCircleFill />  Add Admin </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;