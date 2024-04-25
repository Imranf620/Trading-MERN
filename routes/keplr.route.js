const keplrController  = require('../controller/keplr.controller');
const express = require('express');
const router = express.Router();


router.post("/enablekeplr", keplrController.create);

module.exports = router;