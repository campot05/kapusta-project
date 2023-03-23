import { Router } from 'express';
import { google, googleRedirect } from './auth-operations';

const router = Router();
router.get('/google', google);
router.get('/google-redirect' / googleRedirect);

module.exports = router;
