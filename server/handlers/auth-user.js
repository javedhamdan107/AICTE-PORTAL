import member from '../models/member.js';
import Member from '../models/member.js';

import { createMember } from '../services/auth-user-service.js';

export const createMemberHandler = async (req, res, next) => {
    try {
      const { mobileNum, email, name } = req.body;
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