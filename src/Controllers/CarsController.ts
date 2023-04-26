import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

class CarsController {
  private req: Request;
  private res: Response;
  private service: CarsService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarsService();
  }

  public async create() {
    const carsInfo: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const cars = await this.service.create(carsInfo);
    return this.res.status(201).json(cars);
  }

  public async getAll() {
    const allCars = await this.service.getAll();
    return this.res.status(200).json(allCars);
  }

  public async getById() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    const carById = await this.service.getById(id);

    if (!carById) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(carById);
  }
}

export default CarsController;
