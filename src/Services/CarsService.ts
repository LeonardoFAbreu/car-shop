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
}

export default CarsService;