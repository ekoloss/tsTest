import { Mid } from '../../utils/commonIterface';
import CommonValidate from '../../utils/CommonValidate';
import { CategoryId } from '../category/interface';
import CategoryValidate from '../category/validate';
import { Article, ArticleCount } from './interface';
import ArticleModel from './model';
import ArticleValidate from './validate';

class ArticleControl {
  public async create(body: Article) {
    await ArticleValidate.create(body);
    return ArticleModel.create(body);
  }

  public async delete( _id: Mid ): Promise<Article> {
    await ArticleValidate.checkId({ _id });
    return ArticleModel.delete(_id);
  }

  public async getByCategory( _id: CategoryId, page: number, limit: number  ): Promise<ArticleCount> {
    await CategoryValidate.checkId({ _id });
    const count = await ArticleModel.getCountByCategory(_id);
    await CommonValidate.paginate({ page, limit });
    const entities = await ArticleModel.getByCategory(_id, +page, +limit);
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
    const count = await ArticleModel.getCountEntity();
    const entities = await ArticleModel.getAllOfEntity(+page, +limit);
    return {
      entities,
      total: count,
    };
  }

  public async updateCategory( _id: Mid, categoryId: Mid ): Promise<Article> {
    await ArticleValidate.checkId({ _id });
    await CategoryValidate.checkId({ _id: categoryId });
    return ArticleModel.updateCategory({ categoryId, _id });
  }

  public async update(_id: Mid, body: Article ): Promise<Article> {
    await ArticleValidate.checkId(_id);
    await ArticleValidate.update(body);
    return  ArticleModel.update(_id, body);
  }

}

export default new ArticleControl();
