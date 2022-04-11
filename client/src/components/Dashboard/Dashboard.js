import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Container, NavDropdown, Nav, Row, Col, Card, Button } from 'react-bootstrap'
import './dashboard.css';
import { viewBookings } from '../../features/booking/bookingSlice';
import { UNKNOWN_ERROR_MSG } from '../../app/constants';
import { push } from 'connected-react-router';



export default function Dashboard() {
    const [error, setError] = useState({});

    const dispatch = useDispatch();

    const handleClick = () => {
    
        dispatch(viewBookings()).then(({ meta, payload }) => {
            if (meta.requestStatus === 'rejected') {
              setError({ responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG });
            }else{
                dispatch(push('/user/booking'));
            }
          });
    }

    return (
        <div className='m-2'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
            <Container className='container'>
                <Row xs={1} sm={2} className='justify-content-md-center'>
                    <Col>
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
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Description
                                </Card.Title>
                                <Card.Text>
                                    Lorem Ipsum dummy text ........
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className='container'>
                <Row xs={1} sm={2} className='buttons'>
                    <Col>
                        <Button variant='primary' size='lg' className='view-btn'>
                            View
                        </Button>
                    </Col>
                    <Col>
                        <Button variant='secondary' size='lg' onClick={handleClick}>
                            Book
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
