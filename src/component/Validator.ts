import { keys } from 'lodash';
import { Types } from 'mongoose';
import Validator from 'validatorjs';
import CategoryModel from '../entities/category/model';
import RecipeModel from '../entities/recipe/model';
import ErrorsHandler from './ErrorsHandler';

Validator.registerAsync('category_exist', async (categoryId, attribute, req, passes) => {
  try {
    if (await CategoryModel.ifExist(categoryId)) {
      passes();
    } else {
      passes(false, 'CategoryId not exist');
    }
  } catch {
    passes(false, 'CategoryId not exist');
  }
});

Validator.registerAsync('recipe_exist', async (_id, attribute, req, passes) => {
  try {
    if (await RecipeModel.ifExist(_id)) {
      passes();
    } else {
      passes(false, 'Recipe not exist');
    }
  } catch {
    passes(false, 'Recipe not exist');
  }
});

Validator.registerAsync('article_exist', async (_id, attribute, req, passes) => {
  try {
    if (await RecipeModel.ifExist(_id)) {
      passes();
    } else {
      passes(false, 'Article not exist');
    }
  } catch {
    passes(false, 'Article not exist');
  }
});

Validator.registerAsync('change_parent_category', async (body, attribute, req, passes, ...args) => {
  console.log('body', body)
  console.log('req', req)
  console.log('args', args)
  // try {
  //   if (await RecipeModel.ifExist(_id)) {
  //     passes();
  //   } else {
  //     passes(false, 'Article not exist');
  //   }
  // } catch {
  //   passes(false, 'Article not exist');
  // }
});

Validator.registerAsync('mongoId_valid', (_id, attribute, req, passes) => {
  if (Types.ObjectId.isValid(_id)) {
    passes();
  } else {
    passes(false, `Cast to ObjectId failed for value \"${_id}\" (type string) at path \"_id\" `);
  }
});

Validator.registerAsync('page', (page, attribute, req, passes) => {
  page >= 0 ? passes() : passes(false, 'Page cannot be less than 0');
});

Validator.registerAsync('limit', (limit, attribute, req, passes) => {
  limit >= 1 ? passes() : passes(false, 'Limit cannot be less than 1');
});

export default (value, schema): Promise<void> => {
  const validation = new Validator(value, schema);

  return new Promise((resolve, reject) => {
    try {
      validation.checkAsync(() => {
        resolve();
      }, () => {
        const errors = validation.errors.all();
        const result = keys(errors).reduce((all, item) => {
          const list = errors[item].map((key) => ({
            field: item,
            message: key,
          }));

          return [
            ...all,
            ...list,
          ];
        }, []);
        reject(ErrorsHandler.make(result, 400));
      });
    } catch (e) {
      reject(e);
    }
  });
};
