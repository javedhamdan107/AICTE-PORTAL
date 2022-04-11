import React, { useState } from "react";
import { Container, Col, Button,Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Booking.css'

const Booking = () => {
  const booked = ["2022-04-04", "2022-04-05", "2022-04-06", "2022-04-07"];

  const [value, setValue] = useState(new Date());

  const disableDay = ({ activeStartDate, date, view }) => {
    const found = booked.find((ele) => {
      const eledate = new Date(ele);
      return (
        date.getDate() === eledate.getDate() &&
        date.getMonth() === eledate.getMonth() &&
        date.getFullYear() === eledate.getFullYear()
      );
    });
    if (found) return true;
    return false;
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Col>
        <Calendar onChange={setValue} value={value} tileDisabled={disableDay} />
      </Col>
      <Col>
      {new Date(value).toDateString()}
      <Col className="m-3">
          <Button>Book Slot</Button>
      </Col>
      
      </Col>
    </Container>
  );
};

export default Booking;
