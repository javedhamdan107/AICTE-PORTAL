import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const createUser = async (userDetails) => {
    const { email, password, name, userType } = userDetails;
    const hashedPassword = await bcrypt.hash(password, 12);


    const { _doc: user } = await User.create({
      name,
      email,
      userType,
      password: hashedPassword,
    });
  
    return user;
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