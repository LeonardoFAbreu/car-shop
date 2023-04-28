import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post('/cars', (req, res) => new CarsController(req, res).create());
routes.get('/cars', (req, res) => new CarsController(req, res).getAll());
routes.get('/cars/:id', (req, res) => new CarsController(req, res).getById());
routes.put('/cars/:id', (req, res) => new CarsController(req, res).carUpdate());
routes.post('/motorcycles', (req, res) => new MotorcyclesController(req, res).create());

export default routes;