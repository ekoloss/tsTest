import validator from '../../component/Validator';

class RecipeValidate {
  public recipe = {
    categoryId: 'required|mongoId_valid|string|category_exist',
    description: 'required|string',
    title: 'required|string',
  };
  public idSchema = {
    _id: 'mongoId_valid|recipe_exist',
  };

  public create(value): Promise<void> {
    return validator(value, this.recipe);
  }

  public checkId(id): Promise<void> {
    return validator(id, this.idSchema);
  }
}

export default new RecipeValidate();
