import React, { useState } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import "./EventForm.css";

const EventForm = ({ year, month, day,setError }) => {
  const [meeting, setMeeting] = useState({
    eventname: "",
    venue: "",
    time: "",
    description: "",
    canteen: false,
    count: 0,
    mealtype: "Refreshment"
  });
  
  const handleChange = (e) => {
    if (e.target.name === "canteen") {
      setMeeting({ ...meeting, [e.target.name]: !meeting.canteen });
    } else {
      setMeeting({ ...meeting, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventdate = `${year}-${month}-${day}`
    const today = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2,"0")}-${new Date().getDate()}`
    
    if(today === eventdate){
        setError("Choose a free slot to book meeting*")
    }else{
        setError("")
        console.log(meeting,eventdate);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 my-sm-3">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Event Name"
          name="eventname"
          value={meeting.eventname}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Venue</Form.Label>
        <Form.Control
          as="select"
          name="venue"
          value={meeting.venue}
          onChange={handleChange}
          required
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
      <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={meeting.time}
            onChange={handleChange}
            required
          />
      </Form.Group>
      
      <Form.Group className="my-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={meeting.description}
          onChange={handleChange}
          required
        />
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
        <>
          <Form.Group className="my-3">
            <Form.Label>Meal Type</Form.Label>
            <Form.Control
              as="select"
              name="mealtype"
              value={meeting.mealtype}
              onChange={handleChange}
              required
            >
              <option>Refreshment</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Expected Count</Form.Label>
            <Form.Control
              type="number"
              name="count"
              value={meeting.count}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </>
      )}
      <Row className="d-flex justify-content-center m-4" >
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Row>
    </Form>
  );
};

export default EventForm;
