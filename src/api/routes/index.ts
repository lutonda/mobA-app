import TypeOrmInit from "../../application/TypeOrmInit";
import { Currency } from "../../entities/Currency";
import { Version } from "../../entities/Version";

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

    new TypeOrmInit().init();

        new Currency();
        new Version();
    res.json('wait a while');
});


module.exports = router ;