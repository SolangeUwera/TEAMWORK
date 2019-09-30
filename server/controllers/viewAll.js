import data from '../models/data';

class Users6 {
    viewallarticle(req, res) {

            return res.status(200).send({
                status:200,
                message: 'Success',
                data:data.articles})


}
};
export default new Users6();