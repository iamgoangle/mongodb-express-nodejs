# mongodb-express-nodejs
The API Backend with MEN stack (MongoDB-Express-NodeJS)

This is my backend REST API boilerplate.

# Install
1) `npm i`

2) Install MongdoDB to your working machine
3) For Windows OS you probably need to create direction in `C:\data\db`
4) Run `npm run mongo-init` to initial `customer` documents

# Run
1) For Windows OS, please locate to `C:\Program Files\MongoDB\Server\3.x\bin`, and then run command `mongod` to start mongodb database server
2) Open `/config/app.config.js` to change port of MongoDB server
3) `npm run serve` to start this project (express server and mongoose connection)

# Development instruction
- [model] = you will define you document or schema here
- [controller] = where you will create new controller, to define method and uri this file working as a express router
- [service] = where you use mongoose api querying the MongoDB and return the result to your controller
- server.js = import `<yourController>` and binding your controller in this file

# How to create bulk insert document
- in the `config/init/mongo.insertMany.customers.js` is a javascript code to insert multiple document to `customers` schema, you can take this file for your template.

# References
- [https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

- [https://www.youtube.com/watch?v=L5Nle1VXYnw](https://www.youtube.com/watch?v=L5Nle1VXYnw)
- [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)
- [https://www.davidmeents.com/blog/create-a-react-js-support-ticketing-system-using-mongodb/](https://www.davidmeents.com/blog/create-a-react-js-support-ticketing-system-using-mongodb/)

- [https://docs.mongodb.com/manual/tutorial/getting-started/](https://docs.mongodb.com/manual/tutorial/getting-started/)

