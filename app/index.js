const express = require('express');
const app = express();

const cors = require('cors');

const mainRouter = require('./routers/main.router');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.use(mainRouter);

module.exports = app;
