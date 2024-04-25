// Package Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');

// Local Imports
const Database = require('../database');
const Router = require('../routes');
// Constants
const { port } = require('../config/index');

class Server {
    constructor() {
        this.server = express();
        this.httpServer = http.createServer(this.server);  // Create your own http.Server
    }
    
    init() {
        const { server, httpServer } = this;
        server.use(bodyParser.json());
        server.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );

        // use cors
        server.use(cors( {origin: "*"}));

        // parse request of content-type - application/json
        server.use(express.json());

        //Initiate the database
        Database.connects();

        //Routes
        const routes = Router.getRoutes(server);

        server.use('/', routes);

        httpServer.listen(port, () => {
            console.log(`App is running on port ${port}.`);
        });
    }
}

module.exports = Server;
