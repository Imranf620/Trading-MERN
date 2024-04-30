const keplrRoutes = require('../routes/keplr.route');
const leapRoutes = require('../routes/leap.route');

const express = require("express");
const router = express.Router();

class Router {
    static getRoutes = () => {
      // Routes
      router.use("/wallet", keplrRoutes);  
      router.use("/LeapWallet", leapRoutes);  
      // default index route
      router.get("/", (_, res) => res.send("Welcome to Wallet-app."));
  
      return router;
    };
}
module.exports = Router;