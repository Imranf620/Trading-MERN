const leapController  = require('../controller/leap.controller');
const express = require('express');
const router = express.Router();


router.post("/enableleap", leapController.create);

module.exports = router;