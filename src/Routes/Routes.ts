import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const routes = Router();

routes.post('/cars', (req, res) => new CarsController(req, res).create());
routes.get('/cars', (req, res) => new CarsController(req, res).getAll());

routes.get('/cars/:id', (req, res) => new CarsController(req, res).getById());

export default routes;