import Member from '../models/member.js';
import Booking from '../models/booking.js';

export const createMember = async (userDetails) => {
    const { email, name, mobileNum, typeId  } = userDetails;


    const { _doc: member } = await Member.create({
      name,
      email,
      mobileNum,
      typeId
    });
  
    return member;
  };

  export const createBooking = async (userDetails) => {
    const { userId, venueId, eventName, eventDate, startTime, description, isCanteen, mealType, expCount } = userDetails;

    const { _doc: booking } = await Booking.create({
        userId,
        venueId,
        eventName,
        eventDate,
        startTime,
        description,
        isCanteen,
        expCount,
        mealType
      });

      return booking;
  }

  