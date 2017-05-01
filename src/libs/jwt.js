import jwt from 'jsonwebtoken';

const secret = 'jdsfklsdjfdslkfjdslkf';

const middleware = (req, res, next) => {
  const token = req.get('Authorization') || req.cookies.jwt;

  jwt.verify(token, secret, (err, payload) => {
    if (err) {
      res.status(401);
      res.send({ message: err.message });
      return;
    }

    /** Put user in req for next usage. */
    req.user = {
      id: payload.id,
    };
    next(); // call next middleware.
  });
};

module.exports = {
  secret,
  middleware,
};
