import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Button,Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventForm from "../EventForm/EventForm";
import './Booking.css'
import { booking } from "../../features/booking/bookingSelector";
import { authenticate } from "../../features/user/userSlice";
import { viewBookings } from "../../features/booking/bookingSlice";
import { findMembers } from "../../features/members/memberSlice";
import { viewVenues } from "../../features/venues/venueSlice";
import StateLoader from "../loaders/StateLoader";
import Header from '../Header/Header';

const Booking = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const bookingDetails = useSelector(booking);
  console.log(bookingDetails);
  useEffect(() => {
    if (bookingDetails != null) {
      setLoading(false);
    } else {
      dispatch(authenticate()).then((user) => {
        setLoading(false);
        dispatch(viewBookings());
        dispatch(findMembers({ userId: user.payload._id }));
      });
      dispatch(viewVenues());
    }
  }, [setLoading]);

  const booked = [];
  if(bookingDetails != null ){
    bookingDetails.map((detail) => booked.push(detail.eventDate.substring(0,10)))
  }
  // const booked = ["2022-04-24", "2022-04-25", "2022-04-26", "2022-04-27"];

  const [value, setValue] = useState(new Date());
  const [error, setError] = useState("")
  
  const disableDay = ({ activeStartDate, date, view }) => {
    const found = booked.find((ele) => {
      const eledate = new Date(ele);
      return (
        date.getDate() === eledate.getDate() &&
        date.getMonth() === eledate.getMonth() &&
        date.getFullYear() === eledate.getFullYear() || new Date(date) < new Date()
      );
    });
    if (found) return true;
    return false;
  };

  if (loading) {
    return <StateLoader/>;
  }

  return (
    <>
    <Header />
    <Container >
      <Row xs={1} md={2}>
        <Col className="my-3 d-flex d-md-block justify-content-center">
          <Calendar onChange={setValue} value={value} tileDisabled={disableDay} view="month"/>
          <div className="error">{error}</div>
        </Col>
        <Col>
          <EventForm year={new Date(value).getFullYear()} month={(new Date(value).getMonth() + 1).toString().padStart(2,"0")} day={new Date(value).getDate()} setError={setError}/>     
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Booking;
