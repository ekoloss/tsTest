import { Query } from 'mongoose';
import { CategoryId } from '../../entities/category/interface';
import ModelQuery from './ModelQuery';

class MiddlewareQuery extends ModelQuery {
  constructor(model) {
    super(model);
    this.model = model;
  }
  public getCountByCategory(_id: CategoryId): Query<any, Promise<number>> {
     return this.model.count({
       categoryId: _id,
       isDeleted: false,
     });
  }

  public getByCategory( categoryId: CategoryId, page: number = 0, limit: number ): Query<any, Document[]> {
    const skip = page * limit;
    return this.model.find( {
        categoryId,
        isDeleted: false,
      },
      {
        isDeleted: 0,
      },
      {
        limit,
        skip,
      },
    );
  }

  public updateCategory( { categoryId, _id } ) {
    return this.model.findOneAndUpdate( {
        _id,
        isDeleted: false,
      },
      {
        categoryId,
      },
      {
        fields: {
          isDeleted: 0,
        },
        returnOriginal: false,
      } ).lean();
  }
}

export default MiddlewareQuery;
