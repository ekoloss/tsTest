import { Query } from 'mongoose';
import { Mid } from '../../utils/commonIterface';
import { CategoryId } from '../category/interface';
import { Recipe, RecipeCount } from './interface';
import RecipeModel from './model';
import Validate from './validate';

class RecipeControl {
  public async create(body: Recipe) {
    await Validate.create(body);
    throw new Error('qqqqqqqqqqq');
    // return RecipeModel.create(body);
  }

  public async delete( _id: Mid ): Promise<Recipe> {
    return RecipeModel.delete(_id);
  }

  public async getByCategory( _id: CategoryId, page: string, limit: string  ): Promise<RecipeCount> {
    const count = await RecipeModel.getCountByCategory(_id);
    const entities = await RecipeModel.getByCategory(_id, +page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async getById( _id: Mid ): Promise<Recipe> {
    return RecipeModel.getById(_id);
  }

  public async getAll(page: string, limit: string): Promise<RecipeCount> {
    const count = await RecipeModel.getCountEntity();
    const entities = await RecipeModel.getAllOfEntity(+page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public updateCategory( _id: Mid, categoryId: Mid ): Query<any, Promise<Recipe>> {
    return RecipeModel.updateCategory({ categoryId, _id });
  }

  public async update(_id: Mid, body: Recipe ): Promise<Recipe> {
   return  RecipeModel.update(_id, body);
  }

}

export default new RecipeControl();
