var express = require('express');
var router = express.Router();

let syncRoute = require('../controllers/syncController');

router.get('/:id', syncRoute.getOne);
router.get('/import', syncRoute.setAll);
router.get('/', syncRoute.getAll);

module.exports = router ;