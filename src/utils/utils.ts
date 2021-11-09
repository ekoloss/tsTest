import { keys, omit } from 'lodash';

export const routWrap = (callback) => {
  return async  (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

const toDelete = ['isDeleted'];
export const cleanData =  ( obj ) => omit(obj, toDelete);
