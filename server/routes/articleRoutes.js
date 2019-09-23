import express from 'express';
import Users from '../controllers/userControllers';
import validate from '../helpers/validations';
import auth from'../helpers/middlewares';
const router = express.Router();

router.delete('/article/:articleId', auth, Users.deleteanarticle)