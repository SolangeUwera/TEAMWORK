import data from '../models/data';


class Users7 {
    editanarticle(req,res){
     const { id } = req.params;
     console.log(id)
     const found =data.articles.find((editArticle) => editArticle.articleId === parseInt(id));

     if(!found)  {
     return res.status(404).send({status: 404, error: 'article is not exist'});
   
 }
 
 else {
    const Data = Object.keys(req.body);
    //console.log(found);
        found.title = req.body.title;
        found.article = req.body.article;

    res.status(200).json({
      status: 200,
      message: 'successfully Edited',
    });
 }};
};
 export default new Users7();