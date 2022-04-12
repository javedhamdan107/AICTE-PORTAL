import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container, NavDropdown, Nav, Row, Col, Card, Button } from 'react-bootstrap'
import './dashboard.css';
import { viewBookings } from '../../features/booking/bookingSlice';
import { UNKNOWN_ERROR_MSG } from '../../app/constants';
import { push } from 'connected-react-router';
import { user } from '../../features/user/userSelectors';
import Header from '../Header/Header';
import ViewBookings from '../Booking/ViewBookings';



export default function Dashboard() {
    const [error, setError] = useState({});

    const dispatch = useDispatch();

    const userDetails = useSelector(user);

    const handleClick = () => {

        dispatch(viewBookings()).then(({ meta, payload }) => {
            if (meta.requestStatus === 'rejected') {
                setError({ responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG });
            } else {
                dispatch(push('/user/booking'));
            }
        });
    }


    const handleView = (event) => {

        dispatch(viewBookings()).then(({ meta, payload }) => {
            if (meta.requestStatus === 'rejected') {
                setError({ responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG });
            } else {
                dispatch(push({ pathname: '/user/viewBooking', state: { detail: event.target.id } }));
            }
        });

    }



    return (
        <div >
            <Header />
            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >Dashboard</Navbar.Brand>
                </Container>
            </Navbar> */}
            <Container className='container'>
                <Row xs={1} sm={1} className='justify-content-md-center'>
                    {/* <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Members
                                </Card.Title>
                                <Card.Text>
                                    10,250
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    <Col >
                        <Card className="fullw">
                            <Card.Body>
                                <Card.Title>
                                    {userDetails.name}
                                </Card.Title>
                                <Card.Text>
                                    {userDetails.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className='container'>
                <Row xs={1} sm={2} className='buttons'>
                    <Col>
                        <Button className='buttonColor1' size='lg' onClick={handleView}>
                            Activity Log
                        </Button>
                    </Col>
                    <Col>
                        <Button className='buttonColor2' size='lg' onClick={handleClick}>
                            Book an Event
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div>
    </div>
        </div>
    );
}