import  jwt from 'jsonwebtoken';
import Helpers from '../helpers/helpers';
import data from '../models/data';


class Users1 {
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
        return res.status(401).send({status: 401, error: 'incorrect email or password'});
    }
    //const newData = {...matching};
    // delete newData.password;
    const {email:useremail,id}=found
    const  Xtoken = jwt.sign({
useremail,id

    },process.env.jwt) ; 

    return res.status(200).send({status: 200, message: `user is sucessfully Loged in `,Xtoken});
}
};
export default new Users1();