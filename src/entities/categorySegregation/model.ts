import ModelQuery from '../../component/dbExtendsModels/ModelQuery';
import db from '../../component/mongodb';
import { Category } from '../category/interface';
import { CategorySegregation } from './interface';

class CategorySegregationModel extends ModelQuery {
  public create({ _id, name, parentCategoryId }: Category): Promise<CategorySegregation> {
    return super.create({ _id, name, parentCategoryId });
  }

}

export default new CategorySegregationModel(db.collections.categorySegregation);
