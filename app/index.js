import express from 'express';
import cors from 'cors';

const app = express();

import adminRouter from './backoffice/routers/router.js';
import { apiRouter } from './api/routers/router.js';
import { swaggerRouter } from './swagger/routers/swagger.router.js';
import { errorHandling } from './services/error/errorHandling.js';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Route dedicated for the API service */
app.use('/api', apiRouter);

/** Route dedicated for the back-office service */
app.use('/admin', adminRouter);

/** Route dedicated for the Swagger service */
app.use('/docs/api', swaggerRouter);

app.use(errorHandling.notFound);
app.use(errorHandling.manage);

export default app;
