import  jwt from 'jsonwebtoken';
import moment from 'moment';
import data from '../models/data';
import Helpers from '../helpers/helpers';

class Users2 {
    createanarticle(req,res){
  
        const {title,article}=req.body;
        const authorId = req.body.payload.id
        const alreadyExist = data.articles.find(article =>article.title === title);
    if(alreadyExist) {
        return res.status(409).send({status: 409, error: 'article already exist'});
    }
    const articleId = data.articles.length + 1;
    const newarticle = {articleId, authorId, createdon:new Date(), title,article}
    data.articles.push(newarticle);
    
    return res.status(200).send({status:200,message: 'article is successful created',data:{...newarticle}})
    
}};
export default new Users2();
