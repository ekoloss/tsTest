import validator from '../../component/Validator';
import { Recipe } from './interface';

class RecipeValidate {
  public recipe = {
    categoryId: 'required|mongoId_valid|string|category_exist',
    description: 'required|string',
    title: 'required|string',
  };

  public updateSchema = {
    description: 'string',
    title: 'string',
  };

  public idSchema = {
    _id: 'mongoId_valid|recipe_exist',
  };

  public create(value: Recipe): Promise<void> {
    return validator(value, this.recipe);
  }

  public checkId<T>(id: T): Promise<void> {
    return validator(id, this.idSchema);
  }

  public update(body: Recipe): Promise<void> {
    return validator(body, this.updateSchema);
  }
}

export default new RecipeValidate();
