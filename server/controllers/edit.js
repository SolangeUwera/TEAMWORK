import  jwt from 'jsonwebtoken';
import data from '../models/data';
import Helpers from '../helpers/helpers';

class Users7 {
    editanarticle(req,res){
    const{id:userId} =req.query
     const {title,article:newarticle}=req.body;
     const found = data.articles.findIndex((article =>article.title === title) && (article =>article.authorId === userId));
     console.log(found);
     if(found == -1)  {
     return res.status(404).send({status: 409, error: 'article is not exist'});
 }
 // const editedarticle = {title,article}
 data.articles[found].article=newarticle;
 return res.status(200).send({status:200,message: 'article is successful edited',data:{title,newarticle}})

 
 
 }};
 export default new Users7();