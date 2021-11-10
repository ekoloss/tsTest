import { Mid } from '../../utils/commonIterface';
import CommonValidate from '../../utils/CommonValidate';
import CategoryValidate from '../category/validate';
import CategorySegregationControl from '../categorySegregation/control';
import { Recipe, RecipeCount } from './interface';
import RecipeModel from './model';
import RecipeValidate from './validate';

class RecipeControl {
  public async create(body: Recipe): Promise<Recipe> {
    const { categoryId } = body;
    await RecipeValidate.create(body);
    const recipe: Recipe = await RecipeModel.create(body);
    await CategorySegregationControl.updateCountRecipe(categoryId);
    return recipe;
  }

  public async delete( _id: Mid ): Promise<Recipe> {
    await RecipeValidate.checkId({ _id });
    const recipe: Recipe = await RecipeModel.delete(_id);
    await CategorySegregationControl.updateCountRecipe(recipe.categoryId);
    return recipe;
  }

  public async getByCategory( _id: Mid, page: number, limit: number  ): Promise<RecipeCount> {
    await CategoryValidate.checkId({ _id });
    const count: number = await RecipeModel.getCountByCategory(_id);
    await CommonValidate.paginate({ page, limit });
    const entities: Recipe[] = await RecipeModel.getByCategory(_id, +page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async getById( _id: Mid ): Promise<Recipe> {
    await RecipeValidate.checkId({ _id });
    return RecipeModel.getById(_id);
  }

  public async getAll(page: number, limit: number): Promise<RecipeCount> {
    await CommonValidate.paginate({ page, limit });
    const count: number = await RecipeModel.getCountEntity();
    const entities: Recipe[] = await RecipeModel.getAllOfEntity(+page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async updateCategory( _id: Mid, categoryId: Mid ): Promise<Recipe> {
    await RecipeValidate.checkId({ _id });
    await CategoryValidate.checkId({ _id: categoryId });
    const oldRecipe: Recipe = await RecipeModel.getById(_id);
    const recipe: Recipe = await RecipeModel.updateCategory(categoryId, _id );
    await CategorySegregationControl.updateCountRecipe(oldRecipe.categoryId);
    await CategorySegregationControl.updateCountRecipe(recipe.categoryId);
    return recipe;
  }

  public async update(_id: Mid, body: Recipe ): Promise<Recipe> {
    await RecipeValidate.checkId(_id);
    await RecipeValidate.update(body);
    return  RecipeModel.update(_id, body);
  }

}

export default new RecipeControl();
