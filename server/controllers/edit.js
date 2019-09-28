import  jwt from 'jsonwebtoken';
import data from '../models/data';
import Helpers from '../helpers/helpers';

class Users7 {
    editanarticle(req,res){
     const { id } = req.params;
     const found =data.articles.find((editArticle) => editArticle.articleId == id); 
     if(!found)  {
     return res.status(404).send({status: 404, error: 'article is not exist'});
 }
 else {
    const Data = Object.keys(req.body);
    Data.forEach((data) => {
        found[data] = req.body[data];
    });
    res.status(200).json({
      status: 200,
      message: 'successfully Edited',
    });
 }};
};
 export default new Users7();