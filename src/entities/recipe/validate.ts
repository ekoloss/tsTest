import { keys, size } from 'lodash';
import { Types } from 'mongoose';
import ErrorsHandler from '../../component/ErrorsHandler';
import Validator from '../../component/Validator';
import CategoryModel from '../category/model';

class Validate {
  // public RecipeValidateCreate: RecipeValidateCreate
  public recipe = {
    categoryId: 'required|mongoId_valid|string|category_exist',
    description: 'required|string',
    title: 'required|min:3|string',
  };

  public async create(value) {

    const validation = new Validator(value, this.recipe);
    const res = [];

    await new Promise((resolve) => validation.checkAsync(null, () => {
        const errors = validation.errors.all();
        for (const item in errors) {
          res.push({
            field: item,
            message: errors[item][0],
          });
        }
        resolve();
      }));

    return size(res) > 0 ? ErrorsHandler.throw(res , 400) : true;
}
}

export default new Validate();
