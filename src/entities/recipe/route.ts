import { Router } from 'express';

const router = Router();

router.post('/reciept', (req, res) => {
  res.send({ ddd: 'ddd' });
});

export default {
  router,
  version: 'v1',
};
