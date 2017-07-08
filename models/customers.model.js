// customer.service
// define <customer> schema

import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: 'Kindly enter the name of customer'
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

let Customers = mongoose.model('Customers', CustomerSchema);

// export <Customers> model
module.exports = Customers;