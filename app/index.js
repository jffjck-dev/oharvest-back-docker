import express from 'express';
import expressSession from 'express-session';
import cors from 'cors';

const app = express();

import adminRouter from './backoffice/routers/router.js';
import { authRouter } from './backoffice/routers/auth.router.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { apiRouter } from './api/routers/router.js';
import { swaggerRouter } from './swagger/routers/swagger.router.js';
import { errorHandling } from './services/error/errorHandling.js';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'Guess it!',
    cookie: {
        secure: false,
        maxAge: (1000*60*60)
    }
}));

app.use(express.static('public'));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Route dedicated for the API service */
app.use('/api', apiRouter);

/** Route dedicated for the login and logout */
app.use(authRouter);

/** Route dedicated for the back-office service */
app.use('/admin', authMiddleware, adminRouter);

/** Route dedicated for the Swagger service */
app.use('/docs/api', swaggerRouter);

app.use(errorHandling.notFound);
app.use(errorHandling.manage);

export default app;
