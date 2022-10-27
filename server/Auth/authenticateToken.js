const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = async (req, res, next) => {
  // get token from header
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  let token = null;
  // check if header starts with auth header
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
  }
  //   check if token exists
  if (!token)
    return res.status(401).json({
      success: false,
      payload: 'You are not authorized to access this resource',
    });

  // verify token
  jwt.verify(token, process.env.JWT_SECRETE, (error, result) => {
    if (error)
      return res.status(403).json({ success: false, payload: 'Invalid Token' });
    req.user = result;
    next();
  });

  // add a code to check if there is an auth header
};

module.exports = authenticateToken;
