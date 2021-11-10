import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import './About.css';

const About = () => {
    return (
        <Container className="bg-light shadow-lg p-3 rounded" style={{ marginTop: 50 }}>
            <Row className="pt-5">
                <Col lg="6">
                    <img className="img-fluid rounded-1" src="https://i.ibb.co/mtw22NV/246720841-4591048920983355-8135601847782439449-n.jpg" alt="" />
                </Col>
                <Col lg="6">
                    <h1 className="custom-color-blue mt-3">Prosenjit Enterprise and bike seller agenct</h1>
                    <h5 className="my-4" style={{ color: "black", fontSize: "17px", fontWeight: "bolder" }}>
                    Rancon Motorbikes Limited has officially launched virtually world-famous motorbike brand Suzuki’s completely new Gixxer & New Gixxer SF series. Each model comes with two versions; one is with Fi-ABS and the other is Carburetor-Disc version. Japanese technology-enriched both the bikes – Prosenjit Ch (CEO)
                    </h5>
                    <Row>
                        <Col lg="6">
                            <p><CheckCircleFill className="custom-text-color" /> Personal Management</p>
                            <p><CheckCircleFill className="custom-text-color" /> Highest Quality Provide</p>
                            <p><CheckCircleFill className="custom-text-color" /> Latest Service</p>
                        </Col>
                        <Col lg="6">
                            <p><CheckCircleFill className="custom-text-color" /> Led by Passionate Experts</p>
                            <p><CheckCircleFill className="custom-text-color" /> We Ensure Safety</p>
                            <p><CheckCircleFill className="custom-text-color" /> Affordable Prices</p>
                        </Col>
                    </Row>
                    <Button className="rounded-pill mt-4" style={{ backgroundColor: '#33D1CB' }}>LEARN MORE</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;