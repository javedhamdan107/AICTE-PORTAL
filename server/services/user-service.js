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