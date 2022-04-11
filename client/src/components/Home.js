import React from 'react';
import Booking from './Booking/Booking';
import Header from './Header/Header';
import Meeting from './Meeting/Meeting';

const Home = () => {
    return (
        <div>
            <Header/>
            <Booking/>
            {/* <Meeting/> */}
        </div>
    );
}

export default Home;