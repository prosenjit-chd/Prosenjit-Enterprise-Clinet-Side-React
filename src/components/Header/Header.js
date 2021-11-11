import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Container, Nav, Navbar, Button, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import userphoto from '../../img/user.png';
import { ArrowsMove, BagCheckFill, Basket2Fill, BoxArrowInLeft, Coin, NodePlusFill, PersonPlusFill, PlusSquareFill } from 'react-bootstrap-icons';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#165aee",
        borderBottom: "solid 2px #165aee"
    }
    // use auth use here 
    const { user, logOut, admin } = useAuth();

    return (
        <>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="border border-bottom-2 fixed-top bg-light" style={{ "backgroundColor": "rgba(0, 0, 0, 0)" }}>
                <Container fluid>
                    <NavLink style={{ color: "#165aee" }} className="navbar-brand fw-bold" to="/home"> <img style={{ height: 60, width: 60 }} src="https://i.ibb.co/2SSWth9/motorcycles-icon-png-2700.png" alt="banner" />Prosenjit Enterprise</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="home">Home</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/aboutus">About Us</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/bikes">Explore more</NavLink>
                            {
                                user?.email ?
                                    <div>
                                        <img style={{ height: 30, width: 30, borderRadius: "50%" }} src={user.photoURL || userphoto} alt="user" />
                                        <span> {user.displayName}</span>
                                        {!admin ?
                                            <DropdownButton variant="primary" className="d-inline ms-3 me-3 mx-auto text-bold" id="dropdown-basic-button" title="User Dashboard">
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/myorders"><BagCheckFill className="me-1" /> My Orders</NavLink>
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/customerreview"><PlusSquareFill className="me-1" /> Add Review</NavLink>
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/payment"><Coin className="me-1" /> Payment</NavLink>
                                                <Button className="ms-2" onClick={logOut} variant="danger"><BoxArrowInLeft className="me-1" /> LogOut</Button>
                                            </DropdownButton>
                                            :

                                            <DropdownButton variant="info" className="d-inline ms-3 me-3 mx-auto" id="dropdown-basic-button" title="@ Admin Portal">
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/allorders"><Basket2Fill className="me-1" /> Orders</NavLink>
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/addadmin"><PersonPlusFill className="me-1" /> Add Admin</NavLink>
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/addbike"><NodePlusFill className="me-1" /> Add Bikes</NavLink>
                                                <NavLink className="nav-link" activeStyle={activeStyle} to="/managebike"><ArrowsMove className="me-1" /> Bikes</NavLink>
                                                <Button className="ms-2" onClick={logOut} variant="danger"><BoxArrowInLeft className="me-1 mt-1" /> LogOut</Button>
                                            </DropdownButton>

                                        }

                                    </div>
                                    :
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/signin">Signin</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 90 }}>

            </div>
        </>
    );
};

export default Header;