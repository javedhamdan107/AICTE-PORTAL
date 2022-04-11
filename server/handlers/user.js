import passport from 'passport';

import User from '../models/user.js';
import { createUser, getFullUserById } from '../services/user-service.js';

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


  export const signinHandler = async (req, res, next) => {
    await passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      return req.logIn(user, async (error) => {
        if (error) {
          return next(info);
        }
  
        const userDetails = await getFullUserById(user);
        // @TODO -  send a redirect message with a status code 307
        // @TODO - add a unique status code inside the response data
        return res.json(userDetails);
      });
    })(req, res, next);
  };