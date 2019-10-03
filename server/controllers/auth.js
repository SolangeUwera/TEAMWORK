import  jwt from 'jsonwebtoken';


const auth = (req,res,next) => {
    const token = req.header('Xtoken');
    if (!token)
    
     {
    //   return response.response(res, 401, 'error', 'no token provided.', true);
      return res.status(404).send({error: 'no userToken provided'})
    }
    try {
      const decode = jwt.verify(token, process.env.JWT);
      req.body.payload =decode;
      next();
    } catch (ex) {
    //   return response.response(res, 401, 'error', 'invalid token.', true);
      return res.status(401).send({error: 'invalid userToken'})
      
    }
    return (token);
}

export default auth