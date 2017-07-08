// server.js

import express from 'express';
import bodyParser from 'body-parser';  // middle-ware before my handle
import mongoose from 'mongoose'; 

import APP_CONFIG from './config/app.config';

/**
 * configure app to use bodyParser()
 * this will let us get the data from a POST
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Controller / Router
 */
import CustomerController from './controllers/customer.controller';

/**
 * Binding router
 */
app.use('/api/customer', CustomerController);

/**
 * Starting the server
 */
app.listen(APP_CONFIG.PORT, () => {
    console.log('=======================================================');
    console.log('MEN-STACK: Started listenting on port', APP_CONFIG.PORT);
    console.log('=======================================================');

    console.log(APP_CONFIG.DATABASE.HOST);
});

/**
 * Connect to MongoDB
 */
mongoose.Promise = global.Promise;
mongoose.connect(APP_CONFIG.DATABASE.HOST);