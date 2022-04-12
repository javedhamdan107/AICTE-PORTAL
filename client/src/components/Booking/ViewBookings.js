import React from 'react'
import { useSelector } from "react-redux";
import { booking } from "../../features/booking/bookingSelector";
import { useLocation } from 'react-router-dom';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap'
import BookingCard from '../Card/BookingCard';
import './Booking.css'
import Header from '../Header/Header';


const ViewBookings = () => {
    const location = useLocation();
    const type = location.state.detail;
    console.log(type);
    const bookingDetails = useSelector(booking);
    console.log(bookingDetails);

    return (
        <>
            {/* <Navbar bg="light" expand="lg" className='main-header'>
                <Container>
                    <Navbar.Brand className='header'>Your Bookings</Navbar.Brand>
                </Container>
            </Navbar> */}
            <Header />
            <Container>
                    <Navbar.Brand className='header'>Your Bookings</Navbar.Brand>
                </Container>
            <div className='card-container'>
                <Row className="card-row">
                    {bookingDetails.map((booking) => <Col xs={12} md={6} lg={4} xl={3} key={booking._id}>
                        <BookingCard
                            booking={booking}
                        /></Col>)}
                </Row>
            </div>
        </>
    );
}

export default ViewBookings;
