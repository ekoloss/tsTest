import { Category } from './interface';
import CategoryModel from './model';

class CategoryControl {
    public create(body: Category): Promise<Category> {
        return CategoryModel.create(body);
    }
}

export default new CategoryControl();
