import express, { json } from 'express';
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const ClassesControllers = new ClassesController();
const ConnectionsControllers = new ConnectionsController();


routes.get('/',(request, response) => {

    return response.json({message: 'Hello World'});
});

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.Create);

routes.get('/connections', ConnectionsControllers.index);
routes.post('/connections', ConnectionsControllers.Create);

export default routes;
 