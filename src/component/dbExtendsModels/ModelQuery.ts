import { Model, Query, Types } from 'mongoose';
import { Category, CategoryId } from '../../entities/category/interface';
import { Recipe, RecipeId } from '../../entities/recipe/interface';
import { Mid } from '../../utils/commonIterface';
import { cleanData } from '../../utils/utils';

class ModelQuery {
    public model: Model<any>;

    constructor(model) {
        this.model = model;
    }

    public async create(body): Promise<any> {
        const entity = await this.model.create(body);
        return cleanData(entity.toJSON());
    }

    public getById(_id: Mid): Query<any, Promise<object>> {
        return this.model.findOne({ _id, isDeleted: false }, {
            isDeleted: 0,
        });
    }

    public getAll(): Query<any, Promise<object>> {
        return this.model.find({  isDeleted: false }, {
            isDeleted: 0,
        });
    }

    public delete(_id: Mid): Query<any, Promise<object>> {
        return this.model.findOneAndUpdate({ _id }, { isDeleted: true }, {
            fields: { isDeleted: 0 },
            returnOriginal: false,
        });
    }

    public update(_id, toUpdate): Query<any, Promise<Recipe>> {
        return this.model.findOneAndUpdate({
                _id,
                isDeleted: false,
            },
            toUpdate,
            {
                fields: {
                    isDeleted: 0,
                },
                returnOriginal: false,
            }).lean();
    }

    public getCountEntity(): Query<any, Promise<number>> {
        return this.model.count({
            isDeleted: false,
            type: '_id',
        });
    }

    public getAllOfEntity(page: number = 0, limit: number): Query<any, Document[]> {
        const skip = page * limit;

        return this.model.find({
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

    public async ifExist(_id: string | Types.ObjectId) {
        const res  = await this.model.findOne({ _id, isDeleted: false });
        return !!res;
    }
}

export default ModelQuery;
