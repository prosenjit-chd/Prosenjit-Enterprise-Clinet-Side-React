import axios from 'axios';
import React from 'react';
import ReactLoading from 'react-loading'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { ArchiveFill, Calendar2DateFill, CheckSquareFill, GeoAltFill } from 'react-bootstrap-icons';
import swal from 'sweetalert';
import './AllOrders.css';

const AllOrders = () => {
    // Use USe State here 
    const [events, setEvents] = useState([]);
    let updateUser = {};
    // Use Effect use here for fetching data 
    useEffect(() => {
        axios.get('https://arcane-plains-11484.herokuapp.com/orders')
            .then(res => setEvents(res.data))
    }, [updateUser])

    // Delete Bike buy event button handler 
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
                            const remainingEvents = events.filter(e => e._id !== id);
                            setEvents(remainingEvents);

                        }).catch(err => console.log(err))
                    swal("The order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your order is safe!");
                }
            });
    }

    // Update Tour event button handler 
    const handleUserStatus = (id) => {
        updateUser = events.find(event => event._id === id)
        updateUser.status = !updateUser.status;
        axios.put(`https://arcane-plains-11484.herokuapp.com/orders/${id}`, updateUser)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    swal({
                        title: "Thank you Sir",
                        text: "The status updated successfully",
                        icon: "success",
                        button: "Go back!",
                    });
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="12" className="w-75 mx-auto">
                        <h2 className="t-color m-3">All Orders and User Information</h2>
                        {
                            !events.length ?

                                <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                                    <ReactLoading type={"bars"} color={"#7ea0ff"} height={100} width={100} />
                                </div>
                                :

                                < Table className="custom-color shadow" striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>Num</th>
                                            <th>User Name</th>
                                            <th>Email ID</th>
                                            <th>Reg date</th>
                                            <th>Bike</th>
                                            <th>Status</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            events.map((e, i) => <tr>
                                                <td>{i + 1}</td>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                                <td>{e.date}</td>
                                                <td>{e.title}</td>
                                                <td className={!e.status ? "text-secondary" : "text-primary "} >{!e.status ? "Pending" : "Shipped"}</td>
                                                <td onClick={() => handleUserStatus(e._id)} className={!e.status ? "text-danger text-center" : "text-success text-center"} role="button"><CheckSquareFill /></td>
                                                <td className="text-center text-danger" role="button" onClick={() => handleEventDelete(e._id)} > <ArchiveFill></ArchiveFill> </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </Table>
                        }

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default AllOrders;