import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const cyclesInfo: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const cycles = await this.service.create(cyclesInfo);
    return this.res.status(201).json(cycles);
  }
  
  public async getAll() {
    const allCycles = await this.service.getAll();
    return this.res.status(200).json(allCycles);
  }

  public async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    const cyclesById = await this.service.getById(id);

    if (!cyclesById) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(cyclesById);
  }
}