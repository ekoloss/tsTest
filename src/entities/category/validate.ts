import validator from '../../component/Validator';
import CategoryModel from '../category/model';
import ErrorsHandler from "../../component/ErrorsHandler";

class CategoryValidate {
  public category = {
    name: 'required|string',
    parentCategoryId: 'mongoId_valid|category_exist|string',
  };

  public idSchema = {
    _id: 'mongoId_valid|category_exist',
  };

  public changeParentSchema = {
    _id: 'mongoId_valid',
    parentCategoryId: 'mongoId_valid|change_parent_category',
  };

  public checkId(id): Promise<void> {
    return validator(id, this.idSchema);
  }

  public async possibleChangeParent( { _id , parentCategoryId } ) {
    console.log(_id , parentCategoryId)
    if ( !parentCategoryId ) {
      return;
    }

    const categories = await CategoryModel.getAll();
    const categoriesMap = new Map( categories.map( ( item ) => [String( item._id ), item] ) );
    let parent;
    let checkId = parentCategoryId;
    console.log('checkId', checkId);
    const currentId = String( _id );

    while ( checkId ) {
      console.log('checkId1', checkId === currentId)
      if ( checkId === currentId ) {
        break;
      }

      parent = categoriesMap.get( checkId );
      console.log('parent', parent)
      checkId = parent.parentCategoryId ? parent.parentCategoryId.toString() : parent.parentCategoryId;
      console.log('checkId3', checkId)
    }

    if ( checkId ) {
      const response = {
        message: 'Sorry you cannot change to the given parent category as it is a child category',
      };
      ErrorsHandler.make( response, 400 );
    }
  }
}

export default new CategoryValidate();
