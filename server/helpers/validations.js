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
	}),
	signin: joi.object().keys({
		email: joi.string().email().trim().required(),
		password: joi.string().required()
	}),
	createanarticle: joi.object().keys({
		title: joi.string().trim().required(),
		article: joi.string().required()
	}),
	editanarticle: joi.object().keys({
		title: joi.string().trim().required(),
		article: joi.string().required()
	}),
	deleteanarticle: joi.object().keys({
		title: joi.string().trim().required(),
		article: joi.string().required()
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
	static signin(req, res, next) {
        const {email, password} = req.body;
        const {error} = joi.validate({email, password}, schema.signin);
		if (error) {
			return res.status(400).send({ status: 400,  error: error.details[0].message });
		}
        next();
	};
	static createanarticle(req,res,next){  
		const {title, article} = req.body;
		const {error} = joi.validate({title,article}, schema.createanarticle);
		if (error) {
			return res.status(400).send({ status: 400,  error: error.details[0].message });
		}
		next();
		}
		static editanarticle(req,res,next){  
			const {title, article} = req.body;
			const {error} = joi.validate({title,article},schema.editanarticle);
			if (error) {
				return res.status(400).send({ status: 400,  error: error.details[0].message });
			}
			next();
			}	
	
			static deleteanarticle(req,res,next){  
				const {title, article} = req.body;
				const {error} = joi.validate({title,article},schema.deleteanarticle);
				if (error) {
					return res.status(400).send({ status: 400,  error: error.details[0].message });
				}
				next();
				}
}
export default validate;