import { Mid } from '../../utils/commonIterface';
import CommonValidate from '../../utils/CommonValidate';
import CategoryValidate from '../category/validate';
import CategorySegregationControl from '../categorySegregation/control';
import { Article, ArticleCount } from './interface';
import ArticleModel from './model';
import ArticleValidate from './validate';

class ArticleControl {
  public async create(body: Article): Promise<Article> {
    const { categoryId } = body;
    await ArticleValidate.create(body);
    const article = await ArticleModel.create(body);
    await CategorySegregationControl.updateCountArticle(categoryId);
    return article;
  }

  public async delete( _id: Mid ): Promise<Article> {
    await ArticleValidate.checkId({ _id });
    const article: Article = await ArticleModel.delete(_id);
    const { categoryId } = article;
    await CategorySegregationControl.updateCountArticle(categoryId);
    return article;
  }

  public async getByCategory( _id: Mid, page: number, limit: number  ): Promise<ArticleCount> {
    await CategoryValidate.checkId({ _id });
    const count: number = await ArticleModel.getCountByCategory(_id);
    await CommonValidate.paginate({ page, limit });
    const entities: Article[] = await ArticleModel.getByCategory(_id, +page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async getById( _id: Mid ): Promise<Article> {
    await ArticleValidate.checkId({ _id });
    return ArticleModel.getById(_id);
  }

  public async getAll(page: number, limit: number): Promise<ArticleCount> {
    await CommonValidate.paginate({ page, limit });
    const count: number = await ArticleModel.getCountEntity();
    const entities: Article[] = await ArticleModel.getAllOfEntity(+page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async updateCategory( _id: Mid, categoryId: Mid ): Promise<Article> {
    await ArticleValidate.checkId({ _id });
    await CategoryValidate.checkId({ _id: categoryId });
    const oldArticle: Article = await ArticleModel.getById(_id);
    const article: Article = await ArticleModel.updateCategory(categoryId, _id );
    await CategorySegregationControl.updateCountArticle(oldArticle.categoryId);
    await CategorySegregationControl.updateCountArticle(article.categoryId);
    return article;
  }

  public async update(_id: Mid, body: Article ): Promise<Article> {
    await ArticleValidate.checkId(_id);
    await ArticleValidate.update(body);
    return  ArticleModel.update(_id, body);
  }

}

export default new ArticleControl();
