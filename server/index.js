import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';

import useRoutes from './routes/index.js';
import passport from './config/passport.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({ credentials: true, origin: `${process.env.ORIGIN}` }));

app.use(
  session({
    secret: `${process.env.SECRET}`,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

useRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello to AICTE Portal API');
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))) // eslint-disable-line no-console
  .catch((error) => console.log(error.message)); // eslint-disable-line no-console

mongoose.set('useFindAndModify', false);