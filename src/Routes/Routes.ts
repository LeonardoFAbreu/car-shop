import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const routes = Router();

routes.post('/cars', (req, res) => new CarsController(req, res).create());

export default routes;