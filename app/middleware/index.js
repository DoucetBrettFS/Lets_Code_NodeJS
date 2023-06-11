const { json } = require('express');
const morgan = require('morgan');

module.exports = (app) => {
    app.use(json());
    app.use(morgan('dev'));
};
