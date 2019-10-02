import  jwt from 'jsonwebtoken';
import Helpers from '../helpers/helpers';
import data from '../models/data';


class Users1 {
signin(req, res) {
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
    
}
};
export default new Users1();