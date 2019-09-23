
import data from '../models/data';


class Users3 {


commentonanarticle (req,res)
{
const {comment}=req.body;
const articleId = req.params.id;
const authorId = req.body.payload.id;

const commentId = data.comments.length + 1;
const articleExist = data.articles.find(art=> art.articleId == articleId);
if(!articleExist) {
    return res.status(404).send({status: 404, message: 'article not found'});
}
const newcomment ={
    commentId: commentId,
    createdOn: new Date(),
    //articletitle,
    //article,
    comment,
    authorId
    
};
data.comments.push(newcomment);

return res.status(201).send({status:201,message: 'comment created successfully',data:{...newcomment}})
}
};   
export default new Users3();
