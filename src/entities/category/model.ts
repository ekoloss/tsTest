import ModelQuery from '../../component/dbExtendsModels/ModelQuery';
import db from '../../component/mongodb';
import { Category } from './interface';

class CategoryModel extends ModelQuery {
    public create(body: Category): Promise<Category> {
        return super.create(body);
    }
}

export default new CategoryModel(db.collections.category);
