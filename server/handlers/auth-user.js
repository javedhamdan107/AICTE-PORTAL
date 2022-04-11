import Booking from '../models/booking.js';
import member from '../models/member.js';
import Member from '../models/member.js';
import venue from '../models/venue.js';
import User from '../models/user.js';

import { createMember, createBooking } from '../services/auth-user-service.js';

export const createMemberHandler = async (req, res, next) => {
    try {
      const { mobileNum, email, name, typeId } = req.body;
      const existingUserEmail = await Member.findOne({ email });
      const existingUserMob = await Member.findOne({ mobileNum });
  
      if (existingUserEmail) {
        return res.status(409).json({ message: 'User email already exists!' });
      }
      if (existingUserMob) {
        return res.status(409).json({ message: 'User mobile number already exists!' });
      }
  
      const member = await createMember(req.body);

      return res.json(member);
    } catch (error) {
      return next(error);
    }
  };

  export const createBookingHandler = async (req, res, next) => {
    try {
        const { userId, venueId, eventName, eventDate, startTime, description, isCanteen, isBreakfast, isLunch, isDinner, expCount } = req.body;

        const booking = await createBooking(req.body);

        return res.json(booking);
    } catch (error) {
        return next(error);
    }
  }

  export const viewBookingHandler = async (req, res, next) => {
      try {
        const bookingDetails = await Booking.find();

        return res.json(bookingDetails);
      } catch (error) {
        return next(error);
      }
  }

  export const viewVenuesHandler = async (req, res, next) => {
    try {
      const venueDetails = await venue.find();

      return res.json(venueDetails);
    } catch (error) {
      return next(error);
    }
}

export const findMembersHandler = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const members = await Member.find({ typeId : userId });
    return res.json(members);
  } catch (error) {
    return next(error);
  }
  
}

export const isAuthenticated = async (req, res, next) => {
  try {
    const user = {
      _id: req.user._id,
      userType: req.user.userType,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      image: req.user.image,
    };
    const userDetails = await User.findById(user._id);
    return res.json(userDetails);
  } catch (error) {
    return next(error);
  }
};