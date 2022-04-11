import React, { useState } from "react";
import { Container, Form, Col, Row,Button } from "react-bootstrap";
import "./EventForm.css";

const EventForm = () => {
  const [meeting, setMeeting] = useState({
      eventname: "",
      venue: "",
      date: "",
      time: "",
      description: "",
      canteen: false,
      count: 0
  })

  const handleChange = (e) => {
    if(e.target.name === 'canteen'){
        setMeeting({...meeting,
            [e.target.name] : !meeting.canteen})
    }else{
        setMeeting({...meeting,
        [e.target.name] : e.target.value})
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(meeting)
  }
  
  return (
    <Container className="form-width">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Event Name" name="eventname" value={meeting.eventname} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Venue</Form.Label>
          <Form.Control as="select" name="venue" value={meeting.venue} onChange={handleChange} required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="my-3" as={Row}>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" value={meeting.date} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" name="time" value={meeting.time} onChange={handleChange} required/>
          </Form.Group>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={meeting.description} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Check
            type="checkbox"
            id="canteencheckbox"
            label="Canteen Facility"
            name="canteen"
            value={meeting.canteen}
            onChange={handleChange}
          />
        </Form.Group>
        {meeting.canteen && (
          <Form.Group>
            <Form.Label>Expected Count</Form.Label>
            <Form.Control type="number" name="count" value={meeting.count} onChange={handleChange} required/>
          </Form.Group>
        )}

        <Button variant="primary" type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EventForm;
