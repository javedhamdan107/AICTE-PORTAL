import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import Venue from '../models/venue.js';

export const createUser = async (userDetails) => {
    const { email, password, name, userType, description } = userDetails;
    const hashedPassword = await bcrypt.hash(password, 12);


    const { _doc: user } = await User.create({
      name,
      email,
      userType,
      description,
      password: hashedPassword,
    });

    return user;
  };

  export const mergeUserDetails = (userOfType, user) => {
    // create an full user object with non-confidential details
    const { firstName, lastName, userType, image, description } = user;
    const safeDetails = { ...userOfType, firstName, lastName, userType, image, description };

    return safeDetails;
  };

  export const mergeAsLoggedUser = (userOfType, user) => {
    const mergedUser = mergeUserDetails(userOfType, user);

    mergedUser.userTypeId = mergedUser._id;
    mergedUser._id = mergedUser.userId;

    delete mergedUser.userId;

    return mergedUser;
  };


  export const getFullUserById = async (user) => {
    let details;
    if (user.userType === 'seeker') {
      details = await findSeekerByUserId(user._id);
    } else if (user.userType === 'provider') {
      details = await findProviderByUserId(user._id);
    }

    if (details == null) {
      details = { userId: user._id, userType: user.userType };
    }

    const userDetails = mergeAsLoggedUser(details, user);

    return userDetails;
  };

  export const createVenue = async (venueDetails) => {
    const { name, location } = venueDetails;


    const { _doc: venue } = await Venue.create({
      name,
      location,
    });

    return venue;
  };