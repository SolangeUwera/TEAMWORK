import moment from 'moment';
import data from '../models/data';
import Helpers from '../helpers/helpers';

class Users {
    signup(req, res) {
        const {firstName, lastName, email, password,Gender,JobRole,Department,Adress} = req.body;
        const alreadyExist = data.users.find(user=>user.email === email);
        if(alreadyExist) {
            return res.status(409).send({status: 409, error: 'user already exists'});
        }
        const userId = data.users.length + 1;
        const hashedPassword = Helpers.hashThePassword(password)
        const newUser = {firstName, lastName, email,Gender,JobRole,Department,Adress, password: hashedPassword, id: userId}
        data.users.push(newUser);
        //delete newUser.password;
        return res.status(201).send({status: 201,message: 'user created successful', data: { firstName, lastName, email,Gender,JobRole,Department,Adress, id: userId}})

    };
    signin(req, res) {
        const {email, password} = req.body;
        const found = data.users.find(user=> user.email === email);
        if(!found) {
            return res.status(404).send({status: 404, error: 'email not found'})
        }
        const hashedPassword = found.password;
        // CHECKING IF PASSWORD MATCHED
        const matching = Helpers.checkThepassword(hashedPassword, password);
        if(!matching) {
            return res.status(401).send({status: 401, error: 'incorrect password'});
        }
        const newData = {...matching};
        delete newData.password;
        return res.status(200).send({status: 200, message: 'user is sucessfully Loged in'});
    };
    createanarticle(req,res){
        const {title,article}=req.body;
        const alreadyExist = data.articles.find(article =>article.title === title);
    if(alreadyExist) {
        return res.status(409).send({status: 409, error: 'article already exist'});
    }
    const articleId = data.articles.length + 1;
    const newarticle = {title,article ,id: articleId}
    data.articles.push(newarticle);
    
    return res.status(200).send({status:200,message: 'article is successful created',data:{title,article}})
    };
    
    editanarticle(req,res){
        const {title,article}=req.body;
        const found = data.articles.find(article =>article.title === title);
    if(!found) {
        return res.status(404).send({status: 409, error: 'article is not exist'});
    }
    const editedarticle = {title,article ,id: articleId}
    data.articles.push(editedarticle);
    
    return res.status(200).send({status:200,message: 'article is successful edited',data:{title,article}})
    };
    deleteanarticle(req,res){
        const {title,article}=req.body;
        const found = data.articles.find(article =>article.title === title);
    if(!found) {
        return res.status(404).send({status: 409, error: 'article is not exist'});
    }
    const articleId = data.articles.length - 1;
    const deletedarticle = {title,article ,id: articleId}
    data.articles.push(deletedarticle);
    
    return res.status(200).send({status:200,message: 'article is successful deleted',data:{title,article}})
    };
    
    commentonanarticle(req,res){
    const {articletitle,article,comment,createdOn}=req.body;
    
    const commentId = data.comments.length + 1;
    const newcomment ={
        id: commentId,
        createdOn: moment().format(),
        articletitle,
        article,
        comment,
        
    };
    data.comments.push(newcomment);
    
    return res.status(201).send({status:201,message: 'relavent success message',data:{createdOn,articletitle,article,comment}})
    };   


}

export default new Users();