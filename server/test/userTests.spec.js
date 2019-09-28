import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';
//import jwt from 'jsonwebtoken';

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
          };
      
          chai
            .request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
              expect(res.status).to.equal(201);
              done();
            });
        });
    it('user should not signup successfully if already signed up', (done)=>{
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
                res.should.have.status(409);
                done();
            });
    }) 
  
	it("Should not be able to signin when email is invalid", (done) => {
		chai.request(app).post("/api/v1/auth/signin").send({
			email: "sooppo@gmail.com",
			password: "01234five"
		})
			.end((err, res) => {
				res.should.has.status(404);
				done();
			});

	});

	it("Should not be able to signin when password is invalid", (done) => {
		chai.request(app).post("/api/v1/auth/signin").send({
			email: "usolange13@gmail.com",
			password: "345900"
		})
			.end((err, res) => {
				res.should.has.status(401);
				done();
			});

    });
it("Should return login 200", (done) => {
      chai.request(app).post("/api/v1/auth/signin").send({
            email: 'usolange130@gmail.com',
           password: '01234five'
      })
            .end((err, res) => {
                  res.should.has.status(200);
                  done();
            });

});

});








   