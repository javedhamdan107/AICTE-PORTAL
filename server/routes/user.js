import express from 'express';

import { signupHandler, signinHandler, createvenueHandler, createCanteenHandler } from '../handlers/user.js';

const router = express.Router();

// router.get('/isAuthenticated', isAuthenticated);
router.post('/signup', signupHandler);
router.post('/signin', signinHandler);
router.post('/venue/create', createvenueHandler);
router.post('/canteen/create', createCanteenHandler);

export default router;