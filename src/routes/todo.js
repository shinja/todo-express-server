import express from 'express';
import { middleware } from '../libs/jwt';

const router = express.Router();

/** Make all the todo API are protected by jwt */
router.use(middleware);

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res) => {
  const params = req.params;
  res.send(`get todo ${params.id}`);
});

module.exports = router;
