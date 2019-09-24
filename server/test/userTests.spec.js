import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';

chai.use(chaiHttp);
chai.should();

describe('user tests', ()=>{
    it('user should signup successfully', (done)=>{
        const user = {
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange130@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
        }
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                if (err) console.log(err);
                res.should.have.status(201);
                res.body.should.have.property('datas');
                done();
            });
    }) 
    it('user should not signup successfully if already signed up', (done)=>{
        const user = {
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
        }
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                if (err) console.log(err);
                res.should.have.status(409);
                done();
            });
    }) 
    it('user should signup  with no enough requirement ', (done)=>{
        const user = {
            "firstName":"Uwera", 
            "lastName":"solange", 
    
            "password":"12345six",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
        }
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                if (err) console.log(err);
                res.should.have.status(400);
                done();
            });
    }) 

    
	it("Should not be able to signup when email is invalid", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
			email: "soso$$n.doegmail",
			password: "01234five"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});

	});

	it("Should not be able to signin when email is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signin").send({
			email: "",
			password: "01234five"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});

	});

	it("Should not be able to signin when password is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signin").send({
			email: "solange@gmail.com",
			password: ""
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
		setTimeout(done, 2500);

    });
    
	it("Should not be able to signup when password length is weak", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
			email: "johndoe@gmail.com",
			password: "abcd"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
		setTimeout(done, 2500);
	});








    it("Should not be able to signup when first name is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when first name length is less or equal to 1", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"U", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when first name has whitespaces", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"    ", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when first name is invalid", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"112222!", 
            "lastName":"solange", 
            "email":"usolange1300@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when last name is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when last name is invalid", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange@", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when last name has whitespaces", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"    ", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when password is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when password length is less than 5", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"u",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when Gender is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when Gender is invalid", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"o",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when JobRole is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"",
            "Department":"c.s",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when address length is less than 2", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"M"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when address is empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":""
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when address has whitespaces", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"c.s",
            "Adress":"    "
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it("Should not be able to signup when Department is Empty", (done) => {
		chai.request(app).post("/api/v1/auth/signup").send({
            "firstName":"Uwera", 
            "lastName":"solange", 
            "email":"usolange13@gmail.com",
            "password":"01234five",
            "Gender":"F",
            "JobRole":"IT",
            "Department":"",
            "Adress":"Musha"
		})
			.end((err, res) => {
				res.should.has.status(400);
				done();
			});
	});

	it('should not be able to signup when empty fields', (done) => {
		chai.request(app).post('/api/v1/auth/signup').send({
            "firstName":"", 
            "lastName":"", 
            "email":"",
            "password":"",
            "Gender":"",
            "JobRole":"",
            "Department":"",
            "Adress":""
		}).end((err, res) => {
			res.should.has.status(400);
			done();
		})
	});




















});







   