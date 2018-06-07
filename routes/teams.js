var express = require('express');
var router = express.Router();

var teams_controller = require('../controllers/teamsController')

/* GET users listing. */
router.get('/', teams_controller.index);
module.exports = router;
