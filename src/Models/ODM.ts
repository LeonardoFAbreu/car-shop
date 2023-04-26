import { Model, Schema, models, model } from 'mongoose';

abstract class ODM <T> {
  private schema: Schema;
  readonly model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }
}

export default ODM;