import { Router } from 'express';
import { routWrap } from '../../utils/utils';
import RecipeControl from './control';

const router = Router();

router.post('/recipe',  routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.create(req.body));
}));

router.get('/recipe/:_id', routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.getById(req.params._id));
}));

router.get('/recipe/:page/:limit', routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.getAll(req.params.page, req.params.limit));
}));

router.get('/recipe/category/:_id/:page/:limit', routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.getByCategory(req.params._id, req.params.page, req.params.limit));
}));

router.delete('/recipe/:_id', routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.delete(req.params._id));
}));

router.put('/recipe/:_id/change-category/:categoryId', routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.updateCategory(req.params._id, req.params.categoryId));
}));

router.put('/recipe/:_id', routWrap(async (req, res) => {
  res.status(200).send(await RecipeControl.update(req.params, req.body));
}));

export default {
  router,
  version: 'v1',
};
