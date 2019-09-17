import express from 'express';
import Users from '../controllers/userControllers';
import validate from '../helpers/validations';
const router = express.Router();

router.post('/signup', validate.signup, Users.signup);

export default router;