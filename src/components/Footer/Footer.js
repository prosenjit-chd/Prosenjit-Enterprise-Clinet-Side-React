import React from 'react';
import { BinocularsFill, Calendar2DayFill, CashCoin, CreditCard2Back, Headset, HouseDoorFill, JournalBookmarkFill, Safe2Fill } from 'react-bootstrap-icons';
// External CSS Style Added here 
import './Footer.css'

// Here use all are non bootstrao component 
const Footer = () => {
    return (

        <div className="mt-4">
            <div>
                <section className="container-fluid about-us-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="shop-departments">
                                    <ul>
                                        <li>
                                            <h5>Our Agrement Country</h5>
                                        </li>
                                        <li>India</li>
                                        <li>Nepal</li>
                                        <li>USA</li>
                                        <li>Indenosia</li>
                                        <li>Sapogitor</li>
                                        <li>Vacine</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="account-shipping-info">
                                    <ul>
                                        <li>
                                            <h5>Account & journey info</h5>
                                        </li>
                                        <li>Your account</li>
                                        <li>Travell rates & policies</li>
                                        <li>Refunds & replacements</li>
                                    </ul>
                                </div>
                                <div className="about-us">
                                    <ul>
                                        <li>
                                            <h5>About us</h5>
                                        </li>
                                        <li>About company</li>
                                        <li>Our team</li>
                                        <li>Careers</li>
                                        <li>News</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="stay-informed">
                                    <h5>Download our app</h5>
                                    <div className="app">
                                        <div className="ios">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                                alt="" />
                                            <div className="ios-detail">
                                                <small>Download on the</small>
                                                <h6>App Store</h6>
                                            </div>
                                        </div>
                                        <div className="android">
                                            <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-play-store-logo.png"
                                                alt="" />
                                            <div className="android-detail">
                                                <small>Download on the</small>
                                                <h6>Google Play</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid why-us-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="why-us">
                                    <div className="why-us-logo">
                                        <BinocularsFill />
                                    </div>
                                    <div className="why-us-detail">
                                        <h5>Fast and free delivery</h5>
                                        <p>Free delivery for all orders over $200</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="why-us">
                                    <div className="why-us-logo">
                                        <CashCoin />
                                    </div>
                                    <div className="why-us-detail">
                                        <h5>Money back guarantee</h5>
                                        <p>We return money within 30 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="why-us">
                                    <div className="why-us-logo">
                                        <Headset />
                                    </div>
                                    <div className="why-us-detail">
                                        <h5>24/7 customer support</h5>
                                        <p>Friendly 24/7 customer support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="why-us">
                                    <div className="why-us-logo">
                                        <CreditCard2Back />
                                    </div>
                                    <div className="why-us-detail">
                                        <h5>Secure online payment</h5>
                                        <p>We possess SSL / Secure —Āertificate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="copyright">© All rights reserved.  Prosenjit Chowdhury. 2021</p>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Footer;