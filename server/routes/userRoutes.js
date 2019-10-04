import express from 'express';
import { signup, signin } from '../controllers/user';
import {
  editanarticle, createanarticle, deleteanarticle, viewspecificarticle,
  viewallarticle, commentonarticle,
} from '../controllers/Articles';
import validate from '../helpers/validations';
import auth from '../controllers/auth';

const router = express.Router();

router.post('/auth/signup', validate.signup, signup);
router.post('/auth/signin', validate.signin, signin);
router.post('/articles', auth, validate.createanarticle, createanarticle);
router.patch('/articles/:id', auth, editanarticle);
router.delete('/articles/:id', auth, deleteanarticle);
router.post('/articles/:id/comments', auth, validate.commentonanarticle, commentonarticle);


router.get('/feeds', auth, viewallarticle);
router.get('/articles/:id', auth, viewspecificarticle);

export default router;
