import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { ArchiveFill } from 'react-bootstrap-icons';
import ReactLoading from 'react-loading'
import swal from 'sweetalert';

const Managebike = () => {
    // Use USe State here 
    const [events, setEvents] = useState([]);
    // Use Effect use here for fetching data 
    useEffect(() => {
        axios.get('https://arcane-plains-11484.herokuapp.com/bikescollection')
            .then(res => setEvents(res.data.bikes))
    }, [])

    // Delete Order event button handler 
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
                    axios.delete(`https://arcane-plains-11484.herokuapp.com/bikescollection/${id}`)
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

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="12" className="w-75 mx-auto">
                        <h2 className="t-color m-3">All Bikes manage</h2>
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
                                            <th>Img</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>CC</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            events.map((e, i) => <tr>
                                                <td>{i + 1}</td>
                                                <td><img style={{ height: "80px", textAlign: "center" }} className="img-fluid" src={e.img} alt="bike" /></td>
                                                <td>{e.title}</td>
                                                <td>{e.price}</td>
                                                <td>{e.cc}</td>
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

export default Managebike;