import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';

import swaggerFile from './swagger.json';

import './database';

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.listen(3000, () => console.log('Server running on port 3000'));
