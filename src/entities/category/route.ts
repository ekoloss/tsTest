import { Router } from 'express';
import { routWrap } from '../../utils/utils';
import CategoryControl from './control';

const router = Router();

router.post('/category', routWrap(async (req, res) => {
  res.status(200).send(await CategoryControl.create(req.body));
}));

router.get('/category/:_id', routWrap(async (req, res) => {
    res.status(200).send(await CategoryControl.getById(req.params._id));
}));

router.get('/category', routWrap(async (req, res) => {
  res.status(200).send(await CategoryControl.getAllCategories());
}));

router.delete('/category/:_id', routWrap(async (req, res) => {
  res.status(200).send(await CategoryControl.delete(req.params._id));
}));

router.put('/category/:_id', routWrap(async (req, res) => {
  res.status(200).send(await CategoryControl.update(req.params, req.body));
}));

export default {
  router,
  version: 'v1',
};
