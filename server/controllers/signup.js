import  jwt from 'jsonwebtoken';
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
        const newUser = {id: userId,password: hashedPassword, firstName, lastName, email,Gender,JobRole,Department,Adress}
        data.users.push(newUser);
        //delete newUser.password
        const  Xtoken = jwt.sign({
            firstName,
             lastName, 
             Gender,
             Adress,  
             id: userId

        },process.env.jwt) ; 

        return res.status(201).send({status: 201,message: 'user created successful',
         datas: {id: userId,firstName, lastName, email,Gender,JobRole,Department,Adress,Xtoken, }})

    }
    };
    export default new Users();