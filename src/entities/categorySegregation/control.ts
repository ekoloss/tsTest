import { Mid } from '../../utils/commonIterface';
import ArticleModel from '../article/model';
import RecipeModel from '../recipe/model';
import { CategorySegregation } from './interface';
import CategorySegregationModel from './model';

class CategorySegregationControl {
  public create(body: CategorySegregation): Promise<CategorySegregation> {
    return CategorySegregationModel.create(body);
  }

  public async updateCountArticle( categoryId: Mid ): Promise<void> {
    const count: number = await ArticleModel.getCountByCategory( categoryId );
    await CategorySegregationModel.update( categoryId, { articleCount: count });
  }

  public async updateCountRecipe( categoryId: Mid ): Promise<void> {
    const count: number = await RecipeModel.getCountByCategory(categoryId);
    await CategorySegregationModel.update(categoryId, { recipeCount: count });
  }
}

export default new CategorySegregationControl();
