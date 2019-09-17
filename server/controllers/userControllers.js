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


}

export default new Users();