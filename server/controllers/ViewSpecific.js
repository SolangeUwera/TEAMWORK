import  jwt from 'jsonwebtoken';
import data from '../models/data';


class Users5 {

    viewspecificarticle(req, res) {
        const {id} = req.params;
 
 const alreadyExist = data.articles.find(article =>article.articleId == id);
       // console.log(alreadyExist);

        return res.status(200).send({
            status:200,
            message: 'Success',
            data:alreadyExist})
        }
    };

  

export default new Users5();