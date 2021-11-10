import validator from '../component/Validator';

class CommonValidate {
  public paginateSchema = {
    limit: 'required|limit|numeric',
    page: 'required|page|numeric',
  };

  public paginate(paginate): Promise<void> {
    return validator(paginate, this.paginateSchema);
  }

}

export default new CommonValidate();
