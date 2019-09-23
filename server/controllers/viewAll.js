import  jwt from 'jsonwebtoken';
import moment from 'moment';
import data from '../models/data';
import Helpers from '../helpers/helpers';

class Users6 {
    viewallarticle(req, res) {
     
    return res.status(200).send({
        status:200,
        message: 'Success',
        data:data.articles})

}};
export default new Users6();