import TypeOrmInit from "../../application/TypeOrmInit";

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

    new TypeOrmInit().init();
    res.json('wait a while');
});


module.exports = router ;