const data = {

  users: [{
    id: 1,
    firstName: 'admin',
    lastName: 'bar',
    email: 'Theo@gmail.com',
    password: '$2b$12$B43Wj4GSHSCvjrJFIjC85.L01ii5fKNXoFb.5kUB2YnubLCX2VRSW',
    Gender: 'F',
	    JobRole: 'IT',
	    Department: 'c.s',
	    Adress: 'kampala',
  }, {
    id: 2,
    firstName: 'SOLANGE',
    lastName: 'UWERA',
    email: 'usolange13@gmail.com',
    password: '$2b$12$EdPpQc0/YgtcUqj80vMwxewO247Yk3TUH9LAAWmBlHUwc6jBQHHfe',
    Gender: 'F',
	    JobRole: 'IT',
	    Department: 'c.s',
      Adress: 'kibungo',
      

  }, {
    id: 3,
    firstName: 'UKUNDA',
    lastName: 'Adam',
    email: 'ukunda@gmail.com',
    password: '$2b$12$8RLcKqA2opCIWFYtE0VseOftjyP1OHvSKPIrHfkw2i59RXkEC6dHu',
    Gender: 'F',
    JobRole: 'IT',
    Department: 'c.s',
    Adress: 'logos',
  }],

  articles: [{
    articleId: 1,
    createdon: '2019-09-19T14:14:57.985Z',
    title: 'Happiness',
    article: 'more years to live',
    authorId: 1,
    
  },
  {
    articleId: 2,
    createdon: '2019-09-19T14:11:57.985Z',
    title: 'christian',
    article: 'who believe in jesus',
    authorId: 2,

  },
  {
    articleId: 3,
    createdon: '2019-09-19T14:14:57.985Z',
    title: 'businessmodel',
    article: 'we need business',
    authorId: 2,
  }],
  comments: [{
    commentId: 1,
    createdon: '01/01/2000',
    articletitle: 'bos',
    article: 'volley ball players are always cool',
    comment: 'yes of course',
    authorId: 2,
  },

  {
    commentId: 1,
    createdon: '01/01/2000',
    articletitle: 'life condition',
    article: 'Never lie',
    comment: 'yeah alright!',
    authorId: 2,
  },{
    commentId: 1,
    createdon: '01/01/2000',
    articletitle: 'independent',
    article: 'independent is the most important thing we need',
    comment: 'Agreee with you',
    authorId: 2,
  }],
};
export default data;
