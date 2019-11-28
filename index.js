const express = require('express');
const server = express();

//middleware imports
const logger = require('morgan');

//router imports
const weatherRouter = require('./routers/weather.router.js');

const port = 8080;

server.use(logger('dev'));

server.use(weatherRouter);

server.listen(port, () => {
    console.log(`Now listening on port: ${port}`)
});
