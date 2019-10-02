import  jwt from 'jsonwebtoken';
import data from '../models/data';
import Helpers from '../helpers/helpers';

export const signup = (req, res) => {
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
             
        },process.env.JWT) ; 

        return res.status(201).send({status: 201,message: 'user created successful',
         data: {id: userId,firstName, lastName, email,Gender,JobRole,Department,Adress,Xtoken, }})

    };
    export const signin = (req, res) => {
        const {email, password} = req.body;
        const Data = data.users.find(user=> user.email === email);
        if(!Data) {
            return res.status(404).send({status: 404, error: 'email not found'})
        }
        const hashedPassword = Data.password;
        // CHECKING IF PASSWORD MATCHED
        const matching = Helpers.checkThepassword(hashedPassword, password);
        if(!matching) {
            return res.status(401).send({status: 401, error: 'incorrect email or password'});
        }
        const {email:useremail,id} = Data;
        const  Xtoken = jwt.sign({useremail,id},process.env.JWT) ; 
    
        return res.status(200).send({status: 200, message: `user is sucessfully Loged in `,
        info : {id : Data.id,firstName: Data.firstName,lastName:Data.lastName,email: Data.email,Gender: Data.Gender,
            Jobrole: Data.Jobrole,Department: Data.Department,Address:Data.Adress},Xtoken});
        
    };