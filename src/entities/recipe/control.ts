import { Mid } from '../../utils/commonIterface';
import CommonValidate from '../../utils/CommonValidate';
import { CategoryId } from '../category/interface';
import CategoryValidate from '../category/validate';
import { Recipe, RecipeCount } from './interface';
import RecipeModel from './model';
import RecipeValidate from './validate';

class RecipeControl {
  public async create(body: Recipe) {
    await RecipeValidate.create(body);
    return RecipeModel.create(body);
  }

  public async delete( _id: Mid ): Promise<Recipe> {
    await RecipeValidate.checkId({ _id });
    return RecipeModel.delete(_id);
  }

  public async getByCategory( _id: CategoryId, page: number, limit: number  ): Promise<RecipeCount> {
    await CategoryValidate.checkId({ _id });
    const count = await RecipeModel.getCountByCategory(_id);
    await CommonValidate.paginate({ page, limit });
    const entities = await RecipeModel.getByCategory(_id, +page, +limit);
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
    const count = await RecipeModel.getCountEntity();
    const entities = await RecipeModel.getAllOfEntity(+page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async updateCategory( _id: Mid, categoryId: Mid ): Promise<Recipe> {
    await RecipeValidate.checkId({ _id });
    await CategoryValidate.checkId({ _id: categoryId });
    await CategoryValidate.possibleChangeParent({ _id, parentCategoryId: categoryId});
    return RecipeModel.updateCategory({ categoryId, _id });
  }

  public async update(_id: Mid, body: Recipe ): Promise<Recipe> {
   return  RecipeModel.update(_id, body);
  }

}

export default new RecipeControl();
