import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

class MotorcyclesController {
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
}

export default MotorcyclesController;