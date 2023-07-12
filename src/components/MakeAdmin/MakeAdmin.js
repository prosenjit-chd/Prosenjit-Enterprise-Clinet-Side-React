import axios from 'axios';
import React, { useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';


const MakeAdmin = () => {

    const emailRef = useRef('');

    const addAdmin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const user = { email };
        axios.patch('https://prosenjit-enterprise-server-side-node.onrender.com/api/users/admin', user)
            .then(res => {
                if (res) {
                    alert("admin added")
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="12 w-75 mx-auto">
                        {/* Event information taking form */}
                        <Form onSubmit={addAdmin} className=" border border-2 p-4 bg-light shadow">
                            <h3 className="text-primary mb-3">Add Admin</h3>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Enter Email</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="admin@gmail.com" />
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