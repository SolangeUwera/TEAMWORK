import data from '../models/data';


class Users4 {

deleteanarticle(req,res){
    const { id } = req.params;
   const article = data.articles.find(art => art.articleId == id);
  // console.log(article);
   if (!article) {
    return res.status(404).send({status:404,message: 'article not found'})
   }
   // checking the owner
   const ownerId = req.body.payload.id;
   const owns = data.articles.find( art => (art.authorId == ownerId && art.articleId == id));
   if(!owns) {
       return res.status(403).send({status: 403, message: 'not authorized to delete this article'})
   }
   // incase everything is ok
   const index = data.articles.indexOf(article);
   data.articles.splice(index,1);
   return res.status(200).send({status:200,message: 'article deleted successfully'})
}
};
export default new Users4();
