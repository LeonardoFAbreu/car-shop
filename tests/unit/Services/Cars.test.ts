import chai from 'chai';
import Sinon from 'sinon';
import CarsODM from '../../../src/Models/CarsODM';
import CarsService from '../../../src/Services/CarsService';
import { validCar, carsList } from './CarsMock';

const { expect } = chai;

describe('Test Service layer', function () {
  const service = new CarsService();

  afterEach(function () {
    Sinon.restore();
  });

  it('Register a new car', async function () {
    Sinon.stub(CarsODM.prototype, 'create').resolves({ ...validCar, id: '000001' });
    const response = await service.create(validCar);
    expect(response).to.be.deep.equal({ ...validCar, id: '000001' });
  });

  it('returns list with all cars', async function () {
    Sinon.stub(CarsODM.prototype, 'getAll').resolves(carsList);
    const response = await service.getAll();
    expect(response).to.be.deep.equal(carsList);
  });

  it('Displays an error message if there is no car with the entered ID', async function () {
    Sinon.stub(CarsODM.prototype, 'getById').resolves(null);
    const id = '634852326b35b59438fbea2f';

    try {
      await service.getById(id);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
});