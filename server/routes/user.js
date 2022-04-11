import express from 'express';

import { signupHandler, signinHandler } from '../handlers/user.js';

const router = express.Router();

// router.get('/isAuthenticated', isAuthenticated);
router.post('/signup', signupHandler);
router.post('/signin', signinHandler);

export default router;