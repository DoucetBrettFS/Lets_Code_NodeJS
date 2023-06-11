const express = require('express');
const app = express();
const router = require('./router/router');
const middleware = require('./middleware');

// use middleware to parse json payloads into our request model
middleware(app);

// service actuator - localhost:3000
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Service is up' });
});

// use middleware to define my router
app.use('/exercise', router);
module.exports = app;
