import validator from '../../component/Validator';
import { Article } from './interface';

class ArticleValidate {
  public article = {
    categoryId: 'required|mongoId_valid|string|category_exist',
    description: 'required|string',
    mainText: 'required|string',
    title: 'required|string',
  };

  public updateSchema = {
    description: 'string',
    mainText: 'string',
    title: 'string',
  };

  public idSchema = {
    _id: 'mongoId_valid|article_exist',
  };

  public create(value: Article): Promise<void> {
    return validator(value, this.article);
  }

  public checkId<T>(id: T): Promise<void> {
    return validator(id, this.idSchema);
  }

  public update(body: Article): Promise<void> {
    return validator(body, this.updateSchema);
  }
}

export default new ArticleValidate();
