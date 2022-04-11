import React, { useState } from "react";
import { Container, Col, Button,Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventForm from "../EventForm/EventForm";
import './Booking.css'

const Booking = () => {
  const booked = ["2022-04-24", "2022-04-25", "2022-04-26", "2022-04-27"];

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

  return (
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
  );
};

export default Booking;
