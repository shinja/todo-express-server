import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res) => {
  const params = req.params;
  res.send(`get todo ${params.id}`);
});
module.exports = router;
