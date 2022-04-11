import passport from 'passport';

import User from '../models/user.js';
import { createUser } from '../services/user-service.js';

export const signupHandler = async (req, res, next) => {
    try {
      const { userType, email, name } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists!' });
      }
  
      await createUser(req.body);
  
      return passport.authenticate('local', (err, user) => {
        if (err) {
          return next(err);
        }
  
        return req.logIn(user, (error) => {
          if (error) {
            return next(error);
          }
          return res.status(200).json({ id: user._id, userType, name });
        });
      })(req, res, next);
    } catch (error) {
      return next(error);
    }
  };