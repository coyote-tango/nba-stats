var express = require('express');
var router = express.Router();

var players_controller = require('../controllers/playersController')

/* GET users listing. */
router.get('/', players_controller.index);
router.get('/:id', players_controller.find_player);
module.exports = router;
