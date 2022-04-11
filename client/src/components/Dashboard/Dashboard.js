import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Row, Col, Card, Button } from 'react-bootstrap'
import './dashboard.css'
export default function Dashboard() {
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
                        <Button variant='primary' size='lg'>
                            View
                        </Button>
                    </Col>
                    <Col>
                        <Button variant='secondary' size='lg'>
                            Book
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
