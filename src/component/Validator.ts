import { Types } from 'mongoose';
import Validator from 'validatorjs';
import CategoryModel from '../entities/category/model';

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

Validator.registerAsync('mongoId_valid', (_id, attribute, req, passes) => {
  if (Types.ObjectId.isValid(_id)) {
    passes();
  } else {
    passes(false, `Cast to ObjectId failed for value \"${_id}\" (type string) at path \"_id\" for model \"Category\"`);
  }
});

export default Validator;
