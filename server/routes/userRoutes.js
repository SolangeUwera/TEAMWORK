import express from 'express';
import Users from '../controllers/userControllers';
import validate from '../helpers/validations';
const router = express.Router();

router.post('/signup', validate.signup, Users.signup);
router.post('/signin', validate.signin, Users.signin);
router.post('/createanarticle', validate.createanarticle, Users.createanarticle);
router.patch('/editanarticle', validate.editanarticle, Users.editanarticle);
router.delete('/deleteanarticle', validate.deleteanarticle, Users.deleteanarticle);
export default router;