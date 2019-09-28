import express from 'express';
import Users5 from '../controllers/ViewSpecific';
import Users3 from '../controllers/Comment';
import Users from '../controllers/signup';
import Users1 from '../controllers/signin';
import Users2 from '../controllers/createArticle';
import Users7 from '../controllers/edit';
import Users4 from '../controllers/deleteArticle';
import Users6 from '../controllers/viewAll';
import validate from '../helpers/validations';
import auth from'../helpers/middlewares';
const router = express.Router();

router.post('/auth/signup', validate.signup, Users.signup);
router.post('/auth/signin', validate.signin, Users1.signin);
router.post('/articles',auth, validate.createanarticle, Users2.createanarticle);
router.patch('/articles/:id',auth, Users7.editanarticle);
router.delete('/articles/:id',auth, Users4.deleteanarticle);
router.post('/articles/:id/comments', auth, validate.commentonanarticle,Users3.commentonanarticle );


router.get('/feeds',auth,Users6.viewallarticle);
router.get('/articles/:id',auth,Users5.viewspecificarticle);

export default router;