'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _app = require('./config/app.config');

var _app2 = _interopRequireDefault(_app);

var _customer = require('./controllers/customer.controller');

var _customer2 = _interopRequireDefault(_customer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * configure app to use bodyParser()
 * this will let us get the data from a POST
 */
// middle-ware before my handle
// server.js

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

/**
 * Controller / Router
 */


/**
 * Binding router
 */
app.use('/api/customer', _customer2.default);

/**
 * Starting the server
 */
app.listen(_app2.default.PORT, function () {
  console.log('======================');
  console.log('MEN-STACK: Started listenting on port', _app2.default.PORT);
  console.log('======================');
});

/**
 * Connect to MongoDB
 */
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(_app2.default.DATABASE.HOST);
