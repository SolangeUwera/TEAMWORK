import data from '../models/data';


class Users7 {
    editanarticle(req,res){
     const { id } = req.params;
     const found =data.articles.find((Art) => Art.articleId === parseInt(id));

     if(!found)  {
     return res.status(404).send({status: 404, error: 'article is not exist'});
   
 }
 const ownerId = req.body.payload.id;
 const owns = data.articles.find( art => (art.authorId == ownerId && art.articleId == id));
 if(!owns) {
     return res.status(403).send({status: 403, message: 'not authorized to edit this article'})
 }
 
 else {
    const Data = Object.keys(req.body);
    //console.log(found);
        found.title = req.body.title;
        found.article = req.body.article;

    res.status(200).json({
      status: 200,
      message: 'successfully Edited',
      info : {id : found.articleId, createdon: found.createdon, 
        title:found.title,article:found.article,authorId:found.authorId
     }
    });
 }};
};
 export default new Users7();