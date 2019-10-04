import data from "../models/data";

export const createanarticle = (req, res) => {
  const { title, article } = req.body;
  const authorId = req.body.payload.id;
  const alreadyExist = data.articles.find(article => article.title === title);
  if (alreadyExist) {
    return res
      .status(409)
      .send({ status: 409, error: "article already exist" });
  }

  const articleId = data.articles.length + 1;
  const newarticle = {
    articleId,
    createdon: new Date(),
    title,
    article,
    authorId
  };
  data.articles.push(newarticle);

  return res.status(201).send({
    status: 201,
    message: "article is successful created",
    data: { ...newarticle }
  });
};

export const editanarticle = (req, res) => {
  const { id } = req.params;
  const found = data.articles.find(Art => Art.articleId === parseInt(id));

  if (!found) {
    return res.status(404).send({ status: 404, error: "article is not exist" });
  }
  const ownerId = req.body.payload.id;
  const owns = data.articles.find(
    art => art.authorId == ownerId && art.articleId == id
  );
  if (!owns) {
    return res
      .status(403)
      .send({ status: 403, message: "not authorized to edit this article" });
  }

  const Data = Object.keys(req.body);

  found.title = req.body.title;
  found.article = req.body.article;

  res.status(200).json({
    status: 200,
    message: "successfully Edited",
    info: {
      id: found.articleId,
      createdon: found.createdon,
      title: found.title,
      article: found.article,
      authorId: found.authorId
    }
  });
};

export const deleteanarticle = (req, res) => {
  const { id } = req.params;
  const article = data.articles.find(art => art.articleId == id);
  // console.log(article);
  if (!article) {
    return res.status(404).send({ status: 404, message: "article not found" });
  }
  // checking the owner
  const ownerId = req.body.payload.id;
  const owns = data.articles.find(
    art => art.authorId == ownerId && art.articleId == id
  );
  if (!owns) {
    return res
      .status(403)
      .send({ status: 403, message: "not authorized to delete this article" });
  }
  // incase everything is ok
  const index = data.articles.indexOf(article);
  data.articles.splice(index, 1);
  return res
    .status(200)
    .send({ status: 200, message: "article deleted successfully" });
};

export const viewallarticle = (req, res) =>
  res.status(200).send({
    status: 200,
    message: "Success",
    data: data.articles
  });

export const viewspecificarticle = (req, res) => {
  const { id } = req.params;

  const alreadyExist = data.articles.find(article => article.articleId == id);
  if (!alreadyExist) {
    return res.status(404).send({ status: 404, error: "article not found" });
  }
  return res.status(200).send({
    status: 200,
    message: "Success",
    data: alreadyExist
  });
};

export const commentonarticle = (req, res) => {
  const { comment } = req.body;
  const articleId = req.params.id;
  const authorId = req.body.payload.id;
  const commentId = data.comments.length + 1;
  const articleExist = data.articles.find(art => art.articleId == articleId);
  if (!articleExist) {
    return res.status(404).send({ status: 404, message: "article not found" });
  }
  const newcomment = {
    commentId,
    createdOn: new Date(),
    comment,
    authorId
  };
  data.comments.push(newcomment);

  return res.status(201).send({
    status: 201,
    message: "comment created successfully",
    data: { ...newcomment }
  });
};
