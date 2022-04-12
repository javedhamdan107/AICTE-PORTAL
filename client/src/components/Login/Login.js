import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import "./login.css";
import { signin } from "../../features/user/userSlice";
import { isValidEmail } from "../../helpers/utils";
import { UNKNOWN_ERROR_MSG } from "../../app/constants";
import { viewVenues } from "../../features/venues/venueSlice";
import { findMembers } from "../../features/members/memberSlice";
import { viewBookings } from "../../features/booking/bookingSlice";
import { Col, Container, Form, Row } from "react-bootstrap";

const validateSignin = ({ email, password }) => {
  const validateError = {};

  if (email === "") {
    validateError.email = "Email is missing";
  } else {
    const validEmail = isValidEmail(email);
    if (!validEmail) {
      validateError.email = "You have entered an invalid email address!";
    }
  }

  if (password === "") {
    validateError.password = "Password is missing";
  }
  return validateError;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const validatedErrors = validateSignin({ email, password });
    setError(validatedErrors);

    if (Object.keys(validatedErrors).length !== 0) {
      return;
    }

    dispatch(signin({ email, password })).then(({ meta, payload }) => {
      const id = payload._id;
      console.log(id);
      dispatch(findMembers({ userId: id })).then(({ meta, payload }) => {
        if (meta.requestStatus === "rejected") {
          setError({
            responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG,
          });
        }
      });

      dispatch(viewVenues()).then(({ meta, payload }) => {
        if (meta.requestStatus === "rejected") {
          setError({
            responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG,
          });
        }
      });

      dispatch(viewBookings()).then(({ meta, payload }) => {
        if (meta.requestStatus === "rejected") {
          setError({
            responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG,
          });
        }
      });

      if (meta.requestStatus === "rejected") {
        setError({
          responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG,
        });
      } else {
        dispatch(push("/user/dashboard"));
      }
    });
  };

  return (
    <Container className="login-form-container " fluid>
      <Row>
        <Col className="d-none d-sm-block signin-box signin-box-color"></Col>
        <Col className="signin-box d-flex flex-column justify-content-center">
          <h3 className="mb-5">AICTE Event Management Portal</h3>
          <Form>
            <h4 className="header">Sign In</h4>
            <Form.Group className="my-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={error.email}
              />
            </Form.Group>
            <Form.Group className="my-4">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={error.password}
              />
            </Form.Group>

            <button
              type="submit"
              className="btn btn-primary mb-4 signin-btn p-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;