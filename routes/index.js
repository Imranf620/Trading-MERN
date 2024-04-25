const keplrRoutes = require('../routes/keplr.route');

const express = require("express");
const router = express.Router();

class Router {
    static getRoutes = () => {
      // Routes
      router.use("/wallet", keplrRoutes);  
      // default index route
      router.get("/", (_, res) => res.send("Welcome to Auto-app."));
  
      return router;
    };
}
module.exports = Router;