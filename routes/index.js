var express = require('express');
var router = express.Router();
let mainController  = require('../controller/mainController')

/* GET home page. */
router.get('/', mainController.homeRender);

module.exports = router;
