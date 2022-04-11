import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";


const MeetingCard = () => {
    return (
        <Col>
        <Card>
            <Card.Body>
              <Card.Title>Meeting Name</Card.Title>
              <Card.Subtitle className="my-2">Bureau Name</Card.Subtitle>
              <Card.Text>Venue : </Card.Text>
              <Card.Text>Date : </Card.Text>
              <Card.Text>Time : </Card.Text>
            </Card.Body>
          </Card>
          </Col>
    )
}

const Meeting = () => {
  return (
    <Container className="mt-4">
      <Row>
        <MeetingCard/>
        <MeetingCard/>
        <MeetingCard/>
      </Row>
    </Container>
  );
};

export default Meeting;
