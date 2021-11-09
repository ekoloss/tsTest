import ArticleModel from '../article/model';
import RecipeModel from '../recipe/model';
import { CategorySegregation } from './interface';
import CategorySegregationModel from './model';

class CategorySegregationControl {
  public create(body: CategorySegregation): Promise<CategorySegregation> {
    return CategorySegregationModel.create(body);
  }

  public async updateCountArticle( categoryId ) {
    const count = await ArticleModel.getCountByCategory( categoryId );
    await CategorySegregationModel.update( categoryId, { articleCount: count });
  }

  public async updateCountRecipe( categoryId ) {
    const count = await RecipeModel.getCountByCategory(categoryId);
    await CategorySegregationModel.update(categoryId, { recipeCount: count });
  }
}

export default new CategorySegregationControl();
