import Customers from '../models/customers.model';

class CustomerService {
    constructor () {

    }
    
    /**
     * @description Query to get all <customer>
     * @param {any} req 
     * @param {any} res 
     * @memberof CustomerService
     */
    async getAllCustomer (req, res) {
        // Allows express access origin
        res.header('Access-Control-Allow-Origin', '*');
  		res.header('Access-Control-Allow-Headers', 'X-Requested-With');

        try {
            // mongoose
            let query = {};
            await Customers.find(query).exec((error, customers) => {
                if (customers) {
                    res.json(customers);
                } else {
                    throw error;
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export default CustomerService;