const express = require('express');
const morgan = require('morgan');

const stageRouter = require('./routes/stageRoutes');
const listRouter = require('./routes/listRoutes');
const todoRouter = require('./routes/todoRoutes');

const app = express();

if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/stage', stageRouter);
app.use('/list', listRouter);
app.use('/todo', todoRouter);

module.exports = app;
