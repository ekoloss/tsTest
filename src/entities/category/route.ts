import { Router } from 'express';
import ErrorsHandler from '../../component/ErrorsHandler';
import logger from '../../component/logger';
import { routWrap } from '../../utils/utils';
import CategoryControl from './control';
import { Category } from './interface';

const router = Router();

router.post('/category', routWrap(async (req, res) => {
  res.status(200).send(await CategoryControl.create(req.body));
}));

// router.get('/category/:_id', async (req, res) => {
//     res.status(200).send(await CategoryControl.getById(req.params));
// });
//
// // router.get('/category/category/:categoryId', async (req, res) => {
// //   res.status(200).send(await CategoryControl.getByCategory(req.params));
// // });
//
// router.delete('/category/:_id', async (req, res) => {
//     res.status(200).send(await CategoryControl.delete(req.params));
// });
//
// // router.put('/category/:_id/change-category/:categoryId', async (req, res) => {
// //   res.status(200).send(await CategoryControl.updateCategory(req.params));
// // });
//
// router.put('/category/:_id', async (req, res) => {
//     res.status(200).send(await CategoryControl.update(req.params, req.body));
// });

export default {
  router,
  version: 'v1',
};
