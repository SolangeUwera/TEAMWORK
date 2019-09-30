import data from '../models/data';

class Users5 {

    viewspecificarticle(req, res) {
        const {id} = req.params;
 
 const alreadyExist = data.articles.find(article =>article.articleId == id);
 if(!alreadyExist) {
    return res.status(404).send({status: 404, error: 'article not found'})
}
else
        return res.status(200).send({
            status:200,
            message: 'Success',
            data:alreadyExist})
        }
    };

  

export default new Users5();