import express from 'express';
import { userSignup } from '../Controller/controller.js';

const router = express.Router();

router.post('/sign-up', userSignup);

export default router;