import express from 'express';

// service
import CustomerService from '../services/customer.service';

// instance the new object
let _CustomerService = new CustomerService();

// router
const CustomerRoutes = express.Router();

// middleware do logging
CustomerRoutes.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

/**
 * @route   /
 * @method  GET
 */
CustomerRoutes.get('/', (req, res, next) => {
    res.json({
        message: 'Hooray!!! return customers list...'
    });
});

/**
 * @route   /getCustomers
 * @method  GET
 */
CustomerRoutes.get('/getCustomers', (req, res, next) => {
    _CustomerService.getAllCustomer(req, res);
});

export default CustomerRoutes;