import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Container, Nav, Navbar, Button, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#165aee",
        borderBottom: "solid 2px #165aee"
    }
    // use auth use here 
    const { user, logOut } = useAuth();

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
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/allorders">All</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/addadmin">Admin</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/addbike">Add</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/managebike">Delete</NavLink>
                            {
                                user?.email ?
                                    <div>
                                        <img style={{ height: 30, width: 30, borderRadius: "50%" }} src={user.photoURL} alt="user" />
                                        <span> {user.displayName}</span>
                                        <DropdownButton className="d-inline ms-3 me-3 mx-auto" id="dropdown-basic-button" title="Dashboard">

                                            <NavLink to="/myorders">My Orders</NavLink><br />
                                            <NavLink to="/customerreview">Review</NavLink ><br />
                                            <NavLink to="/payment">Payment</NavLink ><br />
                                            <Button onClick={logOut} variant="danger">LogOut</Button>
                                            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                        </DropdownButton>


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