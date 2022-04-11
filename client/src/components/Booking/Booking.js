import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Booking = () => {
const booked = ['Tue Apr 19 2022 00:00:00 GMT+0530 (India Standard Time)'];
const [value, setValue] = useState(new Date());

const dayClick = (e) => {
    //setValue(e);
    //console.log(e);
}
const disableDay = (date) => {
    console.log(new Date(date).toString())
    const found = booked.includes(new Date(date).toString())
    //console.log(found)
    return found;
}

  return (
    <div>
      <Calendar  onChange={setValue} value={value} tileDisabled={() => disableDay(value)}/>
    </div>
  );
}

export default Booking;
