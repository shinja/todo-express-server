import express from 'express';
import jwt from 'jsonwebtoken';

import { secret } from '../libs/jwt';

const router = express.Router();

router.get('/token', (req, res, next) => {
  jwt.sign({
    userId: 1,
  }, secret, {
    expiresIn: '60s',
  }, (err, token) => {
    if (err) return next(err);
    res.cookie('jwt', token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    return res.send({ token });
  });
});

module.exports = router;
