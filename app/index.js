import express from 'express';
const app = express();

import cors from 'cors';

import mainRouter from './routers/main.router.js';
import { apiRouter } from './routers/api/router.js';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.use(mainRouter);
app.use('/api', apiRouter);


export default app;
