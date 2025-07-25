const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const bearer = req.headers['authorization'];
  if (!bearer) {
    return res.status(401).json({ message: 'authorization required' });
  }

  const token = bearer.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'token format incorrect' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'access denied' });
  }
};
