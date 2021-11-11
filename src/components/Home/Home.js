import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Carousel, Card } from 'react-bootstrap';
import { Calendar2DateFill, StarFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Bike from '../Bike/Bike';
import ShowReview from '../ShowReview/ShowReview';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Home = () => {
    // Use State declear here 
    const [service, setService] = useState([]);
    const [review, setReview] = useState([]);

    // sorting feature type course using function 
    const handleFeatured = (data) => {
        setService(data.filter(d => d.type === "home"))
    }

    // Bikes Data fetching
    useEffect(() => {
        fetch('https://arcane-plains-11484.herokuapp.com/bikescollection')
            .then(res => res.json())
            .then(data => handleFeatured(data.bikes))
    }, []);

    // Review Data fetching
    useEffect(() => {
        fetch('https://arcane-plains-11484.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data.review))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            {/* Home page Carousel use here  */}
            <Carousel className="carousel-custom">
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-custom"
                        src="https://i.ibb.co/T2gf4Rq/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3 className="text-primary">Fast and Comfortable</h3> */}
                        <Link className="nav-link" to="/bikes"><button type="button" className="btn btn-primary">Explore New</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-custom"
                        src="https://i.ibb.co/T2gf4Rq/banner1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3 className="text-primary">Hydrolic Break</h3> */}
                        <Link className="nav-link" to="/bikes"><button type="button" className="btn btn-primary">Explore New</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-custom"
                        src="https://i.ibb.co/RNRNPzV/banner2.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>1000+ Showrooms</h3> */}
                        <Link className="nav-link" to="/bikes"><button type="button" className="btn btn-primary">Explore New</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Data fetching  */}
            <Container style={{ "marginTop": "80px" }}>
                <h2 className="t-color">Mostly Liked Bikes</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        service.map(t => <Bike key={t.id} t={t} />)
                    }
                </Row>
            </Container>

            {/* Latest News  */}
            <Container style={{ "marginTop": "80px" }}>
                <h3 className="text-center">Explore</h3>
                <h1 className="t-color text-center">Our News</h1>

                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className="h-100 bg-light p-2 border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/XJFCX6L/FDzz-Dnp-VUAEwz-N.jpg" className="home-card-img img-fluid" />
                            <Card.Body>
                                <Card.Title className="card-title" style={{ color: "black", fontSize: "15px", fontWeight: "bolder" }}>Joan Mir becomes 2020 MotoGP champion</Card.Title>
                                <Card.Text className="text-dark">
                                    Team SUZUKI ECSTAR achieves First Team Title
                                </Card.Text>
                                <div className="card-details">
                                    <Calendar2DateFill /> 18 Nov 2020
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 bg-light p-2 border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/NZ8Djqz/FDzx-VOVk-AMa-Esa.jpg" className="home-card-img img-fluid" />
                            <Card.Body>
                                <Card.Title className="card-title" style={{ color: "black", fontSize: "15px", fontWeight: "bolder" }}>SUZUKI’ NEW ADDITION BANDIT 150 – THE STREET KING</Card.Title>
                                <Card.Text className="text-dark">
                                    Bandit 150 - The Street King
                                </Card.Text>
                                <div className="card-details">
                                    <Calendar2DateFill /> 23 Aug 2020
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 bg-light p-2 border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/YhRJfHB/FDzz-Dno-VUAIlr-Lb.jpg" className="home-card-img img-fluid" />
                            <Card.Body>
                                <Card.Title className="card-title" style={{ color: "black", fontSize: "15px", fontWeight: "bolder" }}>LAUNCHING OF SUZUKI GSX 125 - THE ALL ROUNDER BIKE</Card.Title>
                                <Card.Text className="text-dark">
                                    The All Rounder GSX 125 - from the great combination of the GSX
                                </Card.Text>
                                <div className="card-details">
                                    <Calendar2DateFill /> 10 Aug 2020
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Happy Client Section */}
            <section className="mt-5">
                <Container style={{ "marginTop": "80px" }}>
                    <h1 className="mb-5">Happy <span className="customer-review-tittle">Clients says</span></h1>
                    <Slider {...settings}>
                        {
                            review.map(r => <ShowReview key={r.id} r={r} />)
                        }
                    </Slider>
                </Container>
            </section>
        </div>
    );
};

export default Home;