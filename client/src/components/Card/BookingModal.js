import React, { useEffect, useState } from 'react';
import { Button, Col, Image, Modal, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './modalStyle.css';

const BookingModal = (booking) => {
    console.log(booking.booking)
    const {
        _id, eventName, eventDate, description, expCount, isCanteen,
        userId, venueId, startTime
    } = booking.booking.booking;

    const dispatch = useDispatch();

    //   useEffect(() => {
    //     dispatch(fetchApplicants(appliedUsers))
    //       .then((result) => {
    //         setAppliedSeekers((prevApplied) => [
    //           ...prevApplied,
    //           applicants.map((seekerId) => result.payload
    //             .find((seeker) => seeker.userTypeId === seekerId))]);

    //         setSelectedSeekers((prevSelected) => [
    //           ...prevSelected,
    //           selected.map((seekerId) => result.payload
    //             .find((seeker) => seeker.userTypeId === seekerId))]);

    //         setHiredSeekers((prevHired) => [
    //           ...prevHired,
    //           hired.map((seekerId) => result.payload
    //             .find((seeker) => seeker.userTypeId === seekerId))]);
    //       });
    //   }, []);

    // const jobSkill = [];

    //   const currentUser = useSelector(user);
    //   const skills = useSelector(selectSkills);

    //   if (skills) {
    //     const required = requiredSkills
    //       .map((reqSkill) => skills
    //         .map((category) => category.skills
    //           .find((skill) => skill.skillCode === reqSkill)));

    //     required.map((skill) => skill.map((selectedSkill) => {
    //       if (selectedSkill) {
    //         jobSkill.push(selectedSkill.skillName);
    //       }
    //       return null;
    //     }));
    //   }
    //   const applyAction = () => {
    //     dispatch(applyJob({ jobId: _id }));
    //     window.location.reload();
    //   };

    return (
        <div>
            <Modal
                show={booking.show}
                onHide={() => booking.setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <div className="modal-header-text">{eventName}</div>
                    </Modal.Title>
                </Modal.Header>
                <Tabs
                    defaultActiveKey="details"
                    transition={false}
                    id="noanim-tab-example"
                    className="tabs"
                >
                    <Tab eventKey="details" title="Details">
                        <Modal.Body>
                            <div>
                                <Row >
                                    <Col sm={12} md={6}>
                                        <div className="job-details">
                                            <span className="content-headers">Event &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; : </span>{eventName}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="job-details"><span className="content-headers">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </span>{eventDate}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    {/* <Col sm={12} md={6}>
                                        <div className="job-details"><span className="content-headers">Venue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </span>{venueId}</div>
                                    </Col> */}
                                    <Col>
                                        <div className="job-details"><span className="content-headers">Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </span>{description}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div className="job-details"><span className="content-headers">Exp Count &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; : </span>{expCount}</div>
                                    </Col>
                                    <Col>
                                        <div className="job-details"><span className="content-headers">Start Time : </span>{startTime}</div>
                                    </Col>
                                </Row>
                            </div>
                        </Modal.Body>
                    </Tab>
                    {/* {currentUser?.userType === 'provider'
                        && <Tab eventKey="applicants" title="Applicants">
                            <Modal.Body>
                                {appliedSeekers[0] && appliedSeekers[0].map((applicant) => <ApplicantDetails
                                    key={applicant._id}
                                    applicant={applicant}
                                    currentJobId={_id}
                                    status="applied"
                                />)}
                            </Modal.Body>
                        </Tab>
                    } */}
                    {/* {currentUser?.userType === 'provider'
                        && <Tab eventKey="selected" title="Selected">
                            <Modal.Body>
                                {selectedSeekers[0] && selectedSeekers[0].map((applicant) => <ApplicantDetails
                                    key={applicant._id}
                                    applicant={applicant}
                                    currentJobId={_id}
                                    status="selected"
                                />)}
                            </Modal.Body>
                        </Tab>
                    } */}
                    {/* {currentUser?.userType === 'provider'
                        && <Tab eventKey="hired" title="Hired">
                            <Modal.Body>
                                {hiredSeekers[0] && hiredSeekers[0].map((applicant) => <ApplicantDetails
                                    key={applicant._id}
                                    applicant={applicant}
                                    currentJobId={_id}
                                    status="hired"
                                />)}
                            </Modal.Body>
                        </Tab>
                    } */}
                </Tabs>
                {/* {
                    currentUser?.userType === 'seeker'
                    && !currentUser?.jobs.find((jobId) => jobId === _id)
                    && <Modal.Footer>
                        <Button variant="primary" onClick={applyAction}>
                            Apply
                        </Button>
                    </Modal.Footer>
                } */}
            </Modal>
        </div>
    );
};

export default BookingModal;
