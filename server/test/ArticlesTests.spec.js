import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';
import jwt from 'jsonwebtoken';

chai.use(chaiHttp);
chai.should();
//create

describe(' NEW article', () => {
  it('new article is succesfully created(201) ', (done) => {
  const user = {
    id:2,
    firstName: 'SOLANGE',
    lastName:'UWERA',
    email: 'usolange13@gmail.com',
    password: '01234five'
  };
  const newArticle = {
    title: 'The Benefits of Online Collaboration Tools',
    article: 'Teamwork is one of the most important aspects of the modern workplace.',
  };
  const Token = jwt.sign(user, process.env.JWT);
  chai
    .request(app)
    .post('/api/v1/articles')
    .set('Xtoken', Token)
    .send(newArticle)
    .end((err, res) => {
      expect(res.status).to.equal(201);
      done();
    });
  })
    it('user should not create article successfully if already exists', (done)=>{
      const user = {
        id:2,
        firstName: 'SOLANGE',
        lastName:'UWERA',
        email: 'usolange13@gmail.com',
        password: '01234five' 
      }
      const newArticle = {
        title:'pppp',
        article:'ttttdddddddddd'
      };
      const Token = jwt.sign(user, process.env.JWT);
      chai
          .request(app)
          .post('/api/v1/articles')
          .set('Xtoken', Token)
          .send(newArticle)
          .end((err, res) => {
              if (err) console.log(err);
              expect(res.status).to.equal(409);
              done();
          });
});
});

describe('Get all Articles (get)', () => {
    it('It should return 200 when all registered articles Displays  ', (done) => {
      const Signed = {
        id:2,
        firstName: 'SOLANGE',
        lastName:'UWERA',
        email: 'usolange13@gmail.com',
        password: '01234five'
      };
      const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
      chai
        .request(app)
        .get('/api/v1/feeds')
        .set('Xtoken', Token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
//specific
  describe('Get specific Article (get)', () => {
    it('It should return the specific article  ', (done) => {
      const Signed = {
        id:2,
        firstName: 'SOLANGE',
        lastName:'UWERA',
        email: 'usolange13@gmail.com',
        password: '01234five'
      };
      const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
      chai
        .request(app)
        .get('/api/v1/articles/1')
        .set('Xtoken', Token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
  
//edit
  describe('Edit articles (patch)', () => {
    it('It should return 404 the article is not found  ', (done) => {
      const Signed = {
        id:2,
        firstName: 'SOLANGE',
        lastName:'UWERA',
        email: 'usolange13@gmail.com',
        password: '01234five'
      };
      const newarticle = {
        title: 'FootBall ',
        article: 'FootBall is some thing good for the ones that play it and to the one who like it',
      };
      const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
      chai
        .request(app)
        .patch('/api/v1/articles/1')
        .set('Xtoken', Token)
        .send(newarticle)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });



    it('It should return 200 the article is SUCCESSFUL edited  ', (done) => {
      const Signed = {
        id:2,
        firstName: 'SOLANGE',
        lastName:'UWERA',
        email: 'usolange13@gmail.com',
        password: '01234five'
      };
      const newarticle = {
        title:'pppp',
        article:'ttttdddddddddd',
      };
      const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
      chai
        .request(app)
        .patch('/api/v1/articles/1')
        .set('Xtoken', Token)
        .send(newarticle)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });

    //delete
    describe('Delete Article (patch)', () => {
      it('It should return 200 when the article is deleted  ', (done) => {
        const Signed = {
          id:2,
          firstName: 'SOLANGE',
          lastName:'UWERA',
          email: 'usolange13@gmail.com',
          password: '01234five'
        };
        const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
        chai
          .request(app)
          .delete('/api/v1/articles/2')
          .set('Xtoken', Token)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
  });

  it('It should return 404 the article is not found   ', (done) => {
    const Signed = {
      id:2,
      firstName: 'SOLANGE',
      lastName:'UWERA',
      email: 'usolange13@gmail.com',
      password: '01234five'
    };
    const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
    chai
      .request(app)
      .delete('/api/v1/articles/200')
      .set('Xtoken', Token)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

 it('It should return 403 not authorized to delete this article   ', (done) => {
    const Signed = {
        id:1,
        firstName: 'admin',
        lastName: 'bar',
        email: 'admin@gmail.com',
        password: '123456six'
    };
    const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
    chai
      .request(app)
      .delete('/api/v1/articles/3')
      .set('Xtoken', Token)
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });


//comment
it('It should return 201 when the comment is added to an article  ', (done) => {
  const Signed = {
  id:2,
      firstName: 'SOLANGE',
      lastName:'UWERA',
      email: 'usolange13@gmail.com',
      password: '01234five'
  };
  const commentArticle = {
    comment: 'waaoh!!!',
  };
  const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
  chai
    .request(app)
    .post('/api/v1/articles/1/comments')
    .set('Xtoken', Token)
    .send(commentArticle)
    .end((err, res) => {
      expect(res.status).to.equal(201);
      done();
    });
});

it('It should return 404 when a user try to added a comment to a non existing article ', (done) => {
  const Signed = {
    id:2,
      firstName: 'SOLANGE',
      lastName:'UWERA',
      email: 'usolange13@gmail.com',
      password: '01234five'
  };
  const commentArticle = {
    comment: 'puuuuuu !!!',
  };
  const Token = jwt.sign(Signed, process.env.JWT, { expiresIn: '24h' });
  chai
    .request(app)
    .post('/api/v1/articles/109/comments')
    .set('Xtoken', Token)
    .send(commentArticle)
    .end((err, res) => {
      expect(res.status).to.equal(404);
      done();
    });
});


});