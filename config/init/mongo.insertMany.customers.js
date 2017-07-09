// mongodb.insertMany.customers.js

/**
 * @author      Teerapong Singthong
 * @return      Promise
 * @see         http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html?_ga=2.206973200.2020159307.1499535026-178992052.1499266685#insertMany
 */
import APP_CONFIG from '../app.config';

let MongoClient = require('mongodb').MongoClient;
// let test = require('assert');

MongoClient.connect(APP_CONFIG.DATABASE.HOST, (err, db) => {
    let collection = db.collection('customers');
    let ObjectId = require('mongodb').ObjectID;
    
    // return promise
    collection.insertMany(
        [{
            id: ObjectId(1),
            name: 'Richard Johnson',
            createDate: new Date()
        }, {
            id: ObjectId(2),
            name: 'Langdon Thinaty',
            createDate: new Date()
        }, {
            id: ObjectId(3),
            name: 'Golf GGEZ',
            createDate: new Date()
        }]
    )
    .then((ids) => {
        db.close();
    }).
    catch((error) => {
        console.error(error);
    });
});