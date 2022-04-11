import express from 'express';

import { createMemberHandler } from '../handlers/auth-user.js';

const router = express.Router();

router.post('/member/create', createMemberHandler);

export default router;