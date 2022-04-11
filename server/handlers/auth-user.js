import Member from '../models/member.js';

import { createUser } from '../services/auth-user-service.js';

export const createMemberHandler = async (req, res, next) => {
    try {
      const { mobileNum, email, name } = req.body;
      const existingUserEmail = await User.findOne({ email });
      const existingUserMob = await User.findOne({ mobileNum });
  
      if (existingUserEmail) {
        return res.status(409).json({ message: 'User email already exists!' });
      }
      if (existingUserMob) {
        return res.status(409).json({ message: 'User mobile number already exists!' });
      }
  
      await createMember(req.body);
    } catch (error) {
      return next(error);
    }
  };