import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import "./EventForm.css";

import { user } from "../../features/user/userSelectors";
import { venue } from "../../features/venues/venueSelectors";
import { createBookings } from "../../features/booking/bookingSlice";

const EventForm = ({ year, month, day,setError }) => {

  const userDetails = useSelector(user);
  const venueDetails = useSelector(venue);

  const dispatch = useDispatch();

  const [meeting, setMeeting] = useState({
    eventName: "",
    venueId: venueDetails[0]._id,
    startTime: "",
    description: "",
    isCanteen: false,
    expCount: 0,
    mealType: "Refreshment"
  });
  
  const handleChange = (e) => {
    if (e.target.name === "isCanteen") {
      setMeeting({ ...meeting, [e.target.name]: !meeting.isCanteen });
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
        setError("");
        const bookingDetails = {
          userId : userDetails._id,
          eventName : meeting.eventName,
          venueId : meeting.venueId,
          startTime : meeting.startTime,
          description : meeting.description,
          isCanteen : meeting.isCanteen,
          expCount : meeting.expCount,
          mealType : meeting.mealType,
          eventDate : eventdate
        }

        console.log(bookingDetails);
        
        dispatch(createBookings(bookingDetails));
        dispatch(push("/user/dashboard"));
        
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 my-sm-3">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Event Name"
          name="eventName"
          value={meeting.eventName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Venue</Form.Label>
        <Form.Control
          as="select"
          name="venueId"
          value={meeting.venue}
          onChange={handleChange}
          required
        >
          {
            venueDetails.map((ven) => {
              return(
                <option value={ven._id}>{ven.name}, {ven.location}</option>
              )
            })
          }
          {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option> */}
        </Form.Control>
      </Form.Group>
      <Form.Group>
      <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="startTime"
            value={meeting.startTime}
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
          name="isCanteen"
          value={meeting.isCanteen}
          onChange={handleChange}
        />
      </Form.Group>
      {meeting.isCanteen && (
        <>
          <Form.Group className="my-3">
            <Form.Label>Meal Type</Form.Label>
            <Form.Control
              as="select"
              name="mealtype"
              value={meeting.mealType}
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
              name="expCount"
              value={meeting.expCount}
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
