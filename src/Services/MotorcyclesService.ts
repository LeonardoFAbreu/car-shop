import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyclesODM';

export default class MotorcyclesService {
  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const cyclesODM = new MotorcycleODM();
    const getCycles = await cyclesODM.getAll();
    return getCycles.map((e) => this.createMotorcycleDomain(e));
  }

  public async getById(id: string) {
    const cyclesODM = new MotorcycleODM();
    const cyclesById = await cyclesODM.getById(id);
    return this.createMotorcycleDomain(cyclesById);
  }
}
