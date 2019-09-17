import joi from 'joi';

const schema = {
	signup: joi.object().keys({
		firstName: joi.string().min(2).trim().required(),
		lastName: joi.string().min(2).trim().required(),
		email: joi.string().email().trim().required(),
		Gender: joi.string().min(1).trim().required(),
		JobRole: joi.string().min(2).trim().required(),
		Department: joi.string().min(2).trim().required(),
		Adress: joi.string().min(2).trim().required(),
		password: joi.string().required()
    })
  

};

class validate {
    static signup(req, res, next) {
        const {firstName, lastName, email,Gender,JobRole,Department,Adress, password} = req.body;
        const {error} = joi.validate({firstName, lastName, email,Gender,JobRole,Department,Adress, password}, schema.signup);
		if (error) {
			return res.status(400).send({ status: 400,  error: error.details[0].message });
		}
        next();
    };
    
}
export default validate;