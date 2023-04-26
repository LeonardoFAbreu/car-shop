import { Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ODM from './ODM';

class CarsODM extends ODM<ICar> {
  constructor() {
    const carSchema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    const name = 'cars';
    super(carSchema, name);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<ICar | null> {
    return this.model.findOne({ _id });
  }

  public async carUpdate(_id: string, obj: Partial<ICar>): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<ICar>,
    );
  }
}

export default CarsODM;