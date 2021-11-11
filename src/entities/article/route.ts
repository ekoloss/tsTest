import { Router } from 'express';
import { routWrap } from '../../utils/utils';
import ArticleControl from './control';

const router = Router();

router.post('/article',  routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.create(req.body));
}));

router.get('/article/:_id', routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.getById(req.params._id));
}));

router.get('/article/:page/:limit', routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.getAll(req.params.page, req.params.limit));
}));

router.get('/article/category/:_id/:page/:limit', routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.getByCategory(req.params._id, req.params.page, req.params.limit));
}));

router.delete('/article/:_id', routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.delete(req.params._id));
}));

router.put('/article/:_id/change-category/:categoryId', routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.updateCategory(req.params._id, req.params.categoryId));
}));

router.put('/article/:_id', routWrap(async (req, res) => {
  res.status(200).send(await ArticleControl.update(req.params, req.body));
}));

export default {
  router,
  version: 'v1',
};
