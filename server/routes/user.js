import express from 'express';

import { signupHandler, signinHandler,createvenueHandler } from '../handlers/user.js';

const router = express.Router();

// router.get('/isAuthenticated', isAuthenticated);
router.post('/signup', signupHandler);
router.post('/signin', signinHandler);
router.post('/venue/create', createvenueHandler);

export default router;