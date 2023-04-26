import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsService {
  public createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarsODM();
    const newCars = await carODM.create(car);
    return this.createCarDomain(newCars);
  }

  public async getAll() {
    const carODM = new CarsODM();
    const getCars = await carODM.getAll();
    return getCars.map((e) => this.createCarDomain(e));
  }

  public async getById(id: string) {
    const carODM = new CarsODM();
    const carById = await carODM.getById(id);
    return this.createCarDomain(carById);
  }

  public async carUpdate(id: string, car: ICar) {
    const carODM = new CarsODM();
    const carId = await carODM.getById(id);
    if (!carId) {
      throw new Error('Car not found');
    }
    await carODM.carUpdate(id, car);
    const carUpdated = await carODM.getById(id);
    return this.createCarDomain(carUpdated);
  }
}

export default CarsService;