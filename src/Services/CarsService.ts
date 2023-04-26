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
}

export default CarsService;