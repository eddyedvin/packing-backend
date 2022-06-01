const express = require('express');
const morgan = require('morgan');

const stageRouter = require('./routes/stageRoutes');

const app = express();

if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/stage', stageRouter);

module.exports = app;
