var express = require('express');
var router = express.Router();

let currencyRoute = require('../controllers/currencyController');

router.get('/convert', currencyRoute.getFromTo);
router.get('/:id', currencyRoute.getOne);
router.get('/', currencyRoute.getAll);

module.exports = router ;