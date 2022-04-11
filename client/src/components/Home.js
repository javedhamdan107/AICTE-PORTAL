import React from 'react';
import Booking from './Booking/Booking';
import EventForm from './EventForm/EventForm';
import Header from './Header/Header';
import Meeting from './Meeting/Meeting';

const Home = () => {
    return (
        <div>
            <Header/>
            {/* <Booking/> */}
            {/* <Meeting/> */}
            <EventForm/>
        </div>
    );
}

export default Home;