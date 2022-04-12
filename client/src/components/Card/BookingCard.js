import React, { useEffect, useState } from 'react';
import { useDispatch, } from 'react-redux';
import { StyledBookingCard } from './BookingCardStyles';
import BookingModal from './BookingModal';

const BookingCard = (booking) => {
    const dispatch = useDispatch();


    const { eventName, eventDate } = booking.booking;
    const [show, setShow] = useState(false);

    return (
        <>
            <StyledBookingCard onClick={() => setShow(true)}>
                <div className="radio-card-header">
                    {eventName}
                </div>
                <div className="job-description">
                    <div className="description-header">Event Date :  </div>
                    {eventDate}
                </div>
            </StyledBookingCard>
            <BookingModal booking={booking} show={show} setShow={setShow} />
        </>
    );
};

export default BookingCard;
