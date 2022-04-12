import express from 'express';

import { createMemberHandler, createBookingHandler, viewBookingHandler, viewVenuesHandler, findMembersHandler, isAuthenticated } from '../handlers/auth-user.js';

const router = express.Router();

router.post('/member/create', createMemberHandler);
router.post('/book', createBookingHandler);
router.get('/viewBooking', viewBookingHandler);
router.get('/viewVenues', viewVenuesHandler);
router.post('/findMembers', findMembersHandler);
router.get('/isAuthenticated', isAuthenticated);

export default router;