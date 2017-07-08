# mongodb-express-nodejs
The API Backend with MEN stack (MongoDB-Express-NodeJS)

This is my backend REST API boilerplate.

# Install
1) Install node module
`npm i`

2) Install MongdoDB to your working machine
3) For Windows OS you probable need create direction in `C:\data\db`
4) Run `npm run init-mongo` to initial `customer` document (demo schema)

# Run
1) For Windows OS, please locate to `C:\Program Files\MongoDB\Server\3.x\bin`, and then run command `mongod` to start mongodb database server
2. `npm run serve` to start this project (express server and mongoose connection)

# Development instruction
- [model] = you will define you document or schema here
- [controller] = where you will create new controller, to define method and uri this file working as a express router
- [service] = where you use mongoose api querying the MongoDB and return the result to your controller
- server.js = import `<yourController>` and binding your controller in this file

# How to create bulk insert document


# References
- [https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

- [https://www.youtube.com/watch?v=L5Nle1VXYnw](https://www.youtube.com/watch?v=L5Nle1VXYnw)
- [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)
- [https://www.davidmeents.com/blog/create-a-react-js-support-ticketing-system-using-mongodb/](https://www.davidmeents.com/blog/create-a-react-js-support-ticketing-system-using-mongodb/)

