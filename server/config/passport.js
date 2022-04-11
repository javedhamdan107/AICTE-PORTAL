import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import passport from 'passport';

// Load User model
import User from '../models/user.js';

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    (req, email, password, done) => {
      // Match user
      User.findOne({ email }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'Invalid Credentials' });
        }

        // Match password
        return bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: 'Invalid Credentials' });
        });
      });
    },
  ),
);

export default passport;
